 
 const eje01 = (num1, num2) => {
    num1=document.getElementById("param1");
    num2=document.getElementById("param2");
    res=document.getElementById("res01");
    suma=parseInt(num1.value)+parseInt(num2.value);
    res.innerHTML= "La suma es " +suma;

 }
 const eje02 = (num,pot) => {
    num=document.getElementById("num");
    pot=document.getElementById("pote");
    res=document.getElementById("res02");
    potencia= Math.pow(parseInt(num.value),parseInt(pot.value));
    res.innerHTML="La potencia es: "+potencia; 
    
 }
 const eje03 = (num1,num2,num3)=>{
    num1=document.getElementById("numb1");
    num2=document.getElementById("numb2");
    num3=document.getElementById("numb3");
    res=document.getElementById("res03");
    
    sumatoria= Math.pow(parseInt(num1.value),3)+Math.pow(parseInt(num2.value),3)+Math.pow(parseInt(num3.value),3)
    res.innerHTML="La sumatoria es : "+sumatoria; 

 }
 const eje04 = (bs, altu) => {
    bs=document.getElementById("base");
    altu=document.getElementById("alt");
    res=document.getElementById("res04");
    area=(parseInt(bs.value)*parseInt(altu.value))/2;
    res.innerHTML= "El area es: " +area;

 }
 const eje05 = (d1,sig,d2)=>{
   d1=document.getElementById("a1");
   sig=document.getElementById("signo");
   d2=document.getElementById("a2");
   res=document.getElementById("res05");
   
   if(sig === '+'){
      ope=parseInt(d1.value)+parseInt(d2.value);
      res.innerHTML= "El resultado es: "+ope;
   }else{
      if(sig.value === '-'){
      ope=parseInt(d1.value)-parseInt(d2.value);
      res.innerHTML= "El resultado es: "+ope;
         
      }
      else{
         if(sig.value === '*'){

            ope=parseInt(d1.value)*parseInt(d2.value);
            res.innerHTML= "El resultado es: "+ope;

         }
         else{
            if(sig.value === '/'){
               ope=parseInt(d1.value)/parseInt(d2.value);
               res.innerHTML= "El resultado es: "+ope;

            }
            else{
               if(sig.value ==='%'){
                  ope=parseInt(d1.value)%parseInt(d2.value);
                  res.innerHTML= "El resultado es: "+ope;

               }else{
                  res.innerHTML= "El parámetro no es reconocido"

               }
               
            }
         }

      }
   }
  

}
 
 button01 = document.getElementById("eje01");
 button01.addEventListener("click", eje01);
 button02 = document.getElementById("eje02");
 button02.addEventListener("click", eje02);
 button03 = document.getElementById("eje03");
 button03.addEventListener("click", eje03);
 button04 = document.getElementById("eje04");
 button04.addEventListener("click", eje04);
 button05 = document.getElementById("eje05");
 button05.addEventListener("click", eje05);