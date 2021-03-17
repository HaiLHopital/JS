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
// ##TO DO it's only hiding checks, need to remove from existence
function deleteElement(){
   // let element = document.getElementById("list")
    let div = this.parentElement;
    div.style.display = "none";
}

function clearList(){
    let myDeleteButtons = document.getElementsByClassName("eraseElement");
    alert(myDeleteButtons.length);
    for (let i=0; i < myDeleteButtons.length; i++){
        myDeleteButtons[i].click()
    }
}