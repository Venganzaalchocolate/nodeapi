// conexión a la base de datos
const dbconexion=require('./lib/connectMongoose')

// modelo de artículos
const Articulo= require('./model/Articulo')

// json de muestra
const articuloEjemplo = require('./lib/ejemplo.json')

main().catch(err=>console.log('Hubo un error', err))

async function main(){
  await initArticulos();
  dbconexion.close();
}

async function initArticulos(){
  //elimino todos los documentos de la colección de articulos
  const borrar = await Articulo.deleteMany();
  console.log(borrar);

  //mostramos en la consola lo borrado
  console.log(`Eliminados ${borrar.deletedCount} articulos`)

  // crear articulos iniciales
  const x = await Articulo.insertMany(articuloEjemplo.articulos);
  console.log(`Creados ${x.length} articulos`)

}









