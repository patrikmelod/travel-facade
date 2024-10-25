import AlugaCarro from "./AlugaCarro.js";
import ReservaHotel from "./ReservaHotel.js";
import ReservaVoo from "./ReservaVoo.js";

export default function TravelFacade(marca, ano, cidade, nome, origem, destino) {
    const carro = new AlugaCarro(marca, ano);
    const hotel = new ReservaHotel(cidade, nome);
    const voo = new ReservaVoo(origem, destino);

    return {
        reserva: () => {
            carro.alugarCarro();
            hotel.reservaHotel();
            voo.reservaVoo();
        }
    }
}