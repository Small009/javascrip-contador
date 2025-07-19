var count = 0;
const current_number = document.getElementById('currentNumber');
const btnn = document.getElementById('Adicionar');
const btn = document.getElementById('subtrair');
const resett = document.getElementById('reset');

resett.addEventListener('click', zerarcont);
btnn.addEventListener('click', ad);
btn.addEventListener('click', da);
btn.addEventListener('click', cortext);
btnn.addEventListener('click', cortext);

function iniciopagina(){

        alert("Todos Eventos foram implementado através JavaScript");
}


function ad () {
       
         if ( count > 9) {
                
                document.getElementById("Adicionar").disabled = true;
                alert("Você chegou ao final");

        } else {

                 document.getElementById("subtrair").disabled = false;
                 count++;
                 current_number.innerHTML = count;
        }
        
       
       
}

function da () {

        if ( count < -9) {

                
                document.getElementById("subtrair").disabled = true;
                alert("Você chegou ao final");

        } else {
                
                 count--;
                 current_number.innerHTML = count;
                 document.getElementById("Adicionar").disabled = false;
                 
        }
        
        
      
}


function zerarcont () {

  count = 0;
  current_number.innerHTML = count;

}

/*function desabilite () {

        if ( count > 9) {

                document.getElementById("Adicionar").disabled = true;
                alert("Botão + desativado");

        } else {

                 document.getElementById("subtrair").disabled = false;
        }
        

}

function ativar () {

        if ( count < -9) {

                document.getElementById("subtrair").disabled = true;
                alert("Botão - desativado");

        } else {

                 document.getElementById("Adicionar").disabled = false;
        }
        

}*/


function cortext () {

        if (count > 0) {
                        document.getElementById("currentNumber").style.color = "#1600dbff";
        
        } else if (count <= -1 && count <= -1) {
                document.getElementById("currentNumber").style.color = "#d60000ff";

        } else {
                document.getElementById("currentNumber").style.color = "#000000ff";

        } 


}
//document.getElementById("currentNumber").style.color = "#000000";