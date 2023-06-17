
//window.alert("Este es mi objeto alert")

//let mensaje = window.prompt("titulo")
//console.log(mensaje)

// let answ = window.confirm("Confirma que eres alumno")
// console.log(answ)

console.log("desde ahorita")
// window.setTimeout(mifuncion,10000)

// function mifuncion(){
//     console.log("han pasado 10000 milisegundos")
// }

// const miintervl = window.setInterval(miIntervalo,3000)

// function miIntervalo(){
//     console.log("han pasado 3000 milisegundos")
// }

// window.setTimeout(mifuncion,15000)

// function mifuncion(){
//     window.clearInterval(miintervl)
//     window.open("https://www.x-codec.net");
// }

// let midiv = document.getElementById("ejemplo")
// midiv.innerHTML = "<h1>Un titulo </h1>"


console.log("desde ahorita")
window.setTimeout(mifuncion,5000)

function mifuncion(){
    let midiv = document.getElementById("ejemplo")
    midiv.innerHTML = "<h1>Un titulo </h1>"
    console.log("El segundo div")
    window.setTimeout(mifuncion2,5000)
}





function mifuncion2(){
    let midiv = document.querySelector(".classe-ejemplo");
    midiv.innerHTML = "<h3>Un titulo 2 </h3>"
    const btn = document.createElement("button");
    btn.innerHTML = "Hello Button";
    midiv.appendChild(btn);

    let misdivs = document.querySelectorAll("div")
    misdivs.forEach(element => {
        const btn2 = document.createElement("button");
        btn2.innerHTML = "Mi boton nuevo"
        element.appendChild(btn2)
        
    });
    console.log(misdivs)
   // window.location.href = "index2.html";
   let orientacion = window.screen.orientation
   console.log(orientacion)
}
