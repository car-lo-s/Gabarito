let pessoas = []
nomes.map((item)=>{
    let clone = document.querySelector(".aluno").cloneNode(true)
    let area = document.querySelector(".area")

    clone.querySelector(".aluno-nome").innerHTML = item.nome
    
    area.append(clone)
    pessoas.push(item.nome)
})

window.onload = function(){
    const dt = new Date()
    let data = dt.getFullYear
    let btn = document.querySelector(".btn")
    // let gab = ['a','b','c','c','a','a','b','c','c','a']
    btn.addEventListener('click',()=>{
    let dados = document.querySelectorAll('form')
    var doc = new jsPDF()
    var i = 0 
    var j = 0
    var k = 0
    var total = 0
    var pos = 0
    var cont = 0
    // var aux = dados[0].querySelectorAll(".aluno-total")
    var linha    
        
        // console.log(pessoas[cont])
        linha = pessoas[cont]+"     "
        for(i=0;i<dados[0].length;i++){
            j++
            // console.log(dados[0][i])
            if(dados[0][i].value == ""){
                linha+=" - "
            }else{
                linha+=" "+dados[0][i].value 
                if(dados[0][i].value == gab[k]){
                    total++
                    k++
                }
            }

            

            if(j==10){
                cont++
                // console.log(pessoas[cont])
                // aux[0].innerHTML = total
                // k = 0
                linha+="\n"
                if(pessoas[cont] != undefined){
                    linha+=pessoas[cont]+"     "
                }

                j = 0
            }
        }
        doc.text(linha,10,10)
        doc.save("Gabarito - "+ dt.getDate()+" - "+(dt.getMonth()+1)+" - "+dt.getFullYear()+".pdf")
    
    
    
          
 })

 
}




    
