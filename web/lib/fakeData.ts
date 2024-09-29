import Brigadeiro from "@/assets/doces/brigadeiro.jpg";
import BrigadeiroRosa from "@/assets/doces/brigadeiro_rosa.png";
import Beijinho from "@/assets/doces/beijinho.jpg";
import BemCasado from "@/assets/doces/bem_casado.jpg";
import OlhoDeSogra from "@/assets/doces/olho_de_sogra.png";
import SurpresaDeUva from "@/assets/doces/surpresa_de_uva.jpg";
import Brownie from "@/assets/doces/brownie.png";
import BrownieCobertura from "@/assets/doces/brownie_cobertura.png";
import TrufaP from "@/assets/doces/trufa_p.png";
import TrufaM from "@/assets/doces/trufa_m.jpg";
import TrufaG from "@/assets/doces/trufa_g.jpg";
import BrigadeiroPacoca from "@/assets/doces/brigadeiro_de_pacoca.png";
import Copinho from "@/assets/doces/copinho.png";
import { nanoid } from "nanoid";

const doces = [
  {
    id: nanoid(),
    name: "brigadeiro",
    description: "Brigadeiro de chocolate",
    picture: Brigadeiro,
    price: 0.75,
    available: true,
    category: "doces",
  },
  {
    id: nanoid(),
    name: "brigadeiro rosa",
    description: "Brigadeiro de morango",
    picture: BrigadeiroRosa,
    price: 0.75,
    available: true,
    category: "doces",
  },
  {
    id: nanoid(),
    name: "Beijinho",
    description: "Beijinho de coco",
    picture: Beijinho,
    price: 0.75,
    available: true,
    category: "doces",
  },
  {
    id: nanoid(),
    name: "Olho de Sogra",
    description: "Bem-casado com uva passa",
    picture: OlhoDeSogra,
    price: 0.75,
    available: true,
    category: "doces",
  },
  {
    id: nanoid(),
    name: "Surpresa de Uva",
    picture: SurpresaDeUva,
    price: 0.75,
    available: true,
    category: "doces",
  },
  {
    id: nanoid(),
    name: "Bem-Casado",
    // description: "Brigadeiro de chocolate com brigadeiro branco",
    picture: BemCasado,
    price: 0.75,
    available: true,
    category: "doces",
  },
  {
    id: nanoid(),
    name: "Brigadeiro de paçoca",
    picture: BrigadeiroPacoca,
    price: 0.75,
    available: true,
    category: "doces",
  },
  {
    id: nanoid(),
    name: "Copinho",
    picture: Copinho,
    price: 1.2,
    available: true,
    category: "doces",
  },
];

const brownies = [
  {
    id: nanoid(),
    name: "Brownie",
    description: "Brownie de chocolate",
    picture: Brownie,
    price: 5,
    available: true,
    category: "brownies",
  },
  {
    id: nanoid(),
    name: "Brownie com Cobertura",
    description: "Brownie de chocolate com cobertura",
    picture: BrownieCobertura,
    price: 6,
    available: true,
    category: "brownies",
  },
];

const trufas = [
  {
    id: nanoid(),
    name: "Mini trufa",
    picture: TrufaP,
    price: 1,
    available: true,
    category: "trufas",
  },
  {
    id: nanoid(),
    name: "Trufa média",
    picture: TrufaM,
    price: 3,
    available: true,
    category: "trufas",
  },
  {
    id: nanoid(),
    name: "Trufa Grande",
    picture: TrufaG,
    price: 4,
    available: true,
    category: "trufas",
  },
];

const cart = [
  {
    id: nanoid(),
    name: "Mini trufa",
    picture: TrufaP,
    price: 1,
    available: true,
    category: "trufas",
    quantity: 10,
    filling: "Chocolate",
  },
  {
    id: nanoid(),
    name: "brigadeiro",
    description: "Brigadeiro de chocolate",
    picture: Brigadeiro,
    price: 0.6,
    available: true,
    category: "doces",
    quantity: 20,
  },
  {
    id: nanoid(),
    name: "Brownie",
    description: "Brownie de chocolate",
    picture: Brownie,
    price: 5,
    available: true,
    category: "brownies",
    filling: "Chocolate",
    quantity: 10,
  },
  {
    id: nanoid(),
    name: "brigadeiro rosa",
    description: "Brigadeiro de morango",
    picture: BrigadeiroRosa,
    price: 0.6,
    available: true,
    category: "doces",
    quantity: 10,
  },
  {
    id: nanoid(),
    name: "Surpresa de Uva",
    picture: SurpresaDeUva,
    price: 0.55,
    available: true,
    quantity: 10,
    category: "doces",
  },
];

export const data = {
  doces,
  trufas,
  brownies,
  cart,
};
