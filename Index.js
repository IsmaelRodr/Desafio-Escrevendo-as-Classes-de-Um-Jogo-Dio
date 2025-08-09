class Heroi{
    nome;
    idade;
    tipo;
    ataque;

    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        const isMago = this.tipo.toLowerCase() === 'mago';
        const isGuerreiro = this.tipo.toLowerCase() === 'guerreiro';
        const isMonge = this.tipo.toLowerCase() === 'monge';
        const isNinja = this.tipo.toLowerCase() === 'ninja';

        if(isMago){
            return 'Magia';
        }
        if(isGuerreiro){
            return 'Espada';
        }
        if(isMonge){
            return 'Artes Marciais';
        }
        if(isNinja){
            return 'Shuriken';
        }
    }
}


const saitama = new Heroi('Saitama',25,'Monge');

console.log(`O ${saitama.tipo} atacou usando ${saitama.atacar()}.`);