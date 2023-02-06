const btnEl = document.getElementById("btn")
const imcInputEl = document.getElementById("bmi-result")
const weightConditionEl = document.getElementById("weight-condition")

function calculateIMC(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value

    const imcValue = weightValue / (heightValue * heightValue)
   
    imcInputEl.value = imcValue

    if (imcValue < 18.5){
        weightConditionEl.innerText = "Sous poids"
    } else if (imcValue >= 18.5 && imcValue <= 24.9){
        weightConditionEl.innerText = "Poids normal"
    } else if(imcValue >= 25 && imcValue <= 29.9){
        weightConditionEl.innerText = "En surpoids"
    } else if (imcValue >= 30){
        weightConditionEl.innerText = "Obèse"
    }
}

btnEl.addEventListener("click", calculateIMC)