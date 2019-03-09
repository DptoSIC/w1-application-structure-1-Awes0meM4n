// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  title: 'Gestión de Proyectos',
  logo: 'LanyuCirculoRelleno.svg',
  marca: 'Lanyu EStudio',
  webMarca: 'https://lanyu-estudio.itch.io/',
  twitter: 'https://twitter.com/LanyuEstudio',
  facebook: 'https://www.facebook.com/LanyuEStudio/',
  github: 'https://github.com/LanyuEStudio',
  production: false,
  projectsService: 'miProjectsService',

  /* dummyData */
  projects: [
    { id: 0, name: 'Learn Angular' },
    { id: 1, name: 'Develop My Dream app' },
    { id: 2, name: 'Travel around the world' },
    { id: 3, name: 'Clean my room' }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
