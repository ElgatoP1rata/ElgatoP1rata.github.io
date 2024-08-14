


/*
 próximamente
 -posible emplementacion de animacines chingonas (no le se anime.js :_v)
 -cambiar por fin te titulo de la pagina
 
 */

/* Versions 3.001 
  al volver a realizar una "retesteo" en la validacion de los caracteres permitidos me percate de que la letra "ñ" era contada como invalida esto siendo siendo erroneo(pobre letra nadie la quiere :_v)

    SOLUCIONADO .....
*/

/*Versions 3.0 
  1.-Implementacion del la validacion de los caracteres permitos ...


 */

const textoInvalido = /[^a-z " " ^ñ] . , - ()/g
let codigo = ["e","i","a","o","u"] ;
let voca =["enter","imes","ai","ober","ufat"]
let img= document.getElementById("img-muñeco")
let entrada=document.getElementById("texto").value ;   
let ted = document.getElementById("salida"); 
let titulo_salida=  document.getElementById("gao")

/*Versions 2.01 
1.-implementacion de la funcion para limpiar el text area de entra de texto
*/
function limpiar(){
    titulo_salida.innerHTML="Limpio y Preparado"
    document.getElementById("texto").value="";   
    ted.innerHTML="Si desea continuar ingrese un texto a incriptar"
    img.style.display="block"

}
    
/*version 2.0 un link mediafire  Uwu 
1.- Unificacion de las funciones "encriptar"  and "desencriptar" (en que mejora esto ... la verdad no se pero se ve mas fachero )
2.-Implementacion de la funcion para copiar el text que se encruentra en el tex area de salida
3.-Mejoras en el css para impedir : 
*/
    function copyToClickBoard() {
       
       //recupera el texto de la caja donde aparece el texto incriptado//
        var content = document.getElementById('salida').value.trim();
       
        console.log(content=="EN ESTA SECCION SE MOSTRARA EL TEXTO ENCRIPTADO " || content=="Si desea continuar ingrese un texto a incriptar"||
            content=="EN ESTA SECCION SE MOSTRARA EL TEXTO ENCRIPTADO")
            console.log(content)
       
         if(content=="EN ESTA SECCION SE MOSTRARA EL TEXTO ENCRIPTADO " || content=="Si desea continuar ingrese un texto a incriptar" ||content=="EN ESTA SECCION SE MOSTRARA EL TEXTO ENCRIPTADO"){
            alert("copiaste el texto por defecto ")
            navigator.clipboard.writeText(content)

         }else{
            
            navigator.clipboard.writeText(content)
            .then(() => {console.log('Text copied to clipboard...')})
            .catch(err => {
              console.log('Something went wrong', err);
                })
        }
    }
    


    function encriptar(a, b){
        titulo_salida.innerHTML="Mensaje Encriptado/  Desencriptado:"   
        let entrada=document.getElementById("texto").value.trim()
       
                 
        //validacion de los carateres permitidos//
        
        
            if (textoInvalido.test(entrada)===true) {
                            alert("Ingrese valores admitidos");
                            document.getElementById("texto").value = "";
                            console.log("Texto invalido detectado");
                            return;
                        }
		
        
        
            else if(textoInvalido.test(entrada)===false){
                    //verificacion si el text area de entrada esta vacio//
                         if(entrada===""){
                            alert("ingresa un texto para a incriptar/desencriptar")
                            titulo_salida.innerHTML="NINGUN MENSAJE DETECTADO" ;
                            ted.innerHTML="NO SE ENCUENTRA NINGUN MENSAJE";
                            return
                        }else{

                            img.style.display="none"
                            a.forEach(function callback(text, index) {
                            entrada = entrada.replace(new RegExp(text, 'g'), b[index]);});
                            console.log(entrada)
                            console.log(ted)
                        
                                return ted.innerHTML=entrada
                            }
                                 return  
                        
                        }  
                        
                        
        }
                            
        
       
       
       
       
        
     
       
                       

   
    //primer version de incriptador (sin investigar demasiado ) funcional Uwu (creo... ) //

/*let texto=""
console.log(texto);
texto=texto.replace("a","ai" )
console.log(texto);


function encriptar(){
    
 let i = 1
    for(let i=1 ;i<=5 ;i++){
        
        switch(i){
           case i=1 :{
            texto=texto.replace(/"a"/g,"ai" )
            break;
           } 
           case i=2 :{
            texto=texto.replace(/"e"/g,"enter" )
            break;
           } 
           case i=3 :{
            texto=texto.replace(/"i"/g,"imes" )
            break;
           } 
           case i=4 :{
            texto=texto.replace(/"o"/g,"ober" )
            break;
           } 
           case i=5 :{
            texto=texto.replace(/"u"/g,"ufat" )
            break;
           } 

           
          
        }
    
    }

return alert(texto)
}

function desencriptar(texto){
    
    let i = 1
       for(let i=1 ;i<=5 ;i++){
           
           switch(i){
              case i=1 :{
               texto=texto.replace(/ai/g,"a" )
               break;
              } 
              case i=2 :{
               texto=texto.replace(/enter/g,"e" )
               break;
              } 
              case i=3 :{
               texto=texto.replace(/imes/g,"i" )
               break;
              } 
              case i=4 :{
               texto=texto.replace(/ober/g,"o" )
               break;
              } 
              case i=5 :{
               texto=texto.replace(/ufat/g,"u" )
               break;
              } 
   
              
             
           }
       
       }
   
   return alert(texto)
   }

*/

















