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
    name: "brigadeiro",
    description: "Brigadeiro de chocolate",
    picture: Brigadeiro,
    price: 0.6,
    discount: 0.1,
  },
  {
    name: "brigadeiro rosa",
    description: "Brigadeiro de morango",
    picture: BrigadeiroRosa,
    price: 0.6,
  },
  {
    name: "Beijinho",
    description: "Beijinho de coco",
    picture: Beijinho,
    price: 0.5,
  },
  {
    name: "Olho de Sogra",
    description: "Bem-casado com uva passa",
    picture: OlhoDeSogra,
    price: 0.6,
  },
  {
    name: "Surpresa de Uva",
    picture: SurpresaDeUva,
    price: 0.55,
  },
  {
    name: "Bem-Casado",
    description: "Brigadeiro de chocolate com brigadeiro branco",
    picture: BemCasado,
    price: 0.6,
    discount: 0.1,
  },
];

const brownies = [
  {
    name: "Brownie",
    description: "Brownie de chocolate",
    picture: Brownie,
    price: 5,
  },
  {
    name: "Brownie com Cobertura",
    description: "Brownie de chocolate com cobertura",
    picture: BrownieCobertura,
    price: 6,
    discount: 0.1,
  },
];

const trufas = [
  {
    name: "Mini trufa",
    picture: TrufaP,
    price: 1,
  },
  {
    name: "Trufa média",
    picture: TrufaM,
    price: 3,
  },
  {
    name: "Trufa Grande",
    picture: TrufaG,
    price: 4,
  },
];

export const data = {
  doces,
  trufas,
  brownies,
};
