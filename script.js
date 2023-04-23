let form = document.getElementById('calculadora');

// Obtenemos el valor de todos los elemntos
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const TITULO = document.getElementById('detalle-titulo');
const LISTA = document.getElementById('detalle-lista');




CALCULAR.addEventListener('click', () =>{
    const PESO = document.getElementById('peso').value;  
    // Validamos si el imput esta vacio o el numero es negativo
    if (PESO === "") {
        ERROR.innerHTML = '*Por favor ingrese el peso'
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    } else if (PESO >= 0 && PESO <= 30) {
        ERROR.style.display = 'none'
        let flujo = calculoFlujo(PESO);
        let mantenimiento = flujo * 1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        TITULO.innerHTML = 'Calculo por Holliday-Segar';
        LISTA.innerHTML = '<li>De 0kg a 10kg, se calcula 100cc por cada kilo.</li> <li>Se suman 50cc por cada kilo de peso por arriba de 10kg, hasta 20kg.</li> <li>De 20kg para arriba, se suman 20cc por cada kilo adicional</li> ';
    }else if (PESO <= 100) {
         // Hacemos el calculo por superficie corporal
         let valores = superficieCorporal(PESO);
         FLU.innerHTML = valores[0] +' cc/24h' + ' *1500';
         MAN.innerHTML = valores[1] +' cc/24h' + ' *2000';
         ERROR.style.display = 'none'
         FLU.style.display = 'block';
         MAN.style.display = 'block';
         TITULO.innerHTML = 'Calculo por Superficie Corporal';
         LISTA.innerHTML = '<li>Cuando el niño tiene más de 30kg: Se calcula la hidratación basal usando el método de superficie corporal</li> <li>Secalcula usando la siguiente formula</li> <li>Superficie corporal = ( (peso * 4) + 7) / (peso + 90)</li>';

    }else{
        ERROR.innerHTML = '*Peso permitido hasta los 100 kg'
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
    function calculoFlujo(peso){
            let flujo = 0;
            if(peso <= 30){
                //Se utiliza el calculo de Holliday-Segar
                if(peso > 20){
                    let rest = peso - 20;
                    flujo = ((10 * 100) + (10 * 50) + (rest * 20)) / 24;
                    return Math.round(flujo);
                } else if(peso <= 20 && peso > 10){
                    let rest = peso - 10;
                    flujo = ((10 * 100) + (rest * 50)) / 24;
                    return Math.round(flujo);   
                } else if(peso <= 10){
                    flujo = (peso * 100) / 24;
                    return Math.round(flujo);
                }
            } else {
                ERROR.style.display = 'block';
                FLU.style.display = 'none';
                MAN.style.display = 'none';
            }
    }
    function superficieCorporal(PESO){
        // Aprendiendo por las malas a parcear un valor
        let peso = parseFloat(PESO);
        let resultado = ( ((peso * 4) + 7))/ (peso + 90);
        valor1 = Math.round(resultado * 1500);
        valor2 = Math.round(resultado * 2000);
        return [valor1, valor2];
    }
})