const listContainer=document.querySelector('[data-lists]')
const newListForm=document.querySelector('[data-new-list-form]')
const newListInput=document.querySelector('[data-new-list-input]')

let lists=[]

newListForm.addEventListener('submit', function(e){
    e.preventDefault();
    const listName=newListInput.value;
    if (listName===null || listName==='') return;
    const list=createList(listName);
    newListInput.value=null;
    lists.push(list);
    render();
})

function createList(name){
    return {id: Date.now().toString(), name: name};
}

function render(){
    // clearElement(listContainer); solução da simaria
    lists.forEach(function(list){
        const item=document.createElement('li');
        item.classList.add('item');
        item.innerText=list.name;
        listContainer.appendChild(item);                
    })
    lists=[]; // minha solução para não inserir repetido, sempre limpar a lista após a inserção
}

//adicionar funcionalidaes, como excluir, editar, etc... incluir um botão ao lado de cada inserção, com a opção de excluir e editar?

//solução da simaria para não repetir itens a inserir
//function clearElement(element){
//    while(element. firsChild) {
//        element.removeChild(element.firsChild)
//    }
//} 

render()

