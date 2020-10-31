# Usamos node, usuario sin privilegios
# Definimos Autor y datos del proyecto
# Declaramos node_modules como propietario
# de node
FROM node:14-slim AS base
LABEL maintainer "Nikita Stetskiy <nikin929@gmail.com>"  \
      name = "micro-calendario"     \
      version = "1.0.0"
RUN mkdir /node_modules && chown node:node /node_modules
USER node

# En esta etapa o stage vamos a instalar
# todo lo necesario de la aplicación y 
# además lo haremos con el comando ci para
# la optimización
FROM base AS dev
WORKDIR /
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --silent --progress=false --no-optional \
    && npm cache clean --force

# Realizamos todos los pasos necesarios
# para la ejecución de los test; copiar
# los archivos necesarios y montar el
# volumen correspondiente
FROM base AS test
COPY --from=dev /node_modules /node_modules
VOLUME ["/test"]
WORKDIR /test
ENV PATH=/node_modules/.bin:$PATH
CMD ["npm", "test"]