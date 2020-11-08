# Micro Calendario

> Proyecto que pertenece a la asignatura Infraestructura Virtual (IV).

## Descripción

Esta API web se basará en la consulta de eventos. He elegido este problema, porque tengo muchas complicaciones a la hora de organizar fechas. Así que he pensado que la mejor solución sería un bot personal de telegram, dónde puedas crear eventos y consultar los mismos de una manera eficiente.

Para poder instalar la aplicación emplearemos los siguientes comandos. Es necesario tener [node](https://nodejs.org/) instalado para poder ejecutar los comandos `npm`:

    npm install

> Para instalar las dependencias del proyecto.

    npm test

> Para _testear_ el proyecto.

## Documentación

En el [plan del proyecto](/docs/plan.md) se desarrollará toda la información correspondiente a la planificación del proyecto y las distintas entregas. Se explicarán las pautas seguidas, la creación y la configuración de diferentes ficheros.

Aun así, a continuación puede disponer de toda la información esencial del proyecto:

<details><summary><b>Lenguaje de programación</b></summary>

<dl>
    <dd> <blockquote><br>
    He utilizado <code>Javascript</code>, ya que es un lenguaje ampliamente popular y que para mí es totalmente nuevo. Aunque por lo que he podido leer es un lenguaje bastante sencillo, rápido y muy versátil. Otra de sus famosas ventajas es que es multiplataforma y además es muy útil para desarrollar páginas dinámicas y aplicaciones web.
    </br><br>
    Todo lo relacionado con esta explicación se encuentra en <a href="docs/herramientas.md">este enlace</a>.
    </blockquote> </dd>
</dl>

</details>

<details><summary><b>Gestor de paquetes</b></summary>

<dl>
    <dd> <blockquote>
    <br>
    He elegido <code>Npm</code>, el cual es el gestor por defecto para <code>Node.js</code> y además un entorno de ejecución para <code>Javascript</code>. También lo he utilizado como herramienta de construcción, además este gestor funciona a través de un fichero <code>JSON</code>, ya que se realiza un seguimiento de módulos instalados. En este fichero se contendrá información del proyecto, tal como el nombre, descripción, autor, etc.
    </br><br>
    De momento es una <em>herramienta</em> de construcción muy simple, dispone de funciones que por ahora abarcan todas nuestras necesidades, tales como instalar las distintas dependencias, módulos, paquetes y la ejecución de scipts, que por ahora solamente es <em>testing</em>. Además su metodología de programación es bastante sencilla, funciona como ya dije junto con un fichero <code>JSON</code>, el cual contiene:
    </br>
    <br>
    <ul>
        <li>Todos los módulos necesarios para un proyecto y sus versiones instaladas.</li>
        <li>Todos los metadatos de un proyecto, como el autor y la licencia, entre otros.</li>
        <li>Secuencias de comandos que se pueden ejecutar para automatizar tareas del proyecto.</li>
    </ul>
    Los archivos <code>JSON</code> correspondientes: <a href="/package.json"><code>package.json</code></a> y <a href="/package-lock.json"><code>package-lock.json</code></a>.
    </br><br>
    Todo lo relacionado con esta explicación se encuentra en <a href="docs/herramientas.md">este enlace</a>.
    </blockquote> </dd>
</dl>

</details>

<details><summary><b><em>Testing</em></b></summary>

<dl>
    <dd> <blockquote>
    <br>
    <em>Si no está 'testeado', está roto</em>. Para llevar a cabo los test, he escogido <code>Jest</code>, el cual es un marco de prueba de JavaScript bastante sencillo de entender. <code>Taskfile</code> apuntará a <a href="/test/util.test.js"><code>util.test.js</code></a>, el cual será ejecutado mediante <a href="/package.json"><code>package.json</code></a>. <code>JSON</code> interviene en esta sección mediante la gestión de la instalación de dependencias con el comando <code>npm install --save-dev jest</code>. Se tendrá que modificar la parte de <em>scripts</em> para poder ejecutar <code>npm test</code>.
    </br><br>
    No podemos considerar a los <em>test</em> como una <em>herramienta</em>, ya que se interpreta a los test como parte integral del proceso de desarrollo y el código. Aun así, <code>Jest</code> es un framework de testing generalista que podemos utilizar en cualquier situación, en el cual podemos crear, ejecutar y estructurar pruebas. El lado positivo de estas pruebas es que puedes tener control sobre el funcionamiento de lo que estás creando, puedes incluso realizar diferentes tipos de pruebas a un mismo bloque de código y de esta manera puedes saber que tan susceptible es esa parte de código.
    </br><br>
    La principal ventaja es que supone un buen flujo de trabajo con <code>Npm</code> y <code>Node</code>. Además posee una gran documentación y comunidad, lo cual hace más fácil y ágil su aprendizaje. Tampoco hace falta una biblioteca de aserciones, ya que está incluida.
    </br><br>
    Todo lo relacionado con esta explicación se encuentra en <a href="docs/herramientas.md">este enlace</a>.
    </blockquote> </dd>
</dl>

</details>

<details><summary><b><em>Docker</em></b></summary>
<dl>
    <dd> <blockquote>
        <br>
        Se ha creado el <a href="/Dockerfile">Dockerfile</a> y <a href="/.dockerignore">.dockerignore</a> siguiendo las <a href="https://docs.docker.com/engine/reference/builder/">recomendaciones de buenas prácticas</a>. También se ha creado la <a href="https://hub.docker.com/r/nikitastetskiy/micro-calendario/builds">build</a> correspondiente en mi perfil de <a href="https://hub.docker.com/u/nikitastetskiy">Dockerhub</a>.
        </br><br>
        Estos son los contenedores que he podido probar localmente:
        </br><br>
        <table style="width:100%">
        <tr>
            <td><b>Contenedor Base</b></td>
            <th>Tiempo de Construcción</th> 
            <th>Tiempo de Ejecución (<em>testing</em>)</th>
            <th>Tamaño</th>
        </tr>
        <tr>
            <td><b>node:14-stretch</b></td>
            <th>109.3s</th> 
            <th>14.91s</th>
            <th>978MB</th>
        </tr>
        <tr>
            <td><b>node:14-buster</b></td>
            <th>26.7s</th> 
            <th>15.884s</th>
            <th>947MB</th>
        </tr>
        <tr>
            <td><b>alpine:3.12</b></td>
            <th>12.4s</th> 
            <th>13.592s</th>
            <th>90.5MB</th>
        </tr>
        <tr>
            <td><b>node:14-slim</b></td>
            <th>14.2s</th> 
            <th>14.382s</th>
            <th>202MB</th>
        </tr>
        </table>
        <br>
        Al principio he usado <em>buster</em> y la versión stretch, ya que son contenedores que lo tienen todo, aunque <em>buster</em> más nuevo, debido a que es la versión Debian 10. Al ser por así decirlo una versión genérica te incluye todas las necesidades, aunque el tiempo de construcción y el tamaño es bastante desfavorable. Por lo que me he inclinado en versiones más slim, en la cual la más ventajosa es <em>14-slim</em>, ya que tarda muy poco en construirse y el tamaño de la imagen también es bastante pequeño, aun así, incluye todo lo necesario para el funcionamiento. También he utilizado una versión no oficial que incluía únicamente node (<em>mhart/alpine-node:slim</em>).
        </br><br>
        Aunque finalmente me he decantado por la versión Alpine, ya que es muy ligera, pese a que utiliza <code>/bin/sh</code> como shell, <code>apk</code> como packagemanger y algunas librerías inusuales. Esta imagen es mucho mejor, ya que aunque hayamos quitado YARN en como mejora de optimización en node:14-slim (<a href="fd7b952d3767baa59aa3693af82a2eec1605ef88">aquí el commit correspondiente</a>), la imagen ubuntu sigue ocupando bastante espacio. Por lo que al utilizar alpine, su última versión disponible, nos ahorramos bastante espacio. También borramos la caché y los archivos <code>JSON</code> innecesarios.
        </br><br>
        Se ha utilizado node como usuario, ya que no se necesita realizar instalaciones como superusuario, todo esto por motivos de seguridad. Posteriormente se ha utilizado también una optimización de la imagen limpiando la caché de npm, además de hacer un clean install. También se ha removido archivos no necesario, como los <code>JSON</code>. Otros ejemplos de optimización vienen siendo el uso de herramientas como squash o podman.
        </br><br>
        <h3>DockerHub</h3>
        Se ha configurado y automatizado DockerHub:
        </br><br>
        <img src="docs/img/docker_mix.png" alt="drawing"/>
        </br><br>
        <h3>GitHub Container Registry</h3>
        Se ha configurado y enlazado <a href="https://github.com/nikitastetskiy?tab=packages&repo_name=micro-calendario">GHCR</a>:
        </br><br>
        <img src="docs/img/docker2.png" alt="drawing"/>
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
        Todo lo relacionado con esta explicación se encuentra en <a href="docs/herramientas.md">este enlace</a>.
    </blockquote> </dd>
</dl>

</details>

<details><summary><b>Enlaces a códigos y clases</b></summary>

<dl>
    <dd> <blockquote>
    <br>
    <ul>
        <li>Se ha añadido el fichero <a href="/iv.yaml"><code>YAML</code></a> <em>Ain't Markup Language</em>, con la ruta de la estructura del proyecto y las distintas claves cómo <em>lenguaje</em>, <em>test</em> y <em>taskfile</em>.</li>
        <li>Se ha creado la <a href="/src">carpeta src</a> con distintas clases:</li>
            <ul>
                <li>La primera clase <a href="/src/eventscalendar/events.js"><code>events.js</code></a> del proyecto, encargada de crear los eventos.</li>
                <li>La segunda clase <a href="/src/eventscalendar/planner.js"><code>planner.js</code></a> para poder organizar y gestionar la clase evento.</li>
            </ul>
        <li>El fichero de test, el cual se encuentra en la carpeta <a href="/test">test</a>, bajo el nombre <a href="/test/util.test.js"><code>util.test.js</code></a>.</li>
        <li>Se ha creado el <a href="/Dockerfile">Dockerfile</a> y <a href="/.dockerignore">.dockerignore</a>.</li>
        <li>Los archivos <code>JSON</code> correspondientes: <a href="/package.json"><code>package.json</code></a> y <a href="/package-lock.json"><code>package-lock.json</code></a>.</li>
    </ul>
    Todo lo relacionado con las pautas de creación y configuración se encuentra en <a href="docs/plan.md">este enlace</a>.
    </blockquote> </dd>
</dl>

</details>

<details><summary><b>Enlaces a <em>issues</em>, <em>milestones</em> e historias de usuario </b></summary>

<dl>
    <dd> <blockquote>
    <ul>
    <br>
        <li><a href="https://github.com/nikitastetskiy/micro-calendario/issues?q=is%3Aissue+is%3Aclosed)">En este enlace</a> se encuentran los <em>issues</em> cerrados.</li>
        <li><a href="https://github.com/nikitastetskiy/micro-calendario/milestones?state=closed">En este enlace</a> se encuentran los <em>milestones</em> cerrados.</li>
        <li>Se han añadido las <a href="https://github.com/nikitastetskiy/micro-calendario/milestone/4">Historias de Usuario</a> con su <a href="https://github.com/nikitastetskiy/micro-calendario/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories">label</a> correspondiente. Aquí se puede consultar las diferentes HU:</li>
            <ul>
                <li><a href="https://github.com/nikitastetskiy/micro-calendario/issues/4">HU1</a>: Consulta de eventos.</li>
                <li><a href="https://github.com/nikitastetskiy/micro-calendario/issues/5">HU2</a>: Consulta específica de eventos.</li>
                <li><a href="https://github.com/nikitastetskiy/micro-calendario/issues/6">HU3</a>: Creación de eventos.</li>
                <li><a href="https://github.com/nikitastetskiy/micro-calendario/issues/14">HU4</a>: Configuración de Docker.</li>
            </ul>
    </ul>
    Todo lo relacionado con las pautas de creación y configuración se encuentra en <a href="docs/plan.md">este enlace</a>.
    </blockquote> </dd>
</dl>

</details>

## Enlaces de interés

-   [Herramientas](/docs/herramientas.md): Herramientas que se hayan implementado en el proyecto, dónde se explicará su debido uso y funcionamiento.
-   [IV](https://github.com/JJ/IV-20-21): Repositorio de la asignatura Infraestructura Virtual.
-   [GH Pages](https://nikitastetskiy.github.io/micro-calendario/).

## Autor

Nikita Stetskiy [`github`](https://github.com/nikitastetskiy)
