function changeName(){
    document.getElementById("name").innerHTML = "Rohan Oraon";
}

function changeColor(){
    let x = document.getElementById("div");
    x.style.color = "red";
}


function changeBg(){
    let x = document.getElementById("div");
    x.style.backgroundColor = "yellow";
}

function additem(){
    let newitem = document.createElement("li");
    newitem.textContent = "React";
    document.getElementById("mylist").appendChild(newitem);
}

function removeitem(){                                                  
    let list = document.getElementById("mylist");

    if(list.lastElementChild){
        list.removeChild(list.lastElementChild);
    }
}

function addStyle(){
    document.getElementById("div").classList.add("highlight");
}

function removeStyle(){
    document.getElementById("div").classList.remove("highlight");
}