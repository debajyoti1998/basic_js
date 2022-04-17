console.log("This is app.js");

function Book(name,author,type) {
    this.name = name;
    this.author = author;
    this.type = type;

}

function Display() {

}

Display.prototype.add = function(book){
    let tableBody = document.getElementById("tableBody");
    let addUi = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
                tableBody.innerHTML += addUi;
    console.log("book added");
}

Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset()
}
Display.prototype.validate =  function(book) {
    if(book.name.length<2 || book.author.length<2) {
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = function(type,displayMessage){
    let message = document.getElementById("msg")
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show role="alert">
                            <strong>${displayMessage}: </strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
    setTimeout(() => {
        message.innerHTML = ""
    }, 1500);
}



let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit",((e)=>{
    let name =document.getElementById("bookName").value.toUpperCase();
    let author = document.getElementById("author").value.toUpperCase();

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    let type;

    if(fiction.checked) {
        type = fiction.value;
    }
    else if(programming.checked) {
        type = programming.value;
    }
    else if(cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name,author,type)
    console.log(book);

    let display = new Display();
    
    
    if(display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success","Book Added Successfully")
    }
    else{
        display.show("danger","Sorry You Can't Add This Book");
    }
    e.preventDefault()
    console.log("you have submited")

}))