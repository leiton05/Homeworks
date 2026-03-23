import { useState } from "react";
import { ClientForm } from "../components/challenge05/ClientForm";
import type { Client } from "../models/challenge05/Client";
import Queue from "../tools/Queue";
import { ClientList } from "../components/challenge05/ClientList";
import { mockData } from "../data/challenge05/mockData";
import { useNavigate } from "react-router-dom";

function Challenge05() {
  const navigate = useNavigate();
  const sortedMockData = mockData.sort(
    (a, b) => a.date.getTime() - b.date.getTime(),
  );
  const [queue, setQueue] = useState(new Queue<Client>(sortedMockData));
  /* for (let i = 0; i < 5; i++) {
    console.log(RandomDateBeforeNow());
  } */

  return (
    <>
      <button onClick={() => navigate("/")}>Inicio</button>
      <h1>ATM SERVICE</h1>
      <button>Log out</button>
      <p>
        Bienvenido al servicio de ATM, registre al siguiente cliente en la cola
      </p>
      <ClientForm queue={queue} setQueue={setQueue} />
      <div>
        <h2>Personas en cola:</h2>
        <ClientList client={queue} />
      </div>
    </>
  );
}

export default Challenge05;
