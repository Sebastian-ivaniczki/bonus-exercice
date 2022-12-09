/*
Scrivi un applicazione che sia in grado di generare una serie di numeri randomici.
L'utente, tramite 3 input, deve avere la possibilità di definire:
- Quanti box generare
- il numero minimo di generazione dei numeri random
- il numero massimo di generazione dei numeri random
Cliccando sul tasto "genera", vengono generati i box con i parametri specificati dall'utente e andremo a colorare di VERDE i numeri pari e di ROSSO i numeri dispari.
Es nello screen: genera 10 numeri random nel range 4-15

*/

// prendoo gli elementi in pagina 

const boxNumber = document.getElementById("box-number");
const min = document.getElementById("min");
const max = document.getElementById("max");
const buttonStart = document.getElementById("start");
const cont = document.getElementById("cont")


buttonStart.addEventListener("click" , function (){

    //prendo i value che l'utente inserisce
    const boxElement = parseInt(boxNumber.value.trim());
    const minElement = parseInt(min.value.trim());
    const maxElement = parseInt(max.value.trim());

    // todo validation 


    if( isNaN.boxElement || isNaN.minElement || isNaN.maxElement){
        return
    }
    

    
    
    //creo un for per creare gli elementi div in pagina
    
    
    for(let i = 0; i < boxElement; i++){
        
        
        
        let userNumber = Math.floor(Math.random() * (maxElement - minElement) + minElement);
        
        //elementi in pagina
        const element = document.createElement("div")
        element.classList.add("target")
        cont.append(element)
        
        //se i numeri sono pari o dispari coloro gli elementi

        if(userNumber % 2 === 0){
          element.classList.add("even")  
        }else{
            element.classList.add("shots")
        }


        //collego i numeri random con gli elementi creati in precedenza
    
        element.append(userNumber)
    }
    
    
});