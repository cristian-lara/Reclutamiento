# Manual de usuario

#Indice
1. Prerequisitos
2. Levantar ambiente
3. Construccion cliente
4. Funcionalidad


## Prerequisitos

- Tener instalados las versiones de angular 11 y nest js 7 en el caso que se quieran hacer modificaciones al codigo.
- Tener docker en el equipo o tener una base de datos mongo
- Tener instalado node version 14
- Descomprimir el proyecto verificar se tengan los directorios servidor y angular

## Levantar ambiente
- Mediante terminal dirigirse al directorio `/servidor`
- Ejecutar docker compose con el siguiente comando `docker-compose up`
- Ejecutar npm i en otra terminal en el directorio `/servidor`
- Ejecutar npm run start
- Validar que se encuentre levantada la aplicacion en el puerto 3000
- Url http://localhost:3000

## Construccion del cliente
- Si existen cambios en el cliente angular realizarlos y al finalizar ejecutar el siguiente comando para construir el aplicativo `ng build --prod`
- Cambios extras apuntar a otro servidor. En la carpeta environment se encuentra configurado la url para apuntar al backend del nest si se cambia el puerto del servidor nest debe cambiarse tambien en el cliente.
- Una vez generado los archivos en la carpeta dist, en esta carpeta encontraremos un directorio llamado `angular`. el contenido de este directorio debe copiarse dentro de la carpeta  publico en el directorio `servidor`con la finalidad de que el aplicativo angular quede embebido en el servidor nest.


## Funcionalidad

### Informacion github
Permite al usuario recuperar la informacion de cualquier usuario github
url http://localhost:3000/informacion-github
### Administracion de datos
Permite al usuario recuperar la informacion almacenada en la base de datos
url http://localhost:3000/administracion-datos

**Nota**:  El dominio puede variar si se depliega en otro lado.
