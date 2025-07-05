let form = document.querySelector(".form")
let input = document.querySelector(".form input")
let popup = document.querySelector(".popup")
let card = document.querySelector(".card")



let output;
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    output = input.value.trim();
    console.log(output);
    input.value = "";
    let isValid = false;
    if (output != "") {
        isValid = true;
        popup.textContent = "ToDo item Created Successfully"
        displayPopup();
    }
    else {
        popup.textContent = "Please Enter A Valid Task"
        displayPopup();
    }
    createTask(isValid, output);

    output = "";
})


let createTask = (isValid, output) => {
    if (isValid) {
        let task = document.createElement("div");
        task.classList.add("task");

        let left = document.createElement("div");
        left.classList.add("left");
        
        left.textContent = output;

        let right = document.createElement("div");
        right.classList.add("right");

        //  Edit  icon
        let img1 = document.createElement("img");
        img1.setAttribute("src", "/To Do List/Pic/pen.png");
        img1.classList.add("edit");

        //  Strike through the task on click
        img1.addEventListener("click", () => {
            left.classList.toggle("taskDone"); // or task.classList.toggle(...)
        });

        //  Delete icon
        let img2 = document.createElement("img");
        img2.setAttribute("src", "/To Do List/Pic/garbage-bag.png");
        img2.classList.add("delete");

        img2.addEventListener("click", () => {
            task.classList.add("removeTask");
            setTimeout(()=>{
                 task.remove();
            },300)
        });

        right.append(img1);
        right.append(img2);
        task.append(left);
        task.append(right);       
        card.append(task);
    
    }
};




let popupTimer ;

let displayPopup = () => {

    popup.classList.remove("none")
    clearTimeout(popupTimer)
    popupTimer=setTimeout(() => {
        popup.classList.add("none")
    }, 2000)
}
