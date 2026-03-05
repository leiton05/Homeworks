// src/tools/attendFirstPatient.ts
import type { Patients } from "./PatientList";
import type { LinkedList } from "../tools/LinkedList";
import { PatientsToArray } from "./PatientList";

export interface AttendResult {
  attended: Patients | null;
  updatedList: LinkedList;
  updatedArray: Patients[];
}

export function AttendFirstPatient(list: LinkedList): AttendResult {
  if (!list || !list.head) {
    return {
      attended: null,
      updatedList: list,
      updatedArray: []
    };
  }

  const attended = list.head.value;

  list.remove(list.head);
  const updatedArray = PatientsToArray(list);

  return {
    attended,
    updatedList: list,
    updatedArray
  };
}