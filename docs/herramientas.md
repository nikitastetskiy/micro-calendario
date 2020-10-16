# Herramientas utilizadas o con posible uso futuro

**Lenguaje**: He utilizado `Javascript` ya que es un lenguaje ampliamente popular y que para mi es totalmente nuevo. Aunque por lo que he podido leer es un lenguaje bastante sencillo, rápido y muy versátil. Otra de sus famosas ventajas es que es multiplataforma y además es muy útil para desarrollar páginas dinámicas y aplicaciones web.

**Base de Datos**: Necesitamos una Base de Datos donde las princpiales ventajas sean la rápidez de las operaciones y la eficiencia de estas. Aparte de que sean seguras, optimizadas y versátiles. 

**Gestor de paquetes**: He elegido `Npm`, el cuál es el gestor por defecto para `Node.js` y además un entorno de ejecución para `Javascript`. También lo he utilizado como herramienta de construcción, además este gestor funciona a través de un fichero `JSON`, dónde se contendrá información del proyecto, tal cómo nombre, descripción, autor, etc.

**Testing**: *Si no está 'testeado', está roto*. Para llevar a cabo los test, he escogido `Jest`, el cual es un marco de prueba de JavaScript bastante sencillo de entender. `Taskfile` apuntará a [`util.test.js`](../test/util.test.js), el cuál será ejecutado mediante [`package.json`](../package.json). `JSON` interviene en esta sección mediente la gestión de la instalación de dependencias con el comando `npm install --save-dev jest`. Se tendrá que modificar la parte de *scripts* para poder ejecutar `npm test`.