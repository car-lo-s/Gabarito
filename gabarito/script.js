let pessoas = []
nomes.map((item)=>{
    let clone = document.querySelector(".aluno").cloneNode(true)
    let area = document.querySelector(".area")

    clone.querySelector(".aluno-nome").innerHTML = item.nome
    
    area.append(clone)
    pessoas.push(item.nome)
})

window.onload = function(){
    let btn = document.querySelector(".btn")
    btn.addEventListener('click',()=>{
    registro()
          
 })
}

function registro(){
    let dado = document.querySelectorAll('form')
    let a = dado[0].querySelectorAll(".aluno-nome")
    
    for(var i = 0; i < dado[0].length; i++){
        if(i%10 == 0 || i == 0){
            console.log(dado[0][i])
        }
    }
    
    
}



    
