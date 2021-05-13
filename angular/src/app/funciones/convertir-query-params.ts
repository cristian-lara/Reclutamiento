export const convertirQueryParams = (parametros: any) => {
  const parts = [];
  for (var key in parametros) {
    if (parametros.hasOwnProperty(key)) {
      parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(parametros[key]));
    }
  }
  return "?" + parts.join('&');
}
