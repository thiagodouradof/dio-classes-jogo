# Escrevendo as Classes de Um Jogo
Resolução de um desafio proposto no curso (GFT Start #6 - Lógica de Programação) da **[DIO](https://www.dio.me/)**, em que crio uma classe pra criação de um personagem de um jogo, utilizando conceitos de Programação Orientada a Objetos.

## 📝 Descrição do Desafio

O desafio consiste em criar uma classe `Heroi` que represente um herói de uma aventura. A classe deve conter as seguintes propriedades:

- **nome**: o nome do herói.
- **idade**: a idade do herói.
- **tipo**: a classe do herói (guerreiro, mago, monge, ninja...).

Além disso, a classe deve possuir um método chamado **atacar** que exiba uma mensagem com base no tipo do herói:

- Para **mago**, o ataque exibido deve ser: _"usou magia"_
- Para **guerreiro**, o ataque exibido deve ser: _"usou espada"_
- Para **monge**, o ataque exibido deve ser: _"usou artes marciais"_
- Para **ninja**, o ataque exibido deve ser: _"usou shuriken"_

### Exemplo de saída:
```bash
O guerreiro atacou usando espada 
O mago atacou usando magia 
```
## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando:

- **JavaScript**: Linguagem de programação principal para criação de classes e métodos.

## 📦 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/thiagodouradof/dio-classes-jogo
```
Navegue até o diretório do projeto:
```bash
cd heroi-desafio-dio
```
Abra o arquivo index.js no seu editor de texto de preferência.

Execute o código em um ambiente JavaScript, como o Node.js ou um navegador:

```bash
node index.js
```
## 🧑‍💻 Funcionalidades
- Criação de heróis: É possível criar heróis com diferentes características (nome, idade e tipo).
- Ataques personalizados: Dependendo do tipo de herói, uma mensagem de ataque diferente será exibida.
