# Usamos node, usuario sin privilegios
# Definimos Autor y datos del proyecto
# Declaramos app y node_modules como 
# propietarios de node (primero root)
FROM alpine:latest AS base
LABEL maintainer "Nikita Stetskiy <nikin929@gmail.com>"  \
    name = "micro-calendario"     \
    version = "1.0.0"
RUN addgroup -S node && adduser -S node -G node \
    && apk add --no-cache --update nodejs-dev=12.18.4-r0 npm=12.18.4-r0
    # && npm i -g jest ts-jest supertest should body-parser express\
    # && mkdir /app && chown node:node /app && chmod 755 /app
# WORKDIR /app 
# RUN mkdir /node_modules && chown node:node /node_modules && chmod 755 /node_modules
# USER node

# # En esta etapa o stage vamos a instalar
# # todo lo necesario de la aplicación y 
# # además usaremos metodos para la
# # optimización de memoria
# FROM base AS dev
# COPY --chown=node:node package.json ./
# RUN npm i \
#     && rm package*.json 

# # Realizamos todos los pasos necesarios
# # para la ejecución de los test; copiar
# # los archivos necesarios y montar el
# # volumen correspondiente
# FROM base AS test
# COPY --from=dev /app/node_modules /test/node_modules
# VOLUME ["/test"]
# WORKDIR /test
# ENV PATH=/node_modules/.bin:$PATH
# CMD ["npm", "test"]

RUN npm i -g supertest body-parser express \
    && mkdir /node_modules && chmod 755 /node_modules && chown node /node_modules

USER node
COPY --chown=node package*.json ./
RUN npm ci

USER root
RUN rm package*.json

WORKDIR /test

RUN chown -R node /test
USER node

CMD ["npm","run","test"]