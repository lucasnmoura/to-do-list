const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')


let minhaListaDeItens = []

function adicionarNovaTarefa(){
    minhaListaDeItens.push({tarefa: input.value, concluido: false})


    input.value = ''

    mostrarTarefas() 

}

function mostrarTarefas() {

let novaLi =''

minhaListaDeItens.forEach((item, posicao) => {
    novaLi = novaLi + `

    <li class="task ${item.concluido && "done"}">
        <img src="img-to-list/checked-tolist.png" alt="[CHECKED-FOTO]" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="img-to-list/trash-tolist.png" alt="[TRASH-FOTO]" onclick="deletarItem(${posicao})">
    </li>

    `
}) 

listaCompleta.innerHTML = novaLi 

}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluido = !minhaListaDeItens[posicao].concluido
    
    mostrarTarefas()

}




function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)
    mostrarTarefas()

}

button.addEventListener('click', adicionarNovaTarefa)
