export default function ReservaHotel(cidade, nome) {
    this.cidade = cidade;
    this.nome = nome;

    return {
        reservaHotel: () => {
            console.log(`Hotel ${this.nome} reservado, na cidade ${this.cidade}`);
        }
    }
}