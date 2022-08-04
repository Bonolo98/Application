// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const baseUrl = "http://localhost:8080/api/"
//const baseUrl = "https://e-commerceshoes.herokuapp.com/api/"
export const environment = {
  production: false,
  baseUrl: `${baseUrl}`
};