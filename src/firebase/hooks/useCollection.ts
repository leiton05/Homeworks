import { useState } from "react";
import { db } from "../config.ts";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  type DocumentData,
  type WhereFilterOp,
} from "firebase/firestore";

export type Filter = [string, WhereFilterOp, unknown];

export const useCollection = <T>(table: string) => {
  /* Establezco el tipo que espero que retornen mi CRUD, 
  pues quiero que regrese el elemento completo y su id*/

  type Doc<T> = {
    id: string;
  } & T;

  /* Estados */
  const [results, setResults] = useState<Doc<T>[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /* Este viene siendo el READ de este CRUD */
  /* Basicamente se crea el metodo getAll que permite realizar una petición
  que devuelva todos los elementos de cierta tabla que coincida con el filtro
  proporcionado, si no se ingresa ningún filtro se toma como vacio */
  const getAll = async (filters: Filter[] = []): Promise<Doc<T>[]> => {
    /* El estado pending indica si la operación está en curso */
    setIsPending(true);
    /* Setea el estado del error en nulo durante la operación */
    setError(null);

    try {
      /* Se crea una referencia a una coleccion de Firestore y se almacena en q */
      let q = query(collection(db, table));

      /* Recorre toda la lista de filtros y realiza una petición con todos los datos filtrados de forma iterada
      y de todos los filtros colocados*/
      filters.forEach(([field, op, value]) => {
        q = query(q, where(field, op, value));
      });

      /* Aquí es donde se realiza como tal la petición a Firestore y espera que 
      sea respondida con un QuerySnapshot, que es un paquete que contiene todos
      los elementos que coincidieron con los filtros*/
      const snapshot = await getDocs(q);

      /* Se busca para este QuerySnapshot a un arreglo de Doc<T> 
      
      Recorre cada elemento del arreglo de los documentos crudos del Firestore
      y los convierte con un map en el Tipo generico de la siguiente manera:
      
      Extrae el id del objeto con el id: d.id
      
      Luego extrae sus datos propios con el d.data
      
      y queda cada elemento con su data extraida y su correspondiente id, cumpliendo así
      el tipo definido dd Doc<T>*/

      const docs: Doc<T>[] = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as T),
      }));

      setResults(docs);
      setIsPending(false);
      return docs;
    } catch {
      setError(
        `Error en la consulta de los datos solicitados en la tabla ${table}`,
      );
      setIsPending(false);
      return [];
    }
  };
  const getById = async (id: string): Promise<Doc<T> | null> => {
    setIsPending(true);
    setError(null);

    try {
      const docRef = doc(db, table, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const result: Doc<T> = {
          id: docSnap.id,
          ...(docSnap.data() as T),
        };

        setIsPending(false);
        return result;
      } else {
        setIsPending(false);
        return null;
      }
    } catch {
      setIsPending(false);
      setError(
        `Error al obtener el registro solcitado de la colección ${table}`,
      );
      return null;
    }
  };

  const add = async (data: T): Promise<string | null> => {
    setIsPending(true);
    setError(null);

    try {
      const ref = await addDoc(collection(db, table), {
        ...data,
        createdAt: serverTimestamp(),
      } as DocumentData);

      setIsPending(false);
      return ref.id;
    } catch {
      setIsPending(false);
      setError(`Error al agregar un nuevo registro en la colección ${table}`);
      return null;
    }
  };

  const setById = async (id: string, data: T): Promise<boolean> => {
    setIsPending(true);
    setError(null);

    try {
      const docRef = doc(db, table, id);

      await setDoc(docRef, {
        ...data,
        createdAt: serverTimestamp(),
      });

      setIsPending(false);
      return true;
    } catch {
      setError(`Error al crear el documento en ${table} con id ${id}`);
      setIsPending(false);
      return false;
    }
  };

  const update = async (id: string, data: DocumentData) => {
    setIsPending(true);
    setError(null);

    try {
      await updateDoc(doc(db, table, id), {
        ...data,
        updatedAt: serverTimestamp(),
      });

      setIsPending(false);
      return true;
    } catch {
      setIsPending(false);
      setError(
        `Error al actualizar el registro solicitado de la colección ${table}`,
      );
      return false;
    }
  };

  const remove = async (id: string) => {
    setIsPending(true);
    setError(null);

    try {
      await deleteDoc(doc(db, table, id));
      setIsPending(false);
      return true;
    } catch {
      setError(
        `Error al eliminar el registro solicitado de la colección ${table}`,
      );
      setIsPending(false);
      return false;
    }
  };

  return {
    results,
    isPending,
    error,
    getAll,
    getById,
    add,
    setById,
    update,
    remove,
  };
};
