var sueldosemanal = 0;
var horassemanales = 0;
horassemanales = prompt("poner horas semanales");
console.log(horassemanales);
const pagoporhorasveinte = 20;
const limitecuarenta = 40;
const pagohorasextras = 25;
if (horassemanales <= 40) {
    sueldosemanal = horassemanales * 20
    
}
console.log(sueldosemanal)
if (horassemanales > 40){
    sueldosemanal = 40*20 + (horassemanales-40)*25;
    
    
}
console.log(sueldosemanal)