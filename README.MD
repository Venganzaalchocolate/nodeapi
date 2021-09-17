# Práctica WEB-API/Node.js/MongoDB

Desarrollar el API que se ejecutará en el servidor de un servicio de venta de artículos de
segunda mano llamado Nodepop.

El servicio mantiene anuncios de compra o venta de artículos y permite buscar como poner
filtros por varios criterios, por tanto la API a desarrollar deberá proveer los métodos
necesarios para esto.

Cada anuncio tiene los siguientes datos:
- Nombre del artículo, un anuncio siempre tendrá un solo artículo
- Si el artículo se vende o se busca
- Precio. 
- Foto del artículo. Cada anuncio tendrá solo una foto.
- Tags del anuncio: work, lifestyle, motor y mobile

## Comenzando 🚀

- Clona el repositorio:

HTTPS:
`git clone https://github.com/Venganzaalchocolate/nodeapi.git`

SSH:
`git clone git@github.com:Venganzaalchocolate/nodeapi.git`

### Pre-requisitos 📋

Tener instalado:

- MongoDB
- Node

### Instalación 🔧

Instalar dependencias:
`npm install`

Inicializar Base de Datos con 6 anuncios de prueba.
`node creaArticulosBD.js`

Iniciar la aplicación:
`npm start`

El puero por defecto es el 3000, para cambiarlo solo debes acceder a la carpeta bin en el archivo www.js linea 15
`var port = normalizePort(process.env.PORT || '3000');`

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Autores ✒️

* **Elisabet D'Acosta Almirón** - (https://github.com/venganzaalchocolate) 
