# GETBACK CHALLENGE

## Endpoints

- /products | Obtiene todos los productos.
  <br><br>

- /search | Filtra los prodcutos por nombre, precio y los pagina.

  Querys:
  
  tag_name => Nombre completo o parcial | string<br>
  price_value => Valor del precio | int<br>
  price_comparison => Tipo de comparación | "<" o ">" o "="<br>
  current_page =>  página actual | int<br>
  per_page => Cantidad de productos por página | int<br>

----------------------------------------------------------------------

## Requisitos previos

- Node.js: [Descargar Node.js](https://nodejs.org)

## Instalación

1. Clona este repositorio en tu máquina local:

    git clone https://github.com/finstory/getback_challenge.git

2. Navega hasta el directorio del proyecto:

    cd api

3. Instala las dependencias del proyecto utilizando npm:

    npm install

4. Por último se debe crear un archivo .env para configurar las variables de entorno (hay incluido un ejemplo en el repositorio):

    - Añade tu base de datos PostgreSQL.
      
    ![image](https://github.com/finstory/getback_challenge/assets/95634052/f97d04c8-1aac-4b24-9f1f-8ba23eff5a6e)
    - Añade los datos de las Api's extrenas (Están incluidas en el email, el archivo .env).
      
    ![image](https://github.com/finstory/getback_challenge/assets/95634052/52a3c3b9-09f1-4c14-93ae-a07b16f09519)


## Ejecución

1. Inicia el servidor:

    npm start

2. Puedes probar la aplicación en la ruta principal:

    http://localhost:3001/
   
    ![image](https://github.com/finstory/getback_challenge/assets/95634052/1e1fdce8-95a2-437d-a364-93fcd62c8aa9)

