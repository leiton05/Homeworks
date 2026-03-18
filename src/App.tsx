import { useState } from "react";
import "./App.css";
import { ClientForm } from "./components/ClientForm";
import type { Client } from "./models/Client";
import Queue from "./tools/Queue";

function App() {
  const [queue, setQueue] = useState(new Queue<Client>());
  /* for (let i = 0; i < 5; i++) {
    console.log(RandomDateBeforeNow());
  } */

  return (
    <>
      <h1>QUEUE</h1>
      <ClientForm queue={queue} setQueue={setQueue} />
    </>
  );
}

export default App;
