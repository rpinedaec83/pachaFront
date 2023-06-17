function CalcularSalario(id, dias) {
    let salario;
    switch (id) {
      case 1:
        salario = dias * 56;
        break;
      case 2:
        salario = dias * 64;
        break;
      case 3:
        salario = dias * 80;
        break;
      case 4:
        salario = dias * 48;
        break;
      default:
        return "El ID del empleado no es válido";
    }
    return `El empleado con ID ${id} trabajó ${dias} días y debe recibir $${salario}`;
  }

  console.log(CalcularSalario(1, 3)); 
  console.log(CalcularSalario(5, 4)); 
  