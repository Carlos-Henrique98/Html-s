var ul = document.getElementById("myList");
var li;
var itemId;
var item;


Adicionar = function(){
    
    if(document.getElementById("addTarefa").value != ""){

        item = document.getElementById("addTarefa");
        itemId = ul.childElementCount;
        li = criarItemEl(item.value,itemId);
        li.appendChild(criarRemoveBtn(itemId));
        ul.appendChild(li);
        item.value = "";
    }
    else{
        alert("Digite uma tarefa no campo!");
    }
}

removerTarefa = function(itemId){
    for( i = 0 ; i < ul.children.length ; i++){

        if(ul.children[i].getAttribute("index") == itemId ){

            ul.children[i].remove();

        }
    }
}

criarItemEl = function(itemValue, itemId){

    let li = document.createElement("li");

    li.setAttribute("index", itemId);

    li.appendChild(document.createTextNode(itemValue));

    return li;
}

criarRemoveBtn = function(itemId){
    var icone = document.getElementsByTagName("i").innerHTML;
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removerTarefa("+itemId+")");
    btn.innerHTML = icone;
    return btn;
}
