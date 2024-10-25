export default function AlugaCarro(marca, ano) {
    this.marca = marca;
    this.ano = ano;

    return {
        alugarCarro: () => {
            console.log(`Carro ${this.marca}, ano ${this.ano} alugado com sucesso!`);
            return true;
        }
    }
}
