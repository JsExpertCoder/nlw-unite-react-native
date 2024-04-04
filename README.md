<p align="center">
  <a href="" rel="noopener">
 <img src="./mobile/src/assets/logo.png" alt="Project logo"></a>
</p>

<h1 align="center">pass.in</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]() <br><br>
[Português](#pt) / [English](#en)
</div>

---
# Português <a name = "pt"></a>

## 📝 Tabela de conteúdos

- [Sobre](#about_pt)
- [Iniciando a aplicação](#getting_started_pt)
- [Estrutura do projeto](#project_structure_pt)
- [Deploy](#deployment_pt)
- [Usando](#usage_pt)
- [Tecnologias](#built_using_pt)

## 🧐 Sobre <a name = "about_pt"></a>
O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.
A versão mobile permite aos participantes emitirem uma credencial em forma de QR-Code para check-in no dia do evento..
 <br />
 Ele foi construído durante o evento "Next Level Week Unite" da Rocketseat, na trilha de React Native. <br />
A aplicação foi construída utilizando Typescript, tailwindcss, zustand nativewind e outras tecnologias. <br />

## 🏁 Iniciando a aplicação <a name = "getting_started_pt"></a>
Essas instruções vão te permitir obter uma cópia do projeto e rodar a aplicação localmente para propósitos de desenvolvimento e teste.

### Pre-requisitos
Para rodar a aplicação, você precisa ter o Node.js instalado na sua máquina. Você pode baixar o Node.js [aqui](https://nodejs.org/en/).
<br/>
Você também precisa ter o Git instalado na sua máquina. Você pode baixar o Git [aqui](https://git-scm.com/).



### Instalação
Para acessar o projeto, basta clonar o repositório ou realizar o download dos arquivos do projeto.<br>
Para clonar o repositório, utilize o seguinte comando no seu terminal:

```sh
https://github.com/JsExpertCoder/nlw-unite-react-native.git
```

Após clonar o repositório, acesse a pasta **mobile** e instale as dependências utilizando o seguinte comando no seu terminal:

```sh
npm install
```

Após instalar as dependências da pasta **mobile** você pode rodar o app  utilizando o seguinte comando no seu terminal(**estando na pasta mobile**):

```sh
npx expo start
```
Após isso, basta teres instalado o app **Expo Go** no dispositivo físico e fazer scan do QR-Code que aprecer no terminal. Você pode encontrar o **Expo Go** na loja do seu Smartphone [aqui](https://docs.expo.dev/get-started/expo-go/#install-expo-go-on-your-device).

Depois disso acesse a pasta **server** e instale as dependências utilizando o seguinte comando no seu terminal:

```sh
npm install
```

Após instalar as dependências da pasta **server**, ainda estando nesta pasta utilize o seguinte comando no seu terminal para iniciar o servidor:

```sh
npm run dev
```

Após rodar o servidor, você pode acessar uma interface gráfica pra visualizar os dados no banco de dados rodadndo o seguinte comando no ser terminal (**na pasta server**):

```sh
npx prisma studio
```

Com isso, o servidor estará rodando em <code>http://localhost:3333</code>, e o Prisma Studio (a interface gáfica) em <code>http://localhost:5555</code>, para acessar, basta acessar esse endereço no seu navegador.

## ⛏️ Tecnologias <a name = "built_using_pt"></a>
 
- [ReactJS](https://reactjs.org/) - Biblioteca de JavaScript para construção de interfaces.
- [React Native](https://reactnative.dev/) - Uma framework poderosa desenvolvida pelo Facebook que permite aos desenvolvedores construir aplicativos móveis utilizando JavaScript.
- [Expo](https://docs.expo.dev/) - Ferramenta utilizada no desenvolvimento mobile com React Native.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que adiciona tipagem estática ao código.
- [Zustand](https://zustand-demo.pmnd.rs/) - Biblioteca minimalista e prática para gerenciamento de estados no React e React Native.
- [Nativewild](https://www.nativewind.dev/v4/getting-started/expo-router) - Usa Tailwind CSS como linguagem de script para criar um sistema de estilo universal para React Native.
- [Tailwind](https://tailwindcss.com) - Framework de estilização.



# English <a name = "en"></a>

## 📝 Table of Contents

- [About](#about_en)
- [Getting Started](#getting_started_en)
- [Project Structure](#project_structure_en)
- [Deployment](#deployment_en)
- [Usage](#usage_en)
- [Technologies](#built_using_en)

## 🧐 About <a name = "about_en"></a>
Pass.in is an application for **managing participants in offline events**. The mobile version allows participants to issue a QR-Code credential for check-in on the day of the event. It was built during Rocketseat's "Next Level Week Unite" event, on the React Native track. The application was built using TypeScript, tailwindcss, zustand, nativewind, and other technologies.

## 🏁 Getting Started <a name = "getting_started_en"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
To run the application, you need to have Node.js installed on your machine. You can download Node.js [here](https://nodejs.org/en/). You also need to have Git installed on your machine. You can download Git [here](https://git-scm.com/).

### Installation
To access the project, simply clone the repository or download the project files. To clone the repository, use the following command in your terminal:

```sh
https://github.com/JsExpertCoder/nlw-unite-react-native.git
```
After cloning the repository, access the **mobile** folder and install the dependencies using the following command in your terminal:

```sh
npm install
```

After installing the dependencies of the **mobile** folder, you can run the app using the following command in your terminal (**being in the mobile folder**):

```sh
npx expo start
```

After this, just make sure you have the Expo Go app installed on your physical device and scan the QR-Code that appears in the terminal. You can find the Expo Go in the app store of your smartphone [here](https://docs.expo.dev/get-started/expo-go/#install-expo-go-on-your-device).

Then, navigate to the **server** folder and install the dependencies using the following command in your terminal:
```sh
npm install
```
After installing the dependencies of the **server** folder, still being in this folder, use the following command in your terminal to start the server:

```sh
npm run dev
```

After running the server, you can access a graphical interface to visualize the data in the database by running the following command in your terminal (**in the server folder**):

```sh
npx prisma studio
```

With that, the server will be running at <code>http://localhost:3333</code>, and the Prisma Studio (the graphical interface) at <code>http://localhost:5555</code>, to access, just access this address in your browser.

## ⛏️ Technologies <a name = "built_using_en"></a>
