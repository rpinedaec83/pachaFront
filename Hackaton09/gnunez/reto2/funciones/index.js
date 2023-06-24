function ejercicio01(numero1, numero2) {
  return `La suma de ${numero1} con ${numero2} es ${
    parseInt(numero1) + parseInt(numero2)
  }`;
}

function ejercicio02(nota1, nota2, nota3, nota4) {
  const promedio =
    (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4;
  return `El promedio de las notas ${nota1}, ${nota2}, ${nota3} y ${nota4} es ${promedio}`;
}

function ejercicio03(base, altura) {
  const area = parseInt(base) * parseInt(altura);
  return `El area del rectangulo con base: ${base} y altura ${altura} es: ${area}`;
}

function ejercicio04(base, altura) {
  const area = (parseInt(base) * parseInt(altura)) / 2;
  return `El area del triangulo con base: ${base} y altura ${altura} es: ${area}`;
}

function ejercicio05(radio) {
  const area = 3.141516 * parseInt(radio) * parseInt(radio);
  return `El area de la circunferencia con radio: ${radio} es: ${area}`;
}

function ejercicio06(horasSemanales, sueldoPorHora) {
  const SueldoSemanal = parseInt(horasSemanales) * parseInt(sueldoPorHora);
  return `El sueldo semanal de : ${horasSemanales} por ${sueldoPorHora} es: ${SueldoSemanal}`;
}

function ejercicio07(metros) {
  const pulgadas = parseInt(metros) / 0.0254;
  return `${metros}m equivale a ${pulgadas} pulgadas `;
}

function ejercicio08(soles) {
  const dolar = parseInt(soles) / 3.98;
  return `${soles} equivale a ${dolar} dolares`;
}

function ejercicio09(fechaNacimiento) {
  const edad = new Date().getFullYear() - parseInt(fechaNacimiento);
  return `La edad es de ${edad} años`;
}

function ejercicio10(nombre1, edad1, nombre2, edad2, nombre3, edad3) {
  const edadPersona = {
    edad1: parseInt(edad1),
    edad2: parseInt(edad2),
    edad3: parseInt(edad3),
  };

  if (edadPersona.edad1 < edadPersona.edad2 && edadPersona.edad1 < edadPersona.edad3)
    return `El menor es ${nombre1} con ${edad1} años`;

  if (edadPersona.edad2 < edadPersona.edad3 && edadPersona.edad2 < edadPersona.edad1) {
    return `El menor es ${nombre2} con ${edad2} años`;
  }
  return `El menor es ${nombre3} con ${edad3} años`;
}

function ejercicio15(edad){
   return parseInt(edad)<18 ? "No vota" : "Si vota"
    /*if(parseInt(edad) >= 18){
        return 'Puede votar'
    }else {
        return 'No vota'
    }
*/


 }

export default {
  ejercicio01,
  ejercicio02,
  ejercicio03,
  ejercicio04,
  ejercicio05,
  ejercicio06,
  ejercicio07,
  ejercicio08,
  ejercicio09,
  ejercicio10,
  ejercicio15,
};
