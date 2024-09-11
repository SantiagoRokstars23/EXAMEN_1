
function multiplo(numero1, numero2) {
    if(numero1 == 0 || numero2 == 0) {
        console.log("No se puede dividir por cero");
        return
    }

    //Se hace siempre y cuando numero1 y numero2 sean diferente de 0
    /**
     * @param {numero1,  numero2}
     * Se crean condiciones de acuerdo al resultado del módulo para obtener su residuo
     */

    if (numero1 % numero2 === 0) {
        console.log(`${numero1} es múltiplo de ${numero2}`);
    } else if (numero2 % numero1 === 0) {
        console.log(`${numero2} es múltiplo de ${numero1}`);
    } else {
        console.log(`Ninguno es múltiplo`);
    }

}

multiplo(7919, 2)
multiplo(840, 210)
multiplo(678223072849,23)
multiplo(1299827,104729)
multiplo(104728,13)
