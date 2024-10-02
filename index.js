class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {
      let ataque;
  
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'fez um ataque indefinido';
      }

      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }

  const heroi1 = new Heroi('Aragorn', 35, 'guerreiro');
  const heroi2 = new Heroi('Gandalf', 70, 'mago');
  const heroi3 = new Heroi('Naruto', 17, 'ninja');
  const heroi4 = new Heroi('Aang', 112, 'monge');
  const heroi5 = new Heroi('Gerge', 82, 'bardo');
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();
  heroi5.atacar();