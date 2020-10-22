# Micro Calendario

> Proyecto que pertenece a la asignatura Infraestructura Virtual (IV).

## Descripción

Esta API web se basará en la consulta de eventos. He elegido este problema, porque tengo muchas complicaciones a la hora de organizar fechas. Así que he pensado que la mejor solución sería un bot personal de telegram, dónde puedas crear eventos y consultar los mismos de una manera eficiente.

Para poder instalar la aplicación emplearemos los siguientes comandos. Es necesario tener [node](https://nodejs.org/) instalado para poder ejecutar los comandos `npm`:

    npm install

> Para instalar las dependencias del proyecto.

    npm test

> Para *testear* el proyecto.

## Documentación

- [GH Pages](https://nikitastetskiy.github.io/micro-calendario/)

## Plan del proyecto

[Aquí](/docs/plan.md) se desarrollará toda la información correspondiente a la planificación del proyecto y las distintas entregas. Se explicarán las pautas seguidas, la creación y la configuración de diferentes ficheros.

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
    <em>Si no está 'testeado', está roto</em>. Para llevar a cabo los test, he escogido <code>Jest</code>, el cual es un marco de prueba de JavaScript bastante sencillo de entender. <code>Taskfile</code> apuntará a <a href="/test/util.test.js"><code>util.test.js</code></a>, el cual será ejecutado mediante <a href="/package.json"><code>package.json</code></a>. <code>JSON</code> interviene en esta sección mediante la gestión de la instalación de dependencias con el comando <code>npm install --save-dev jest</code>. Se tendrá que modificar la parte de *scripts* para poder ejecutar <code>npm test</code>.
    </br><br>
    No podemos considerar a los <em>test</em> como una <em>herramienta</em>, ya que se interpreta a los test como parte integral del proceso de desarrollo y el código. Aun así, <code>Jest</code> es un framework de testing generalista que podemos utilizar en cualquier situación, en el cual podemos crear, ejecutar y estructurar pruebas. El lado positivo de estas pruebas es que puedes tener control sobre el funcionamiento de lo que estás creando, puedes incluso realizar diferentes tipos de pruebas a un mismo bloque de código y de esta manera puedes saber que tan susceptible es esa parte de código.
    </br><br>
    La principal ventaja es que supone un buen flujo de trabajo con <code>Npm</code> y <code>Node</code>. Además posee una gran documentación y comunidad, lo cual hace más fácil y ágil su aprendizaje. Tampoco hace falta una biblioteca de aserciones, ya que está incluida.
    <br>
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
                <li>La primera clase <a href="/src/eventscalendar.js"><code>eventscalendar.js</code></a> del proyecto, encargada de crear los eventos.</li>
                <li>La segunda clase <a href="/src/planner.js"><code>planner.js</code></a> para poder organizar la clase evento.</li>
            </ul>
        <li>El fichero de test, el cual se encuentra en la carpeta <a href="/test">test</a>, bajo el nombre <a href="/test/util.test.js"><code>util.test.js</code></a>.</li>
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
            </ul>
        <li>El fichero de test, el cual se encuentra en la <a href="/test">carpeta test</a>, bajo el nombre <a href="/test/util.test.js"><code>util.test.js</code></a>.</li>
    </ul>
    Todo lo relacionado con las pautas de creación y configuración se encuentra en <a href="docs/plan.md">este enlace</a>.
    </blockquote> </dd>
</dl>

</details>

### Enlaces de interés

- [Herramientas](/docs/herramientas.md): Herramientas que se hayan implementado en el proyecto, dónde se explicará su debido uso y funcionamiento.
- [IV](https://github.com/JJ/IV-20-21): Repositorio de la asignatura Infraestructura Virtual.

## Autor

Nikita Stetskiy [`github`](https://github.com/nikitastetskiy)
