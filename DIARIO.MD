# Entregas de práctica para curso iniciación Angular 7

No tengo muy claro cómo hacer la entrega, me voy a guiar por la carpeta `.vscode` que es lo único que encontré de inicio en el repositorio. Así pues, voy a ir cargando sólo los archivos de fuente y configuración de la aplicación comprimidos.
El nombre de mi aplicación para prácticas es `mi-aplicacion` :)

Cambios en módulos node:
* Para probar algunas cosas más he instalado los módulos de bootstrap y jquery en vez de minicss.
* También he añadido fontawesome.

## Semana 1
Además de lo que se pide he creado:
1. Un `SocialComponent` en `SharedModule` para prácticar más con variables, no sólo `title` y hacer un componente que seguramente reutilizaré en el futuro. Para añadir estilo a los iconos modifiqué `styles.css`
1. He añadido un icono de fontawesome en `footer` (copyright).
1. He añadido una barra de navegación antes del `header` creándome un componente `NavBarComponent` con el que he usado bootstrap
1. Estos cambios afectan a `angular.json` claro.

Todo el trabajo está en la carpeta `src` que subo y los archivos que no están dentro de ella pero que han sido modificados: `angular.json`, `package.json`, etc...

### Dudas
¿Por qué no me aparecen los `<app-??>` cuando quiero añadirlos a un `.component.html` y tengo que escribirlos sin asistente?
> La respuesta está en las extensiones de Visual Studio Code. Como mínimo os recomiendo instalar Angular Essentials que entre otras cosas analiza el código y ofrece ayudas en línea. [Sigue la discusión](https://cursos.trainingit.es/mod/forum/discuss.php?d=707#p2091).

¿Se pueden usar en .html variable de componentes superiores o siempre hay que declararlos en el .ts de cada componente que las use? (ejemplo: leer `marca` de `layout.component.ts` en vez de duplicarlo en `footer.component.ts` y `nav-bar.component.ts`)
> Poco a poco se verán los distintos modelos de enlace. Para empezar veremos que cada plantilla sólo habla con el modelo expuesto por su controlador. Más adelante se verán maneras de comunicar componentes.

## Semana 2
Hecho push con git siguiendo los [comentarios del foro](https://cursos.trainingit.es/mod/forum/discuss.php?d=709).

### Dudas
La duda que tengo es más bien de la semana 1, pero se me olvidó hacerla:

¿Hace falta tener el RouterModule para importar componentes de otros módulos?

Por otra parte, he instalado el plugin [Angular Extension Pack](https://marketplace.visualstudio.com/items?itemName=loiane.angular-extension-pack) y ahora me ofrece asistente de contenido, aunque sigue sin resaltarme directivas como `routerLink`.

## Semana 3
Subido todo con el commit "Semana 3"

### Dudas
He probado a declarar como dependencia la interface directamente en vez del servicio abstracto pero no me lo admitia. Lo intenté porque en Java lo normal es usar la interface **¿En Angular las dependencias sólo pueden ser servicios?**
> RESPUESTA: [La inyeccion de dependencias en Agnular se basa en clases concretas, no interfaces](https://cursos.trainingit.es/mod/forum/discuss.php?d=760#p2174).

También me ha surgido la duda de **¿Por qué en el app-routing no se dirige a NotFoundComponent directamente cuanto no coincida ninguna ruta `'**'` (eliminar ruta not-found)? ¿Se hace sólo para establecer la nueva ruta en el navegador?**
> RESPUESTA: [así también se redirigen desde otros componentes](https://cursos.trainingit.es/mod/forum/discuss.php?d=760#p2174) que están dentro de otros para fallos más finos.

## Semana 4
Subido todo con el commit "Semana 4"

### Dudas
Entiendo que con la API proporcionada no se podían hacer actualizaciones de un sólo proyecto pues no tenía controlador por ids (a mi me resolvía con un 404). Lo mismo pasa con el DELETE, se borraban todos los proyectos, no se podía elegir un id de recurso aislado. Si estoy equivocado por favor indíquemelo.

He intentado hacer un Custom Pipe para formatear un Observable<Project> | async | name, pero no me ha salido. He seguido las instrucciones de [la documentación de Angular](https://angular.io/guide/pipes#custom-pipes) pero no he tenido éxito. Me salía _ERROR TS2304: Cannot find name 'Mi-Pipe'_. Si no está en el próximo contenido podría indicarme una guía completa (me cree el Pipe con `@Pipe`, implementé la interfaz con `transform` y lo añadí a `providers` de `app.module.ts`)

Me ha costado mantener las interfaces como las tenía inicialmente sin Observables. Al final no me quedó más remedio que hacer un `subscribe` en constructor para cargar el array antiguo con un `tap` o usar el pipe `async` ¿Es la forma correcta?

## Semana 5
Subido todo con el commit "Semana 5"

### Dudas
Los eventos que hay que emitir he seguido haciéndolo con `@Output()` y `EventEmitter`. ¿Hay alguna forma de hacerlo con los Formularios Reactivos o "sólo substituyen a `ngModel`"?

Por último también tengo pendiente que me resuelvan las dudas de la Semana 4. Gracias.
