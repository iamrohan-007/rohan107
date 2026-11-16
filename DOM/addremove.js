function additem(){
    let newitem = document.createElement("li");
    newitem.textContent = "JavaScript";
    document.getElementById("mylist").appendChild(newitem);
}

function removeitem(){                                                  
    let list = document.getElementById("mylist");

    if(list.lastElementChild){
        list.removeChild(list.lastElementChild);
    }
}