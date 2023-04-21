const peso = alert("Ingrese Peso en Kg");
if(peso <= 30){
    //Se utiliza el calculo de Holliday-Segar
    if(peso > 20){
        rest = peso - 20;
         a = 10 * 100;
         b = 10 * 50;
         c = rest * 20;
         suma = a + b + c;
         hora = suma / 24;
        mant = hora + hora/2;
        console.log(Math.round(hora), 'cc/hr')
        console.log(Math.round(mant), 'cc/hr mantenimiento')
    }
    if(peso <= 20 && peso > 10){
        rest = peso - 10;
        a = 10 * 100;
        b = rest * 50;
        suma = a + b;
        hora = suma / 24;
        mant = hora + hora/24;
        console.log(Math.round(hora), 'cc/hr')
        console.log(Math.round(mant), 'cc/hr mantenimiento')   
    }
    if(peso <= 10){
        rest = peso * 100;
        hora = rest / 24;
        mant = hora + hora / 24;
        console.log(Math.round(hora), 'cc/hr')
        console.log(Math.round(mant), 'cc/hr mantenimiento')
    }
}else{
    // hidratación basal usando el método de superficie corporal
     sc = ( (peso * 4) + 7)/ (peso + 90)
     valor1 = sc * 1500;
     valor2 = sc * 2000;
    console.log("Puede usar los siguientes valores", Math.round(valor1), 'cc y ', Math.round(valor2), 'cc')
}