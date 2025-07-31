function calula(){

    let c = parseInt (document.getElementById("c").value);
    let i = parseInt (document.getElementById("i").value);
    let t = parseInt (document.getElementById("t").value);




    let juros = c * i * t
     document.getElementById('resultado').textContent = 'Resultado'+juros;

}