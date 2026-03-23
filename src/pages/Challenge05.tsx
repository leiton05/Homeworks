import { useState } from "react";
import { ClientForm } from "../components/challenge05/ClientForm";
import type { Client } from "../models/challenge05/Client";
import Queue from "../tools/Queue";
import { ClientList } from "../components/challenge05/ClientList";
import { mockData } from "../data/challenge05/mockData";
import { HomeButton } from "../components/HomeButton";
import { LogoutButton } from "../components/LogoutButton";
import tool from "../assets/svg/tool.svg";

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
      <div className="top-elements-challenges">
        <HomeButton />
        <div className="top-elements-challenges">
          <img
            src={tool}
            alt="Imagen de una herramienta morada"
            className="img-tool"
          />
          <h1>ATM SERVICE</h1>
        </div>
        <LogoutButton />
      </div>
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
