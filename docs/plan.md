# Plan del proyecto dividido en diferentes entregas:

## [Hito 0](https://jj.github.io/IV/documentos/proyecto/0.Repositorio): Git y GitHub para entrega de hitos del proyecto

-   Se ha modificado el archivo de [configuración del `git`](/docs/git.md).
-   Se ha añadido el archivo [.gitignore](../.gitignore).
-   Se ha añadido una clave pública y privada para el correcto funcionamiento de SSH en Github.
-   Se ha modificado la descripción del [README.md](../README.md) para poder entender de manera más eficiente el proyecto. Además se ha añadido su correspondiente [documentación](https://nikitastetskiy.github.io/micro-calendario/).
-   También se ha creado el archivo necesario para la explicación de las [herramientas](/docs/herramientas.md) usadas en este proyecto. Tanto la [configuración del `git`](/docs/git.md) cómo las [herramientas](/docs/herramientas.md), se encuentran en la [carpeta docs](/docs).
-   [_Milestone_](https://github.com/nikitastetskiy/micro-calendario/milestone/1) correspondiente al hito 0.

## [Primer hito](https://jj.github.io/IV/documentos/proyecto/1.Infraestructura): Estructura general del proyecto

-   Se ha profundizado más en el archivo [herramientas](/docs/herramientas.md).
-   Se han creado los diferentes [_issues_](https://github.com/nikitastetskiy/micro-calendario/issues) para el proyecto. Estos a su vez se han organizado en [_milestones_](https://github.com/nikitastetskiy/micro-calendario/milestones).
    -   [Aquí](https://github.com/nikitastetskiy/micro-calendario/milestones?state=closed) se encuentran los _milestones_ cerrados.
    -   [Aquí](https://github.com/nikitastetskiy/micro-calendario/issues?q=is%3Aissue+is%3Aclosed) se encuentran los _issues_ cerrados.
-   Además se han añadido las [Historias de Usuario](https://github.com/nikitastetskiy/micro-calendario/milestone/4) con su [label](https://github.com/nikitastetskiy/micro-calendario/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories) correspondiente. Aquí se puede consultar las diferentes HU:
    -   [HU1](https://github.com/nikitastetskiy/micro-calendario/issues/4): Consulta de eventos.
    -   [HU2](https://github.com/nikitastetskiy/micro-calendario/issues/5): Consulta específica de eventos.
    -   [HU3](https://github.com/nikitastetskiy/micro-calendario/issues/6): Creación de eventos.
-   Se ha añadido el fichero [`YAML`](../iv.yaml) _Ain't Markup Language_, con la ruta de la estructura del proyecto.
-   Se ha creado la [carpeta src](/src) para la creación de la primera [clase](/src/eventscalendar) del proyecto.
-   [_Milestone_](https://github.com/nikitastetskiy/micro-calendario/milestone/2) correspondiente al hito 1.

## [Segundo Hito](https://jj.github.io/IV/documentos/proyecto/2.Tests): Tests

-   Se ha profundizado de nuevo en el archivo [herramientas](/docs/herramientas.md). También se ha añadido en el fichero [`YAML`](../iv.yaml) las distintas claves cómo _lenguaje_, _test_ y _taskfile_. En el fichero [README.md](../README.md) se ha añadido las distintas pautas de instalación y _testeo_.
-   Se ha avanzado en las distintas [Historias de Usuario](https://github.com/nikitastetskiy/micro-calendario/milestone/4). Ya que he tenido que avanzar en la clase [events.js](/src/eventscalendar/events.js) y se ha creado la clase [planner.js](/src/eventscalendar/planner.js) para poder organizar la clase evento.
-   Cómo gestor de paquetes y tareas he elegido [`Npm`](https://www.npmjs.com), ya que es el gestor por defecto para [`Node.js`](https://nodejs.org/es/) y además un entorno de ejecución para [`Javascript`](https://es.wikipedia.org/wiki/JavaScript). Para llevar a cabo los test, he escogido [`Jest`](https://jestjs.io/es-ES/), el cual es un marco de prueba de JavaScript bastante sencillo de entender. Todo esto lo he profundizado en las [herramientas](/docs/herramientas.md). _Taskfile_ apuntará a [util.test.js](../test/util.test.js), el cual será ejecutado mediante [package.json](../package.json).
-   [_Milestone_](https://github.com/nikitastetskiy/micro-calendario/milestone/3) correspondiente al hito 2.

## [Tercer Hito](http://jj.github.io/IV/documentos/proyecto/3.Docker): Creación de un contenedor para pruebas

-   Se ha creado el [Dockerfile](../Dockerfile) y [.dockerignore](../.dockerignore) siguiendo las [recomendaciones de buenas prácticas](https://docs.docker.com/engine/reference/builder/).
-   También se ha creado la [build](https://hub.docker.com/r/nikitastetskiy/micro-calendario/builds) correspondiente en mi perfil de [Dockerhub](https://hub.docker.com/u/nikitastetskiy). La configuración del Dockerhub se puede ver [aquí](../docs/herramientas.md). Para esto se ha añadido [HU4](https://github.com/nikitastetskiy/micro-calendario/issues/14).
-   Se ha explicado [la configuración y la optimización del docker](/docs/herramientas.md).
-   [_Milestone_](https://github.com/nikitastetskiy/micro-calendario/milestone/6) correspondiente al hito 3.

## [Cuarto Hito](http://jj.github.io/IV/documentos/proyecto/4.CI): Integración continua

-   Se ha configurado el [fichero travis](../.travis.yml) siguiendo las [buenas prácticas](https://docs.travis-ci.com/user/languages/minimal-and-generic/#minimal).
-   Se ha configurado el [fichero shippable](../shippable.yml).
-   Se ha configurado el [fichero ghcr](../.github/workflows/ghcr.yml) y el [fichero linter-prettier](../.github/workflows/lint-prettier.yml).
-   Se ha explicado la [integración continua](/docs/herramientas.md).
-   Se han creado las siguientes historias de usuario para este hito:
    -   <a href="https://github.com/nikitastetskiy/micro-calendario/issues/16">HU5</a>: Instalación de ESLint y Prettier.
    -   <a href="https://github.com/nikitastetskiy/micro-calendario/issues/17">HU6</a>: Testing.
    -   <a href="https://github.com/nikitastetskiy/micro-calendario/issues/18">HU7</a>: Integración continua.
-   [_Milestone_](https://github.com/nikitastetskiy/micro-calendario/milestone/7) correspondiente al hito 4.

## [Quinto Hito](http://jj.github.io/IV/documentos/proyecto/5.Serverless): Serverless

-   Se ha configurado el [iv.yaml](../iv.yaml) conforme la URL y el archivo [5.json](../5.json).
-   Se ha creado la carpeta con las funciones de Vercel [api](../api).
-   Se ha creado la carpeta con las funciones de Netlify [functions](../functions).
-   Se ha explicado los [sistemas serverless](/docs/herramientas.md).
-   Se han creado las siguientes historias de usuario para este hito:
    -   <a href="https://github.com/nikitastetskiy/micro-calendario/issues/19">HU8</a>: Vercel.
    -   <a href="https://github.com/nikitastetskiy/micro-calendario/issues/20">HU9</a>: Netlify.
    -   <a href="https://github.com/nikitastetskiy/micro-calendario/issues/21">HU10</a>: Telegram bot.
-   [_Milestone_](https://github.com/nikitastetskiy/micro-calendario/milestone/8) correspondiente al hito 5.