# Herramientas utilizadas o procesos de desarrollo

**Lenguaje**: He utilizado `Javascript`, ya que es un lenguaje ampliamente popular y que para mí es totalmente nuevo. Aunque por lo que he podido leer es un lenguaje bastante sencillo, rápido y muy versátil. Otra de sus famosas ventajas es que es multiplataforma y además es muy útil para desarrollar páginas dinámicas y aplicaciones web.

---

**Base de Datos**: Necesitamos una Base de Datos donde las principales ventajas sean la rapidez de las operaciones y la eficiencia de estas. Aparte de que sean seguras, optimizadas y versátiles.

---

**Gestor de paquetes**: He elegido `Npm`, el cual es el gestor por defecto para `Node.js` y además un entorno de ejecución para `Javascript`. También lo he utilizado como herramienta de construcción, además este gestor funciona a través de un fichero `JSON`, ya que se realiza un seguimiento de módulos instalados. En este fichero se contendrá información del proyecto, tal como el nombre, descripción, autor, etc.

De momento es una _herramienta_ de construcción muy simple, dispone de funciones que por ahora abarcan todas nuestras necesidades, tales como instalar las distintas dependencias, módulos, paquetes y la ejecución de scipts, que por ahora solamente es _testing_. Además su metodología de programación es bastante sencilla, funciona como ya dije junto con un fichero `JSON`, el cual contiene:

-   Todos los módulos necesarios para un proyecto y sus versiones instaladas.
-   Todos los metadatos de un proyecto, como el autor y la licencia, entre otros.
-   Secuencias de comandos que se pueden ejecutar para automatizar tareas del proyecto.

Los archivos `JSON` correspondientes: [`package.json`](../package.json) y [`package-lock.json`](../package-lock.json).

---

**Testing**: _Si no está 'testeado', está roto_. Para llevar a cabo los test, he escogido `Jest`, el cual es un marco de prueba de JavaScript bastante sencillo de entender. `Taskfile` apuntará a [`util.test.js`](../test/util.test.js), el cual será ejecutado mediante [`package.json`](../package.json). `JSON` interviene en esta sección mediante la gestión de la instalación de dependencias con el comando `npm install --save-dev jest`. Se tendrá que modificar la parte de _scripts_ para poder ejecutar `npm test`.

No podemos considerar a los _test_ como una _herramienta_, ya que se interpreta a los test como parte integral del proceso de desarrollo y el código.Aun así, `Jest` es un framework de testing generalista que podemos utilizar en cualquier situación, en el cual podemos crear, ejecutar y estructurar pruebas. El lado positivo de estas pruebas es que puedes tener control sobre el funcionamiento de lo que estás creando, puedes incluso realizar diferentes tipos de pruebas a un mismo bloque de código y de esta manera puedes saber que tan susceptible es esa parte de código.

La principal ventaja es que supone un buen flujo de trabajo con `Npm` y `Node`. Además posee una gran documentación y comunidad, lo cual hace más fácil y ágil su aprendizaje. Tampoco hace falta una biblioteca de aserciones, ya que está incluida.

---

