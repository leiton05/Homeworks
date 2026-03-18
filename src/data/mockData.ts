import type { Client } from "../models/Client";
import { RandomDateBeforeNow } from "../tools/Util";

export const mockData: Client[] = [
  {
    name: "Samuel De Luque",
    money: 12000000,
    date: RandomDateBeforeNow(),
  },
  {
    name: "Laura Farmeadora de Aura",
    money: 5000000,
    date: RandomDateBeforeNow(),
  },
  {
    name: "Edi",
    money: 1340000,
    date: RandomDateBeforeNow(),
  },
  {
    name: "Carlos Ramírez",
    money: 2500000,
    date: RandomDateBeforeNow(),
  },
  {
    name: "Valentina Gómez",
    money: 7800000,
    date: RandomDateBeforeNow(),
  },
  {
    name: "Andrés Martínez",
    money: 3200000,
    date: RandomDateBeforeNow(),
  },
  {
    name: "Camila Torres",
    money: 910000,
    date: RandomDateBeforeNow(),
  },
  {
    name: "Juan Pablo Ríos",
    money: 4500000,
    date: RandomDateBeforeNow(),
  },
  {
    name: "Daniela Sotelo",
    money: 6700000,
    date: RandomDateBeforeNow(),
  },
  {
    name: "Miguel Ángel Castro",
    money: 2100000,
    date: RandomDateBeforeNow(),
  },
];
