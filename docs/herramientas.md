# Herramientas utilizadas o procesos de desarrollo

**Lenguaje**: He utilizado `Javascript`, ya que es un lenguaje ampliamente popular y que para mí es totalmente nuevo. Aunque por lo que he podido leer es un lenguaje bastante sencillo, rápido y muy versátil. Otra de sus famosas ventajas es que es multiplataforma y además es muy útil para desarrollar páginas dinámicas y aplicaciones web.

**Base de Datos**: Necesitamos una Base de Datos donde las principales ventajas sean la rapidez de las operaciones y la eficiencia de estas. Aparte de que sean seguras, optimizadas y versátiles. 

**Gestor de paquetes**: He elegido `Npm`, el cual es el gestor por defecto para `Node.js` y además un entorno de ejecución para `Javascript`. También lo he utilizado como herramienta de construcción, además este gestor funciona a través de un fichero `JSON`, ya que se realiza un seguimiento de módulos instalados. En este fichero se contendrá información del proyecto, tal como el nombre, descripción, autor, etc.

De momento es una *herramienta* de construcción muy simple, dispone de funciones que por ahora abarcan todas nuestras necesidades, tales como instalar las distintas dependencias, módulos, paquetes y la ejecución de scipts, que por ahora solamente es *testing*. Además su metodología de programación es bastante sencilla, funciona como ya dije junto con un fichero `JSON`, el cual contiene:

- Todos los módulos necesarios para un proyecto y sus versiones instaladas.
- Todos los metadatos de un proyecto, como el autor y la licencia, entre otros.
- Secuencias de comandos que se pueden ejecutar para automatizar tareas del proyecto.

Los archivos `JSON` correspondientes: [`package.json`](../package.json) y [`package-lock.json`](../package-lock.json).

**Testing**: *Si no está 'testeado', está roto*. Para llevar a cabo los test, he escogido `Jest`, el cual es un marco de prueba de JavaScript bastante sencillo de entender. `Taskfile` apuntará a [`util.test.js`](../test/util.test.js), el cual será ejecutado mediante [`package.json`](../package.json). `JSON` interviene en esta sección mediante la gestión de la instalación de dependencias con el comando `npm install --save-dev jest`. Se tendrá que modificar la parte de *scripts* para poder ejecutar `npm test`.

No podemos considerar a los *test* como una *herramienta*, ya que se interpreta a los test como parte integral del proceso de desarrollo y el código.Aun así, `Jest` es un framework de testing generalista que podemos utilizar en cualquier situación, en el cual podemos crear, ejecutar y estructurar pruebas. El lado positivo de estas pruebas es que puedes tener control sobre el funcionamiento de lo que estás creando, puedes incluso realizar diferentes tipos de pruebas a un mismo bloque de código y de esta manera puedes saber que tan susceptible es esa parte de código.

La principal ventaja es que supone un buen flujo de trabajo con `Npm` y `Node`. Además posee una gran documentación y comunidad, lo cual hace más fácil y ágil su aprendizaje. Tampoco hace falta una biblioteca de aserciones, ya que está incluida.

**Docker**: Se ha creado el [Dockerfile](../Dockerfile) y [.dockerignore](../.dockerignore) siguiendo las [recomendaciones de buenas prácticas](https://docs.docker.com/engine/reference/builder/). También se ha creado la [build](https://hub.docker.com/r/nikitastetskiy/micro-calendario/builds) correspondiente en mi perfil de [Dockerhub](https://hub.docker.com/u/nikitastetskiy).

Estos son los contenedores que he podido probar localmente:

| Contenedor Base | Tiempo de Construcción | Tiempo de Ejecución (*testing*) | Tamaño |
| :-- | :--: | :--: | :--: | :--: |
| node:14-stretch | 109.3s | 14.91s | 978MB |
| node:14-buster| 26.7s | 15.884s | 947MB |
| alpine:3.12 | 12.4s | 13.592s | 90.5MB |
| node:14-slim | 14.2s | 14.382s | 202MB |

<br>Al principio he usado *buster* y la versión stretch, ya que son contenedores que lo tienen todo, aunque *buster* más nuevo, debido a que es la versión Debian 10. Al ser por así decirlo una versión genérica te incluye todas las necesidades, aunque el tiempo de construcción y el tamaño es bastante desfavorable. Por lo que me he inclinado en versiones más slim, en la cual la más ventajosa es *14-slim*, ya que tarda muy poco en construirse y el tamaño de la imagen también es bastante pequeño, aún así, incluye todo lo necesario para el funcionamiento. He descartado la versión Alpine, pese a ser muy ligera, debido a que utiliza `/bin/sh` como shell, `apk` como packagemanger y algunas librerías inusuales.

Se ha utilizado node ya que no se necesita realizar instalaciones como superusuario, todo esto por motivos de seguridad. Posteriormente se ha utilizado también una optimización de la imagen limpiando la cache de npm, además de hacer un clean install.

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