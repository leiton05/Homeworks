import { useState } from "react";
import type { Client } from "../models/Client";
import Queue from "../tools/Queue";

interface ClientFormProp {
  queue: Queue<Client>;
  setQueue: (queue: Queue<Client>) => void;
}

export function ClientForm({ queue, setQueue }: ClientFormProp) {
  const [name, setName] = useState("");
  const [money, setMoney] = useState<number>(0);

  const attendClient = () => {
    if (queue.isEmpty()) {
      console.log("No hay clientes restantes");
      return;
    }

    const clients = queue.getItems();
    clients.shift();
    const newQueue = new Queue<Client>(clients);
    setQueue(newQueue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("Submiteando");

    e.preventDefault();

    const newClient: Client = {
      name: name,
      money: money,
      date: new Date(),
    };

    const newQueue = new Queue<Client>([...queue.getItems(), newClient]);
    setQueue(newQueue);

    setName("");
    setMoney(0);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            gap: 12,
            padding: 12,
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Monto a retirar"
            value={money}
            onChange={(e) => setMoney(Number(e.target.value))}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            padding: 12,
            justifyContent: "center",
          }}
        >
          <button type="submit">Agregar Cliente</button>
          <button type="button" onClick={attendClient}>
            Atender
          </button>
        </div>
      </form>
    </>
  );
}
