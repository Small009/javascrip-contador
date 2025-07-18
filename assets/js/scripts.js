var count = 0;
const current_number = document.getElementById('currentNumber');
const btnn = document.getElementById('Adicionar');
const btn = document.getElementById('subtrair');

btnn.addEventListener('click', ad);
btn.addEventListener('click', da);
//btnn.addEventListener('click', desabilite);
//btn.addEventListener('click', ativar);
btn.addEventListener('click', cortext);
btnn.addEventListener('click', cortext);

function ad () {
       
         if ( count > 9) {
                
                document.getElementById("Adicionar").disabled = true;
                alert("Botão + desativado");

        } else {

                 document.getElementById("subtrair").disabled = false;
                 count++;
                 current_number.innerHTML = count;
        }
        
       
       
}

function da () {

        if ( count < -9) {

                
                document.getElementById("subtrair").disabled = true;
                alert("Botão - desativado");

        } else {
                
                 count--;
                 current_number.innerHTML = count;
                 document.getElementById("Adicionar").disabled = false;
                 
        }
        
        
      
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