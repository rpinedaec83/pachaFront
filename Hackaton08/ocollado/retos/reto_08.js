const MENSAJE_PROMPT_RETO_08 = {
    PRIMERA_NOTA: `Ingrese la primera nota:`,
    SEGUNDA_NOTA: `Ingrese la segunda nota:`,
    TERCERA_NOTA: `Ingrese la tercera nota:`
}

function ejecutarReto08() {
    let primeraNota = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_08.PRIMERA_NOTA);
    let segundaNota = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_08.SEGUNDA_NOTA);
    let terceraNota = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_08.TERCERA_NOTA);
    let notasArray = [];
    notasArray.push(primeraNota, segundaNota, terceraNota);

    let promedioNotas = Utils.obtenerPromedioValores(notasArray);

    let aproboCurso = promedioNotas > 10;

    alert(`El alumno ${Utils.obtenerSiONo(aproboCurso)} aprobó el curso con ${promedioNotas} de nota`);
}