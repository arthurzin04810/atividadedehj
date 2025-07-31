function calcula(){

    let c = parseInt(document.getElementById('c_numero').value);
    
    let i = parseInt(document.getElementById('i_numero').value);
    let t = parseInt(document.getElementById('t_numero').value);
    i = i/100;




    let juros = c * i * t;
    let montante = c+juros;
    document.getElementById('montante').textContent = montante;
    document.getElementById('juros').textContent = juros;
}