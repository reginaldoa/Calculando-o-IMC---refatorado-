class Enviar{
    constructor(){
    this.tabelas = document.querySelector('.tabelas')
    this.button = document.querySelector('.button')
    this.horas()
    this.resposta()
    
}

resposta(){
    this.button.addEventListener("click", e =>{
    const res = document.querySelector('.res')
    return res.innerHTML = `O seu IMC é de ${this.IMC().toFixed(2)}`
})}

IMC(){
    this.peso = document.querySelector(".peso").value
    this.altura = document.querySelector(".altura").value   
    let imc = this.peso/(this.altura*this.altura)
    if(this.peso === '' || this.altura === '') alert ('Todos os campos devem conter apenas números.')
    return imc
}

horas(){
    let horario = document.querySelector('.horario')
    let data = new Date();
    
    horario.innerHTML = data.toLocaleDateString('PT-BR',{
        dateStyle: 'full'
    });
}

}

const enviando = new Enviar()





  




