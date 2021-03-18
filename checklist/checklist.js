//creating delete buttons
let myCheckList = document.getElementsByTagName("li"); //I'd rather not make it global but idk
for (let i=0; i < myCheckList.length; i++){
    let deleteBtn = document.createElement("button");
    let txt = document.createTextNode("delete");
    deleteBtn.onclick = deleteElement;
    deleteBtn.className = "eraseElement";
    deleteBtn.appendChild(txt);
    myCheckList[i].appendChild(deleteBtn);
}

//creating new element of a list
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("newCheck").value;
    let t = document.createTextNode(inputValue+" ");
    li.appendChild(t);
    if (inputValue === ''){
        alert("empty field");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("newCheck").value = "";

    let deleteBtn = document.createElement("button");
    let txt = document.createTextNode("delete")
    deleteBtn.onclick = deleteElement;
    deleteBtn.className = "eraseElement";
    deleteBtn.appendChild(txt);
    li.appendChild(deleteBtn);
}

//delete buttons
function deleteElement(){
    let div = this.parentElement;
    div.remove();
}

function clearList(){
    let myDeleteButtons = document.getElementsByClassName("eraseElement");
    alert(myDeleteButtons.length);
    while (myDeleteButtons.length > 0){
        myDeleteButtons[0].click();
    }
}