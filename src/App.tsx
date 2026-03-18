import { useState } from "react";
import "./App.css";
import { ClientForm } from "./components/ClientForm";
import type { Client } from "./models/Client";
import Queue from "./tools/Queue";
import { ClientList } from "./components/ClientList";
import { mockData } from "./data/mockData";

function App() {
  const sortedMockData = mockData.sort(
    (a, b) => a.date.getTime() - b.date.getTime(),
  );
  const [queue, setQueue] = useState(new Queue<Client>(sortedMockData));
  /* for (let i = 0; i < 5; i++) {
    console.log(RandomDateBeforeNow());
  } */

  return (
    <>
      <h1>ATM SERVICE</h1>
      <p>
        Bienvenido al servicio de ATM, registre al siguiente cliente en la cola
      </p>
      <ClientForm queue={queue} setQueue={setQueue} />
      <div
        style={{
          backgroundColor: "#3d3d3d",
          padding: 13,
          margin: 13,
          borderRadius: 16,
        }}
      >
        <h2>Personas en cola:</h2>
        <ClientList client={queue} />
      </div>
    </>
  );
}

export default App;
