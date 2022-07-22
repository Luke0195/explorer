# De onde vem a imagem

FROM node:16.13.2-alpine
#Ambiente de Local
ENV LC_ALL=C.UTF-8
#Qual será o nosso workspace
WORKDIR /app
# Copiando todo o conteudo do nosso projeto para o docker
COPY . .

RUN yarn

#ENV API =value
EXPOSE  5173
CMD yarn dev
