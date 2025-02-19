// constants for query selector
// ids
const myStudentId = document.getElementById("myStudentId");
const customNumber = document.getElementById("customNumber");
const imageSelect = document.getElementById("imageSelect");

// classes
const custColor = document.querySelector(".custColor");
const randColor = document.querySelector(".randColor");

// function to change bg color from user input and add student id
function changeCustomColor() {
    let userInput = customNumber.value;
    console.log(userInput);

    // <p> into my student id
    myStudentId.textContent = "200607233";

    // condition (from the instruction)
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = "red";
    } else if (userInput <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (userInput <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (userInput <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (userInput <= 80) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
}

// custom color button
custColor.addEventListener("click", changeCustomColor);

// function to change bg color from random no.
function changeRandomColor() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // essentially the same as the prebious step (reused condition)
    if (randomNumber < 0 || randomNumber > 100) {
        document.body.style.backgroundColor = "red";
    } else if (randomNumber <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (randomNumber <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (randomNumber <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (randomNumber <= 80) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "yellow";
    }

}

// random color button
randColor.addEventListener("click", changeRandomColor);

// function to generate options for select list
function addList() {
    // images
    let imagesArray = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];

    let selectList = document.getElementById('imageSelect');
    
    // clear dupe images
    selectList.innerHTML = '';
    
    // loop
    for (let i = 0; i < imagesArray.length; i++) {
        let option = document.createElement('option');
        option.value = imagesArray[i];
        option.textContent = `Image ${i + 1}`; 
        selectList.appendChild(option); 
    }
}

addList();

// function to change image
function changeImage() {
    let selectList = document.getElementById('imageSelect');
    let selectedImage = selectList.value; 
    let imageElement = document.getElementById('images');

    // update image source
    if (selectedImage) {
        imageElement.src = selectedImage;
    }
}

// Add event listener for change event on select
imageSelect.addEventListener("change", changeImage);
