# Versión del contenedor
FROM node:14-slim
# Autor y datos del proyecto
LABEL maintainer "Nikita Stetskiy"  \
      name = "micro-calendario"     \
      version = "0.1"
# Directorio que se utilizará
VOLUME /test
WORKDIR /test
# Archivos necesarios para node
COPY package*.json ./
# Instalamos las dependencias
RUN npm install
# Añadimos un usuario default
RUN useradd -ms /bin/bash calendario
# Sin permisos de superusuario
USER calendario
# Para que no se sobrescriba la imagen 
# al montar el volumen
# ENV PATH=/home/node_modules/.bin:$PATH
# Ejecución del test
CMD ["npm", "test"]
