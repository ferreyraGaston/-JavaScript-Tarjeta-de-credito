const formulario=document.querySelector("#formulario");

formulario.addEventListener("submit", validarForm)


function validarForm(e){
    e.preventDefault(); // detiene al navegador para que se lo pueda visualizar
    


    const TarjetaPOO={
        importe: document.querySelector("#importe").value,
        cuota: document.querySelector("#cuota").value,
        check1: document.getElementById("chech1").checked,
        check2: document.querySelector("#chech2").checked,
        check3: document.querySelector("#chech3").checked,

    }
    const activador=0;

    if(TarjetaPOO.check1==true){
        activado= parseFloat(document.querySelector("#chech1").value);
    }
    if(TarjetaPOO.check2==true){
        activado= parseFloat(document.querySelector("#chech2").value);
    }
    if(TarjetaPOO.check3==true){
        activado= parseFloat(document.querySelector("#chech3").value);
    }

    var importeTotal = parseFloat(TarjetaPOO.importe)+(parseFloat(TarjetaPOO.importe) * activador);

    var valorCuota = importeTotal / TarjetaPOO.cuota;

    const respuesta=document.getElementById("respuesta");
    respuesta.textContent=`Importe es ${TarjetaPOO.importe} , cuota ${TarjetaPOO.cuota}`

    const respuesta2=document.getElementById("respuesta2");
    respuesta2.textContent=`El Importe total es ${importeTotal} ,Importe de cuota ${valorCuota}`

    console.log(parseFloat(TarjetaPOO.importe));
    console.log(parseFloat(TarjetaPOO.cuota));
    console.log(activado);
    console.log(importeTotal);
    console.log(valorCuota);

    console.log(TarjetaPOO.check1);
    console.log(TarjetaPOO.check2);
    console.log(TarjetaPOO.check3);

    
}



