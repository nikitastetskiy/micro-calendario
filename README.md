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

<details><summary><b>Lenguaje de programación</b></summary>

<dl>
    <dd> <blockquote>He utilizado <code>Javascript</code>, ya que es un lenguaje ampliamente popular y que para mí es totalmente nuevo. Aunque por lo que he podido leer es un lenguaje bastante sencillo, rápido y muy versátil. Otra de sus famosas ventajas es que es multiplataforma y además es muy útil para desarrollar páginas dinámicas y aplicaciones web.
    <br> Todo lo relacionado con esta explicación se encuentra en <a href="docs/herramientas.md">este enlace</a>. </br> </blockquote> </dd>
</dl>

</details>

<details><summary><b>Gestor de paquetes</b></summary>

<dl>
    <dd> <blockquote>
    He elegido `Npm`, el cual es el gestor por defecto para `Node.js` y además un entorno de ejecución para `Javascript`. También lo he utilizado como herramienta de construcción, además este gestor funciona a través de un fichero `JSON`, ya que se realiza un seguimiento de módulos instalados. En este fichero se contendrá información del proyecto, tal como el nombre, descripción, autor, etc.
    <br>
    De momento es una *herramienta* de construcción muy simple, dispone de funciones que por ahora abarcan todas nuestras necesidades, tales como instalar las distintas dependencias, módulos, paquetes y la ejecución de scipts, que por ahora solamente es *testing*. Además su metodología de programación es bastante sencilla, funciona como ya dije junto con un fichero `JSON`, el cual contiene:
    </br>
    <br>
    - Todos los módulos necesarios para un proyecto y sus versiones instaladas.
    - Todos los metadatos de un proyecto, como el autor y la licencia, entre otros.
    - Secuencias de comandos que se pueden ejecutar para automatizar tareas del proyecto.
    </br>
    <br>
    Los archivos `JSON` correspondientes: [`package.json`](../package.json) y [`package-lock.json`](../package-lock.json).
    </br>
    <br>
    Todo lo relacionado con esta explicación se encuentra en <a href="docs/herramientas.md">este enlace</a>.</blockquote> </dd>
    </br>
</dl>

</details>

### Enlaces de interés

- [Herramientas](/docs/herramientas.md): Herramientas que se hayan implementado en el proyecto, dónde se explicará su debido uso y funcionamiento.
- [IV](https://github.com/JJ/IV-20-21): Repositorio de la asignatura Infraestructura Virtual.

## Autor

Nikita Stetskiy [`github`](https://github.com/nikitastetskiy)
