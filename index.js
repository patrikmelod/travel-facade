import TravelFacade from "./src/TravelFacade.js";

const viagem = new TravelFacade("Fiat", "2023", "São Paulo", "Inn Hotel", "PR", "SP");

console.log(viagem.reserva());