//Variables

let goBackArrow = document.querySelector(".go_back");

let btnTema2 = document.querySelector("#tema_2_btn");
let btnTema3 = document.querySelector("#tema_3_btn");
let btnTema4 = document.querySelector("#tema_4_btn");
let btnTema5 = document.querySelector("#tema_5_btn");


//If there is a back arrow on site add eventlisterners

if (goBackArrow!=null){

    goBackArrow.addEventListener("mouseover", hoverArrow);
    goBackArrow.addEventListener("mouseout", hoverArrowNo);
    goBackArrow.addEventListener("click", goBack);

}


//Hover animation on go back arrow
function hoverArrow() {
    goBackArrow.classList.remove("hover_no_more");
    goBackArrow.classList.add("hover");
}

function hoverArrowNo() {
    goBackArrow.classList.remove("hover");
    goBackArrow.classList.add("hover_no_more");
}

//Go back to previous page when click on back arrow

function goBack() {
    goBackArrow.removeEventListener("click", goBack);
    goBackArrow.removeEventListener("mouseout", hoverArrowNo);
    goBackArrow.removeEventListener("mouseover", hoverArrow);
    goBackArrow.classList.remove("hover");
    goBackArrow.classList.remove("hover_no_more");
    window.history.back();
}


// If on project site add these eventlisternes

if (btnTema2!=null && btnTema3!=null && btnTema4!=null && btnTema5!=null){

    btnTema2.addEventListener("mouseover", hoverButton);
    btnTema3.addEventListener("mouseover", hoverButton);
    btnTema4.addEventListener("mouseover", hoverButton);
    btnTema5.addEventListener("mouseover", hoverButton);

    btnTema2.addEventListener("mouseout", hoverButton);
    btnTema3.addEventListener("mouseout", hoverButton);
    btnTema4.addEventListener("mouseout", hoverButton);
    btnTema5.addEventListener("mouseout", hoverButton);

    btnTema2.addEventListener("click", sendToTema2);
    btnTema3.addEventListener("click", sendToTema3);
    btnTema4.addEventListener("click", sendToTema4);
    btnTema5.addEventListener("click", sendToTema5);


}

//Hover animation on buttons

function hoverButton() {
    this.classList.remove("hover_no_more");
    this.classList.add("hover");
}

function hoverButtonNo() {
    this.classList.remove("hover");
    this.classList.add("hover_no_more");
}


//Go to tema 2,3,4 or 5 on click

function sendToTema2() {
    btnTema2.removeEventListener("mouseover", hoverButton);
    btnTema2.removeEventListener("mouseout", hoverButton);
    btnTema2.removeEventListener("click", sendToTema2);
    btnTema2.classList.remove("hover_no_more");
    btnTema2.classList.remove("hover");

    window.location.pathname = '/tema2.html';
}

function sendToTema3() {
    btnTema3.removeEventListener("mouseover", hoverButton);
    btnTema3.removeEventListener("mouseout", hoverButton);
    btnTema3.removeEventListener("click", sendToTema2);
    btnTema3.classList.remove("hover_no_more");
    btnTema3.classList.remove("hover");

    window.location.pathname = '/tema3.html';
}

function sendToTema4() {
    btnTema4.removeEventListener("mouseover", hoverButton);
    btnTema4.removeEventListener("mouseout", hoverButton);
    btnTema4.removeEventListener("click", sendToTema2);
    btnTema4.classList.remove("hover_no_more");
    btnTema4.classList.remove("hover");

    window.location.pathname = '/tema4.html';
}

function sendToTema5() {
    btnTema5.removeEventListener("mouseover", hoverButton);
    btnTema5.removeEventListener("mouseout", hoverButton);
    btnTema5.removeEventListener("click", sendToTema2);
    btnTema5.classList.remove("hover_no_more");
    btnTema5.classList.remove("hover");

    window.location.pathname = '/tema5.html';
}



