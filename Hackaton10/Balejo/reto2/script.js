const eje01 = (nombre, apellido,edad) => {
    nombre=document.getElementById("param1");
    apellido=document.getElementById("param2");
    edad=document.getElementById("param3");
    res=document.getElementById("res01")
    res.innerHTML= String("Hola mi nombre es "+nombre.value +" "+ apellido.value +" y mi edad "+edad.value);

 }
 const eje02= (num1,num2,num3)=>{
    num1=document.getElementById("numb1");
    num2=document.getElementById("numb2");
    num3=document.getElementById("numb3");
    res=document.getElementById("res02");
    
    sumatoria= Math.pow(parseInt(num1.value),3)+Math.pow(parseInt(num2.value),3)+Math.pow(parseInt(num3.value),3)
    res.innerHTML="La sumatoria es : "+sumatoria; 

 }
 const eje03= (valor) =>{
    valor=document.getElementById("data");
    res=document.getElementById("res03");
    tipo=typeof valor;
    res.innerHTML=tipo; 
    

 }
 const ej04= (...numeros) =>{
    
 }
 button01 = document.getElementById("eje01");
 button01.addEventListener("click", eje01);
 button02 = document.getElementById("eje02");
 button02.addEventListener("click", eje02);
 button03 = document.getElementById("eje03");
 button03.addEventListener("click", eje03);