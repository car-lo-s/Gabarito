// let pessoas = []
nomes.map((item)=>{
    let clone = document.querySelector(".aluno").cloneNode(true)
    let area = document.querySelector(".area")

    clone.querySelector(".aluno-nome").innerHTML = item.nome
    
    area.append(clone)
    // pessoas.push(item.nome)
})

window.onload = function(){
    var doc = new jsPDF()
    var data = new Date()
    let btn = document.querySelector(".btn")
    btn.addEventListener('click',()=>{
    let resposta =  registro()
    var x = 10
    var y = 10
    var a = 40
    var b
    var cont = 0
    
    for(var i=0; i<resposta.length;i++){
        if(resposta[i].length>2){
            doc.text(resposta[i],x,y)
            b = y
            a = 40
            y = y+10
        }else{
            if(resposta[i] == ''){
                doc.text("-",a,b)
                a=a+10
            }else{
                doc.text(resposta[i],a,b)
                a=a+10
            }
        }
    }
    doc.save("Gabarito - "+data.getDate()+"-"+(data.getMonth()+1)+"-"+data.getFullYear())
    
 })
}

function registro(){
    let dado = document.querySelectorAll('form')
    let a = dado[0].querySelectorAll(".aluno-nome")
    let x = 0;
    let y = 0;
    let resposta = []

    for(var i=0; i<dado[0].length;i++){
        if(y == 0 || y == 10){
            // console.log(a[x].innerHTML);
            resposta.push(a[x].innerHTML)
            x++;
            if(y == 10){
                y = 0;
            }
        }
        y++;
        // console.log(dado[0][i].value)
        resposta.push(dado[0][i].value)
    }
    return resposta
}



    
