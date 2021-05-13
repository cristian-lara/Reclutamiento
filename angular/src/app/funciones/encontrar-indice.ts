export const encontrarIndice =  (arreglo: any[], registro: any) => {
  return arreglo.findIndex(
    (elemento) => elemento.id === registro.id
  )
}
