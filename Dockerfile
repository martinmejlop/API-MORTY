# Usar la imagen oficial de Node.js 22 Alpine
FROM node:22-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install
RUN npm install tslib

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto 4200
EXPOSE 4200

# Comando para ejecutar la aplicación en modo desarrollo
CMD ["npm", "start", "--", "--host", "0.0.0.0"] 