**Docker**: Se ha creado el [Dockerfile](../Dockerfile) y [.dockerignore](../.dockerignore) siguiendo las [recomendaciones de buenas prácticas](https://docs.docker.com/engine/reference/builder/). También se ha creado la [build](https://hub.docker.com/r/nikitastetskiy/micro-calendario/builds) correspondiente en mi perfil de [Dockerhub](https://hub.docker.com/u/nikitastetskiy).

Estos son los contenedores que he podido probar localmente:

| Contenedor Base        | Tiempo de Construcción | Tiempo de Ejecución (_testing_) | Tamaño |
| :--------------------- | :--------------------: | :-----------------------------: | :----: |
| node:14-stretch        |         109.3s         |             14.91s              | 978MB  |
| node:14-buster         |         26.7s          |             15.884s             | 947MB  |
| alpine:latest          |         12.4s          |             13.592s             | 90.5MB |
| node:14-slim           |         14.2s          |             14.382s             | 202MB  |
| mhart/alpine-node:slim |         30.6s          |             12.801s             | 161MB  |

<br>Al principio he usado _buster_ y la versión stretch, ya que son contenedores que lo tienen todo, aunque _buster_ más nuevo, debido a que es la versión Debian 10. Al ser por así decirlo una versión genérica te incluye todas las necesidades, aunque el tiempo de construcción y el tamaño es bastante desfavorable. Por lo que me he inclinado en versiones más slim, en la cual la más ventajosa es _14-slim_, ya que tarda muy poco en construirse y el tamaño de la imagen también es bastante pequeño, aun así, incluye todo lo necesario para el funcionamiento. También he utilizado una versión no oficial que incluía únicamente node (mhart/alpine-node:slim).

Aunque finalmente me he decantado por la versión Alpine, ya que es muy ligera, pese a que utiliza `/bin/sh` como shell, `apk` como packagemanger y algunas librerías inusuales. Esta imagen es mucho mejor, ya que aunque hayamos quitado YARN en como mejora de optimización en node:14-slim ([aquí el commit correspondiente](https://github.com/nikitastetskiy/micro-calendario/commit/fd7b952d3767baa59aa3693af82a2eec1605ef88)), la imagen ubuntu sigue ocupando bastante espacio. Por lo que al utilizar alpine, su última versión disponible, nos ahorramos bastante espacio. También borramos la caché y los archivos `JSON` innecesarios.

Se ha utilizado node como usuario, ya que no se necesita realizar instalaciones como superusuario, todo esto por motivos de seguridad. Posteriormente se ha utilizado también una optimización de la imagen limpiando la caché de npm, además de hacer un clean install. También se ha removido archivos no necesario, como los `JSON`. Otros ejemplos de optimización vienen siendo el uso de herramientas como squash o podman.

### DockerHub

Se ha configurado y automatizado DockerHub:

<img src="../docs/img/docker_mix.png" alt="drawing"/>

### GitHub Container Registry

Se ha configurado y enlazado [GHCR](https://github.com/nikitastetskiy?tab=packages&repo_name=micro-calendario):

<img src="../docs/img/docker2.png" alt="drawing"/>

</br><br>
Ejecución y prueba:
</br><br>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
docker pull nikitastetskiy/micro-calendario
<br>
docker run -t -v `pwd`:/test nikitastetskiy/micro-calendario
</code></pre></div></div>
</br>
Si usamos GitHub Container Registry:
<br></br>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
docker pull ghcr.io/nikitastetskiy/micro-calendario:latest
<br>
docker run -t -v `pwd`:/test ghcr.io/nikitastetskiy/micro-calendario:latest
</code></pre></div></div>
</br>

---

**Integración continua**:

-   `Travis`: se ha configurado el [fichero travis](../.travis.yml), siguiendo las [buenas prácticas](https://docs.travis-ci.com/user/languages/minimal-and-generic/#minimal), de tal manera que pueda ejecutar los test junto al docker que ya teníamos implementado anteriormente. También se ha añadido una pequeña integración continua en el mismo archivo, esto se realiza mediante `deploy` y pages, el cual hace que se me actualice [gh-pages](https://nikitastetskiy.github.io/micro-calendario/) autómaticamente.

![](../docs/img/travis1.png)

-   `Shippable`: se ha configurado el [fichero shippable](../shippable.yml) de una manera muy parecida a travis, pero ahora en vez de utilizar el docker, se ha utilizado directamente node para comprobar los test.

![](../docs/img/travis2.png)

-   `GitHub actions - workflow`: se ha configurado el [fichero ghcr](../.github/workflows/ghcr.yml) y el [fichero linter-prettier](../.github/workflows/lint-prettier.yml). El fichero ghcr se ha utilizado para publicar un paquete docker en la parte de packages de github, testea el contenedor docker y se publica. El fichero linter-prettier se usa para corregir la sintaxis y el estilo del código con reglas definidas por mí y configuraciones generales.

![](../docs/img/travis3.png)

---

**Sistemas serverless**:

-   `Vercel`: todo lo correspondiente a la instalación y configuración de Netlify o Vercel se encuentra en el [repo ejercicios-IV](https://github.com/nikitastetskiy/ejercicios-IV/blob/master/tema%205/README.md), aunque lo único que tenemos que hacer es conectarnos con github en la plataforma Vercel. Posteriormente elegir y importar el código fuente de nuestro proyecto. Finalmente para enlazar el proyecto y nuestro directorio de trabajo, lanzamos vercel y lo configuramos, es decir lo *linkeamos* a nuestra plataforma de Vercel. Así pues cada vez que hagamos push se desplegará en estado production, aunque también podemos desplegarla antes como dev o hacer deploy para tener una preview de su funcionamiento. Gracias a este sistema he podido automatizar las funciones serverless. En su [historia de usuario](https://github.com/nikitastetskiy/micro-calendario/issues/19) podemos ver todos los pasos seguidos para que este sistema funcione correctamente. Para su funcionamiento primero me he creado la cuenta y agregado el repositorio de la asignatura. Luego he inicializado Vercel en mi repo y he agregado la carpeta [api](../api) y el archivo [vercel.json](../vercel.json) para la configuración. En la carpeta se encuentran las distintas funciones. El archivo de configuración se ha realizado debido a que solo quiero que sean accesibles distintas rutas del proyecto y que solamente se use los métodos GET y POST.

![](../docs/img/serverless1.png)

Como función serverless, primero he realizado un [Hola Mundo](../api/hello.js) el cual también funciona cuando accedemos a la raíz del proyecto. La segunda función devuelve un string en formato JSON con una fecha introducida por el usuario. Aunque la fecha a devolver tendrá un formato diferente al introducido. El archivo [5.json](../5.json) contiene lo mismo que si hacemos la [petición a Vercel](https://micro-calendario.vercel.app/calendar?fecha=1995-12-17T03:24:00%20Evento%201). El [código de la segunda función](../api/calendar.js) está comentado y explicado. 

![](../docs/img/serverless2.png)

-   `Netlify`: todo lo correspondiente a la instalación y configuración de Netlify o Vercel se encuentra en el [repo ejercicios-IV](https://github.com/nikitastetskiy/ejercicios-IV/blob/master/tema%205/README.md). Aunque igual que en Vercel, para que se nos actualice y haga build en cada push a GitHub lo que tenemos que hacer es registrarnos con nuestra cuenta, inyectar Netlify a nuestro repositorio y una vez hecho esto, inicializamos Netlify en el directorio del repo y *linkeamos* nuestro proyecto con el que tenemos en Netlify. Para la implementación de Netlify también me he basado en varias funciones, en este caso template, la primera de ellas es un [Hola Mundo](../functions/hello/hello.js) para poder probar el funcionamiento correcto del intercambio de datos en Netlify. Luego he probado la [funcion Protected](../functions/protected/protected.js), la cual devuelve un JSON con el formato de salida "NOT ALLOWED" en caso de no identificar al usuario. He usado el [redireccionamiento](../netlify.toml) adecuado para esta situación en caso de que se quiera acceder a cualquier otro sitio que no sean las funciones implementadas. Finalmente también he implementado [GraphQL](../functions/graphql/graphql.js), el cual nos facilita la consulta y manipulación de datos. He pensado que sería una opción interesante controlar las peticiones desde el cliente y no del servidor, como pasa en Rest. De esta manera podemos definir lo que pedimos. De momento solo están implementadas unas funciones básicas en las que pedimos un query endpoint Hola Mundo y varios types de *Autores* que ante la petición devuelven un JSON, aunque en un futuro podemos definir esta función para la consulta de eventos por fechas específicas o eventos.

![](../docs/img/serverless4.png)

-   `Telegram bot`: este sistema va a estar compaginado con las funciones implementadas en Vercel. El primer paso es crear el token gracias a Bot Father. El funcionamiento del bot depende de la integración de los webhooks, esta opción es mucho más ventajosa que polling, ya que no estamos constantemente preguntando si hay cambios, sino que la función serverless funcionará cuando se envíe un mensaje. Para integrar el webhook solo tenemos que realizar una petición a esta URL `https://api.telegram.org/botTOKEN_BOTFATHER/setWebHook?url=URL_FUNCTION_VERCEL`. Sustituir TOKEN_BOTFATHER por el token correspondiente y URL_FUNCTION_VERCEL por la URL de la función, que en mi caso es `https://micro-calendario.vercel.app/calendar-bot`.
Aunque para acceder a las funciones del bot solamente es posible con objetos JSON, por lo que si accedemos la URL nos dará un error. Aunque esto es fácil de arreglar con un if al principio del programa que nos compruebe si existe un body o mensaje en sí. Utilizamos el fórmato JSON porque necesitamos saber el ID del chat para que haya un intercambio de mensajes, también el contenido del mensaje y diversos datos como el nombre o la fecha del mensaje. Un ejemplo de JSON sería:

```

{
    "update_id":646911460,
    "message":{
        "message_id":93,
        "from":{
            "id":10000,
            "is_bot":false,
            "first_name":"Jiayu",
            "username":"jiayu",
            "language_code":"en-US"
        },
        "chat":{
            "id":10000,
            "first_name":"Jiayu",
            "username":"jiayu",
            "type":"private"
        },
        "date":1509641174,
        "text":"/help"
    }
}


```

Aquí puede ver el funcionamiento del bot y la función. Aunque puede probar el bot en [este enlace](https://t.me/micl_bot).

![](../docs/img/serverless3.png)

---