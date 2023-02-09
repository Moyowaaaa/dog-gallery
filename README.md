# Solution to Eden life technical assesment for Moyowa Etchie

## Demo

[View Live Site](https://eden-life-assement-moyowa.netlify.app/)

This project was bootstrapped with [Vite my-vue-app --template vue-ts]( [Vite Configuration Reference](https://vitejs.dev/config/).

## Task List

- [ ] ##### Implement some functional logic such searching, and redirection to a page that contains details of the selected breed, details such as breed name and more images of the selected breed

- [ ] ##### Consume a dummy API that contains various breeds and thier images through its endpoints: 
  + [All Breeds](https://dog.ceo/api/breeds/list/all)
  + [Random Breed Images](https://dog.ceo/api/breeds/image/random/{count})
  + [SingleBreedImages](https://dog.ceo/api/breed/{breed-name}/images/random/{number-of-images-available})

- [ ] implement state management system (VUEX)

- [ ] Clint Side data caching 

- [ ] Mobile responsive

- [ ] code cleanup and refractoring

- [ ] update documentation

## Features 

+ Dashboard that displays various breeds or dogs along with thier details (name,images and sub breeds)

+ Image Gallery that contains more images of each dog breeds

+ Mobile responsiveness to ensure that it is compatible with multiple screen sizes



## Tools and Technologies

The technologies I used to achieve my solution are:
+ Vue.js
+ TypeScript
+ Tailwind CSS and CSS
+ Vuex for state management
+ Axios for data fetching
+ Netlify for web hosting


## Installation

To install and run the project locally, download/clone the repo and run the following commands:

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


This runs the app in the development mode. Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in your browser.




This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

