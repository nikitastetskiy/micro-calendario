# Usamos node, usuario sin privilegios
# Definimos Autor y datos del proyecto
# Declaramos app y node_modules como 
# propietarios de node
FROM alpine:latest AS base
LABEL maintainer "Nikita Stetskiy <nikin929@gmail.com>"  \
    name = "micro-calendario"     \
    version = "1.0.0"
RUN addgroup -S node && adduser -S node -G node \
    && apk add --no-cache --update nodejs-dev=12.18.4-r0 npm=12.18.4-r0 \
    && npm i -g jest ts-jest \
    && mkdir /app && chown node:node /app
WORKDIR /app 
RUN mkdir /node_modules && chown node:node /node_modules
USER node

# En esta etapa o stage vamos a instalar
# todo lo necesario de la aplicación y 
# además usaremos metodos para la
# optimización de memoria
FROM base AS dev
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --silent --progress=false --no-optional  \
    && npm cache clean --force \
    && rm package*.json 

# Realizamos todos los pasos necesarios
# para la ejecución de los test; copiar
# los archivos necesarios y montar el
# volumen correspondiente
FROM base AS test
COPY --from=dev /app/node_modules /app/node_modules
VOLUME ["/test"]
WORKDIR /test
ENV PATH=/node_modules/.bin:$PATH
CMD ["npm", "test"]