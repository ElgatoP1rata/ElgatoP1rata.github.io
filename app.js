

const textoInvalido = /[^a-z " "]/g
let codigo = ["e","i","a","o","u"] ;
let voca =["enter","imes","ai","ober","ufat"]
let img= document.getElementById("img-muñeco")
let entrada=document.getElementById("texto").value ;   
let ted = document.getElementById("salida"); 
let titulo_salida=  document.getElementById("gao")


function limpiar(){
    titulo_salida.innerHTML="Limpio y Preparado"
    document.getElementById("texto").value="";   
    ted.innerHTML="Si desea continuar ingrese un texto a incriptar"
    img.style.display="block"

}
    
    function copyToClickBoard() {
        var content = document.getElementById('salida').innerHTML;
        console.log(content=="Si desea continuar ingrese  un texto a incriptar")
        console.log(content=="EN ESTA SECCION SE MOSTRARA EL TEXTO ENCRIPTADO " ||content=="Si desea continuar ingrese  un texto a incriptar" )
       
       
         if(content=="EN ESTA SECCION SE MOSTRARA EL TEXTO ENCRIPTADO "|| content=="Si desea continuar ingrese  un texto a incriptar"){
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
        let entrada=document.getElementById("texto").value
       
                        if (textoInvalido.test(entrada)===true) {
                            alert("Ingrese valores admitidos");
                            document.getElementById("texto").value = "";
                            console.log("Texto invalido detectado");
                            return;
                        }
			else if(textoInvalido.test(entrada)===false){
                    
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




