import type { Client } from "../../models/challenge05/Client";
import type Queue from "../../tools/Queue";

interface ClientListProps {
  client: Queue<Client>;
}

export function ClientList({ client }: ClientListProps) {
  const clients = client.getItems();

  return (
    <>
      <div>
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
