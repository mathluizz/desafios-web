//carne - 400gr/pessoa | +6h 650gr
//cerveja - 1200ml/pessoa | +6h 2000ml
//refirgerante - 1000ml/pessoa | +6h 1500ml

//crianças valem 0.5

function calcular(){
    let adult = document.getElementById("adultos").value
    let child = document.getElementById("criancas").value
    let duration = document.getElementById("duracao").value

    let result = document.getElementById("result")
    

    let carne, cerveja, refirgerante
    carne = carnePP(duration) * adult + ((carnePP(duration) * 0.5) * child)
    refirgerante = refriPP(duration) * adult + ((refriPP(duration) * 0.5) * child)
    cerveja = cervejaPP(duration) * adult 


    result.innerHTML = `<p> ${carne/1000} kg de carne </p>`
    result.innerHTML += `<p>${Math.ceil(cerveja/350)} latas de cerveja</p>`
    result.innerHTML += `<p>${Math.ceil(refirgerante/2000)} Pet's 2L de refri</p>`
    
}

function carnePP (duration){
    if (duration >= 6){
        return 650
    } else {
        return 400
    }
}

function cervejaPP (duration){
    if (duration >= 6){
        return 2000
    } else {
        return 1200
    }
}

function refriPP (duration){
    if (duration >= 6){
        return 1500
    } else {
        return 1000
    }
}