# Solution to Eden life technical assesment for Moyowa Etchie

## Demo

[View Live Site](https://prime-journal-assesment-moyowa.vercel.app/)

This project was bootstrapped with [Vite my-vue-app --template vue-ts]( [Vite Configuration Reference](https://vitejs.dev/config/).

## TODO

+ ##### Implement some functional logic such viewing details of different characters on the TVshow; Rick and Morty, details such name,status, species and type...

+ ##### Consume a dummy API through its endpoints: 
  + [All Characters](https://rickandmortyapi.com/api/character/)
  + [Characters By pages](https://rickandmortyapi.com/api/character/?page=${page})


## Features 

+ Dashboard that displays various breeds or dogs along with thier details (name,images and sub breeds)

+ Image Gallery that contains more images of each dog breeds

+ Mobile responsiveness to ensure that it is compatible with multiple screen sizes



## Tools and Technologies

The technologies I used to achieve my solution are:
+ Vue.js
+ TypeScript
+ Tailwind CSS
+ Vuex
+ Axios
+ Netlify for web hosting


## Installation

To install and run the project locally, download/clone the repo and run the following commands:

```bash
npm install
npm start
```

This runs the app in the development mode. Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in your browser.









# vue-starter

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
