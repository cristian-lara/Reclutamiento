export const encontrarIndice =  (arreglo: any[], registro: any) => {
  return arreglo.findIndex(
    (elemento) => elemento._id === registro._id
  )
}
