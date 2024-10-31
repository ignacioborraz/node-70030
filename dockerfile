# 1 definir el tipo de aplicacion que vamos a construir
FROM node

# 2 definir donde se va a guardar y el nombre del proyecto imagen
WORKDIR /codercommerce

# 3 copiar/mover todas las dependencias desde el servidor hacia el contenedor
  # copiar/mover todas las dependencias de todos los archivos package
  # hacia la carpeta raiz del contenedor
COPY package*.json ./

# 4 instalar los modulos del package
RUN npm install

# 5 copiar el resto de los archivos/carpetas
COPY . .

# 6 configurar el puerto de exposicion del contenedor
  # es el puero donde se va a levantar el contenedor
  # se recomienda que sea el mismo que el puerto donde funcinoa la aplicacion
EXPOSE 9000

# configurar el comando de inicializacion de la aplicacion
CMD ["npm","start"]
# CMD ["npm","run","test"]
# CMD ["npm","run","dev"]