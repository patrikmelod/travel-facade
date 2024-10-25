export default function ReservaVoo(origem, destino) {
    this.origem = origem;
    this.destino = destino;

    return {
        reservaVoo: () => {
            console.log(`Voo com origem em ${this.origem} e destino ${this.destino} reservado!`)
        }
    }
}