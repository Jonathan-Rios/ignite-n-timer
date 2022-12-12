<h1 align="center">Ignite - Pomodoro Timer</h1>

<p align="center">
  <img 
    src="https://img.shields.io/badge/React-%5E18.2.0-blue" 
    alt="React Ver. ^18.1.0"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-%5E4.6.4-blue"
    alt="Typescript Ver. 4.6.4" 
  />
  <img
    src="https://img.shields.io/badge/Ignite-2022-green" 
    alt="Ignite-2022"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<br>

<h3 align="center">Imagem prévia da aplicação: Timer</h3>

![cover](.github/project-preview.png?style=flat)


<h3 align="center">Imagem prévia da aplicação: Lista de itens</h3>

![cover](.github/project-preview2.png?style=flat)


<br>

## 💻 Projeto
### Exemplo
Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** no curso Ignite **[Ignite](https://www.rocketseat.com.br/ignite)** .

Nele aborda a criação de um projeto do zero em <strong>TypeScript</strong>, utilizando <strong>Styled-components</strong> para a estilização e tema, e o uso de <strong>Context Api</strong>.

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [react-hook-form](https://react-hook-form.com/)
- [zod](https://zod.dev/)


## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Jonathan-Rios/ignite-n-timer.git

$ cd ignite-n-timer
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```
- Ao rodar a aplicação, aparecerá o endereço de acesso no terminal.
 
## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />


## 📓 Anotações pessoais

<h3>Criando o projeto e suas dependências </h3>

```bash
# Criando o projeto com Vite
  npm create vite@latest
  Need to install the following packages:
    create-vite@3.2.1
  Ok to proceed? (y) y
  ✔ Project name: … ignite-timer
  ✔ Select a framework: › React
  ✔ Select a variant: › TypeScript

  # Dependências
  ➜ npm i styled-components
  ➜ npm i @types/styled-components -D

  ➜ npm i eslint -D
  ➜ npm i @rocketseat/eslint-config -D

  ➜ npm i react-router-dom

  ➜ npm i phosphor-react

  ➜ npm i react-hook-form
  ➜ npm i zod
  ➜ npm i @hookform/resolvers

  ➜ npm i date-fns
```
<h3>Detalhamento do Flex 1 </h3>

```bash
  # Flex 1 é um atalho para 3 propriedades: flex-grow, flex-shrink, flex-basis.
  flex-grow - Permito meu componente crescer do tamanho original dele?  1[Sim] 0[Não]
  flex-shrink - Permito meu componente diminuir do tamanho original dele?  1[Sim] 0[Não]
  flex-basis - Qual o tamanho ideal dele?
```

<h3>Conceitos de formulário Controlled e Uncontrolled</h3>

```bash
  Controlled - Quando estamos monitorando os valores do campo em estados.

  Uncontrolled - Utilização mais "solta", referenciando por names e obtendo o valor no momento da necessidade.
```

<h3>Utilização do do as const, para garantir que o valor seja exatamente aquela string (ou outro valor desejado)</h3>

<h4><strong>Não utilizando</strong></h4>

![cover](.github/example_without_as_const.png?style=flat)

<h4><strong>Utilizando</strong></h4>

![cover](.github/example_with_as_const.png?style=flat)


<h4><strong>Usando para fornecer o type</strong></h4>

![cover](.github/bonus_type_example_as_const.png?style=flat)
 

<br />

---
<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)