
 function esPalindromo(palabra) {
  // Convertir la palabra a minúsculas y quitar espacios
  palabra = palabra.toLowerCase().replace(/\s/g, '');

  // Comparar la palabra original con su versión invertida
  return palabra === palabra.split('').reverse().join('');
}

function mostrar(){ 
  let comparar = document.getElementById('palabra').value;
  // Ejemplo de uso
let palabraEjemplo = comparar;

if (esPalindromo(palabraEjemplo)) {
  alert(`${palabraEjemplo} es un palíndromo.`);
} else {
  alert(`${palabraEjemplo} no es un palíndromo.`);
}
}



