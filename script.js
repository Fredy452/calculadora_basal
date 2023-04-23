let form = document.getElementById('calculadora');

// Obtenemos el valor de todos los elemntos
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () =>{
    const PESO = document.getElementById('peso').value;
    // Validación del input de peso
    if(PESO > 0){
        ERROR.style.display = 'none'
        let flujo = calculoFlujo(PESO);
        let mantenimiento = flujo * 1.5;
        FLU.innerHTML = flujo + 'cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }else{
        ERROR.style.display = 'block'
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }if(PESO > 30){
        // Hacemos el calculo por superficie corporal
        let valores = superficieCorporal(PESO);
        FLU.innerHTML = valores[0] +' cc/24h' + ' *1500';
        MAN.innerHTML = valores[1] +' cc/24h' + ' *2000';
        ERROR.style.display = 'none'
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
    // Se calcula el peso flujo
    function calculoFlujo(peso){
            let flujo = 0;
            if(peso <= 30){
                //Se utiliza el calculo de Holliday-Segar
                if(peso > 20){
                    let rest = peso - 20;
                    flujo = ((10 * 100) + (10 * 50) + (rest * 20)) / 24;
                    return Math.round(flujo);
                }

                if(peso <= 20 && peso > 10){
                    let rest = peso - 10;
                    flujo = ((10 * 100) + (rest * 50)) / 24;
                    return Math.round(flujo);   
                }

                if(peso <= 10){
                    flujo = (peso * 100) / 24;
                    return Math.round(flujo);
                }
            }
            else
            {
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