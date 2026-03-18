import type { Client } from "../models/Client";
import type Queue from "../tools/Queue";

interface ClientListProps {
  client: Queue<Client>;
}

export function ClientList({ client }: ClientListProps) {
  const clients = client.getItems();

  return (
    <>
      <div
        style={{
          resize: "both",
          width: 1000,
          height: 500,
          overflow: "auto",
          border: 0,
          padding: "10px",
          justifyContent: "center",
        }}
      >
        <ol>
          {clients.map((client, index) => (
            <li key={index}>
              <div>
                {client.name} - Dinero a retirar: ${client.money}
              </div>
              <div>
                {client.date.toLocaleDateString()}{" "}
                {client.date.toLocaleTimeString()}
                <p></p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
