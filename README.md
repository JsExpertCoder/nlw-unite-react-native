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
Após isso, basta teres intalado o app **Expo Go** no dispositivo físico e fazer scan do QR-Code que aprecer no terminal. Você pode encontrar o **Expo Go** na loja do seu Smartphone [aqui](https://docs.expo.dev/get-started/expo-go/#install-expo-go-on-your-device).

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

Com isso, o servidor estará rodando em <code>http://localhost:3333</code>, e o Prisma Studio (a interface gáfica) <code>http://localhost:5555</code>, para acessar, basta acessar esse endereço no seu navegador.

## 📁 Estrutura do projeto <a name = "project_structure_pt"></a>
A estrutura do projeto é a seguinte:
```
├── public: pasta com arquivos públicos.

├── src: pasta com arquivos do projeto.
│   ├── assets: pasta com arquivos de imagem.

│   ├── components: pasta com componentes da aplicação.
│   │   ├── new-note-card.tsx: componente que contém o card para criação de uma nova nota.

│   │   ├── note-card.tsx: componente que contém o card de uma nota.

│   ├── app.tsx: arquivo que contém a aplicação.

│   ├── index.css: arquivo de estilização que contém a inicialização do Tailwind.

│   ├── main.tsx: arquivo que contém a inicialização do React.

├── index.html: arquivo que contém a estrutura da aplicação.
```

## 🚀 Deploy <a name = "deployment_pt"></a>
O deploy da aplicação foi realizado utilizando a plataforma Vercel. Que garante que a aplicação esteja sempre rodando na última versão do projeto, de forma estável e segura.<br>
A aplicação pode ser acessada [aqui](https://expert-notes-wheat.vercel.app/).

## 🎈 Usando <a name="usage_pt"></a>
Para usar a aplicação, basta acessar a aplicação [aqui](https://expert-notes-wheat.vercel.app/). Ou rodar a aplicação localmente, seguindo as instruções acima.

As notas podem ser criadas por meio de texto ou áudio. Para criar uma nota por áudio, basta clicar no botão de iniciar gravação e falar o conteúdo da nota. Após terminar de falar, clique no botão de parar gravação. A nota será criada com o conteúdo falado e poderá ser editada antes de ser salva, garantindo que a nota esteja correta.<br>
As notas podem ser excluídas clicando no botão de excluir na nota desejada. <br>
As notas foram salvas no localStorage do navegador, garantindo que as notas criadas estejam sempre disponíveis, mesmo após fechar a aplicação.

## ⛏️ Tecnologias <a name = "built_using_pt"></a>
- [ReactJS](https://reactjs.org/) - Biblioteca de JavaScript para construção de interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que adiciona tipagem estática ao código.
- [Tailwind](https://tailwindcss.com/) - Framework de estilização.
- [Vite](https://vitejs.dev/) - Build tool para aplicações web.
- [Radix UI](https://radix-ui.com/) - Biblioteca de componentes.
- [Lucide React](https://lucide.dev/) - Biblioteca de ícones.
- [Sonner](https://sonner.emilkowal.ski) - Biblioteca de notificações.
- [SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) - API de reconhecimento de voz do navegador.


---
# English <a name = "en"></a>

## 📝 Table of Contents <a name = "en"></a>
- [About](#about_en)
- [Getting Started](#getting_started_en)
- [Project Structure](#project_structure_en)
- [Deployment](#deployment_en)
- [Usage](#usage_en)
- [Technologies](#built_using_en)

## 🧐 About <a name = "about_en"></a>
This project is a web application that allows users to create notes on any subject they want, either through text or audio. <br />
It was built during the Next Level Week Expert event by Rocketseat, in the ReactJS track. <br />
The application was built using ReactJS, TypeScript, Tailwind and other technologies. <br />
The browser's voice recognition API was used for the audio notes functionality. <br />

## 🏁 Getting Started <a name = "getting_started_en"></a>
These instructions will allow you to get a copy of the project and run the application locally for development and testing purposes.

### Prerequisites
To run the application, you need to have Node.js installed on your machine. You can download Node.js [here](https://nodejs.org/en/).

### Installation
To access the project, either clone the repository or download the project files.<br>
To clone the repository, use the following command in your terminal:

```sh
git clone https://github.com/LeonardoSPereira/ExpertNotes
```

After cloning the repository, navigate to the project folder and install dependencies using the following command in your terminal:

```sh
npm install
```

After installing the dependencies, use the following command in your terminal to start the application:

```sh
npm run dev
```

This will run the application at <code>http://localhost:5173</code>. To access the application, simply open this address in your browser.

## 📁 Project Structure <a name = "project_structure_en"></a>
The project structure is as follows:

```
├── public: folder with public files.

├── src: folder with project files.
│   ├── assets: folder with image files.

│   ├── components: folder with application components.
│   │   ├── new-note-card.tsx: component that contains the card for creating a new note.

│   │   ├── note-card.tsx: component that contains the note card.

│   ├── app.tsx: file that contains the application.

│   ├── index.css: styling file that contains Tailwind initialization.

│   ├── main.tsx: file that contains the React initialization.

├── index.html: file that contains the application structure.
```

## 🚀 Deployment <a name = "deployment_en"></a>
The application was deployed using the Vercel platform. This ensures that the application is always running the latest version of the project, in a stable and secure manner.<br>
The application can be accessed [here](https://expert-notes-wheat.vercel.app/).

## 🎈 Usage <a name="usage_en"></a>
To use the application, simply access the application [here](https://expert-notes-wheat.vercel.app/). Or run the application locally, following the instructions above.

Notes can be created through text or audio. To create a note by audio, simply click the start recording button and speak the note content. After finishing speaking, click the stop recording button. The note will be created with the spoken content and can be edited before being saved, ensuring that the note is correct.<br>
Notes can be deleted by clicking the delete button on the desired note. <br>
The notes were saved in the browser's localStorage, ensuring that the created notes are always available, even after closing the application.

## ⛏️ Technologies <a name = "built_using_en"></a>
- [ReactJS](https://reactjs.org/) - JavaScript library for building interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that adds static typing to the code.
- [Tailwind](https://tailwindcss.com/) - Styling framework.
- [Vite](https://vitejs.dev/) - Build tool for web applications.
- [Radix UI](https://radix-ui.com/) - Component library.
- [Lucide React](https://lucide.dev/) - Icon library.
- [Sonner](https://sonner.emilkowal.ski) - Notification library.
- [SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) - Browser voice recognition API.)
