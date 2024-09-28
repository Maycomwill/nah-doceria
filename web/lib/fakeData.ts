import Brigadeiro from "@/assets/doces/brigadeiro.jpg";
import BrigadeiroRosa from "@/assets/doces/brigadeiro_rosa.png";
import Beijinho from "@/assets/doces/beijinho.png";
import BemCasado from "@/assets/doces/bem_casado.png";
import OlhoDeSogra from "@/assets/doces/olho_de_sogra.png";
import SurpresaDeUva from "@/assets/doces/surpresa_de_uva.png";
import Brownie from "@/assets/doces/brownie.png";
import BrownieCobertura from "@/assets/doces/brownie_cobertura.png";
import TrufaP from "@/assets/doces/trufa_p.png";
import TrufaM from "@/assets/doces/trufa_m.png";
import TrufaG from "@/assets/doces/trufa_g.png";

const doces = [
  {
    id: "1",
    name: "brigadeiro",
    description: "Brigadeiro de chocolate",
    picture: Brigadeiro,
    price: 0.6,
    discount: 0.1,
    available: true,
    category: "doces",
  },
  {
    id: "2",
    name: "brigadeiro rosa",
    description: "Brigadeiro de morango",
    picture: BrigadeiroRosa,
    price: 0.6,
    available: true,
    category: "doces",
  },
  {
    id: "3",
    name: "Beijinho",
    description: "Beijinho de coco",
    picture: Beijinho,
    price: 0.5,
    available: true,
    category: "doces",
  },
  {
    id: "4",
    name: "Olho de Sogra",
    description: "Bem-casado com uva passa",
    picture: OlhoDeSogra,
    price: 0.6,
    available: true,
    category: "doces",
  },
  {
    id: "5",
    name: "Surpresa de Uva",
    picture: SurpresaDeUva,
    price: 0.55,
    available: true,
    category: "doces",
    new_product: true,
  },
  {
    id: "6",
    name: "Bem-Casado",
    // description: "Brigadeiro de chocolate com brigadeiro branco",
    picture: BemCasado,
    price: 0.6,
    discount: 0.1,
    available: true,
    category: "doces",
    new_product: true,
  },
];

const brownies = [
  {
    id: "7",
    name: "Brownie",
    description: "Brownie de chocolate",
    picture: Brownie,
    price: 5,
    available: true,
    category: "brownies",
  },
  {
    id: "8",
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
    id: "9",
    name: "Mini trufa",
    picture: TrufaP,
    price: 1,
    available: true,
    category: "trufas",
  },
  {
    id: "10",
    name: "Trufa média",
    picture: TrufaM,
    price: 3,
    available: true,
    category: "trufas",
  },
  {
    id: "11",
    name: "Trufa Grande",
    picture: TrufaG,
    price: 4,
    available: true,
    category: "trufas",
  },
];

const cart = [
  {
    id: "12",
    name: "Mini trufa",
    picture: TrufaP,
    price: 1,
    available: true,
    category: "trufas",
    quantity: 10,
    filling: "Chocolate",
  },
  {
    id: "13",
    name: "brigadeiro",
    description: "Brigadeiro de chocolate",
    picture: Brigadeiro,
    price: 0.6,
    discount: 0.1,
    available: true,
    category: "doces",
    quantity: 20,
  },
  {
    id: "14",
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
    id: "15",
    name: "brigadeiro rosa",
    description: "Brigadeiro de morango",
    picture: BrigadeiroRosa,
    price: 0.6,
    available: true,
    category: "doces",
    quantity: 10,
  },
  {
    id: "16",
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
