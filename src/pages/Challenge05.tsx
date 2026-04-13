import { useState } from "react";
import { ClientForm } from "../components/challenge05/ClientForm";
import type { Client } from "../models/challenge05/Client";
import Queue from "../tools/Queue";
import { ClientList } from "../components/challenge05/ClientList";
import { mockData } from "../data/challenge05/mockData";
import tool from "../assets/svg/tool.svg";
import Navbar from "../components/Navbar";

function Challenge05() {
  const sortedMockData = mockData.sort(
    (a, b) => a.date.getTime() - b.date.getTime(),
  );
  const [queue, setQueue] = useState(new Queue<Client>(sortedMockData));

  /* for (let i = 0; i < 5; i++) {
    console.log(RandomDateBeforeNow());
  } */

  return (
    <>
      <header>
        <Navbar
          title={"ATM SERVICE"}
          imgUrl={tool}
          alt={"Imagen de una herramienta morada"}
        />
      </header>
      <div className="challenge-content">
        <p>
          Bienvenido al servicio de ATM, registre al siguiente cliente en la
          cola
        </p>
        <ClientForm queue={queue} setQueue={setQueue} />
        <div className="form-div challenge-content">
          <h2>Personas en cola:</h2>
          <ClientList client={queue} />
        </div>
      </div>
    </>
  );
}

export default Challenge05;
