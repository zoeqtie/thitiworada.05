var form = document.getElementById("myFrom"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    userName = document.getElementById("name"),
    age = document.getElementById("age"),
    city = document.getElementById("city"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    post = document.getElementById("post"),
    sDate = document.getElementById("sDate"),
    submitBtn = document.getElementById(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newYserBtn = document.querySelector(".newUser")


let getData = localStorage.getItem('userProflie') ? JSON.parse(localStorage.getItem('userProflie')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "fill the Form"
    isEdit = false
    imgInput.src = "./image/Profile Icon.webp"
    form.reset()
})


file.onchange = function(){
    if(file.files[0].size < 1000000){  // 1MB = 1000000
        var fileReader = new FileReader();
        
         fileReader.onload = function(e){
             imgUrl = e.target.result
             imgInput.src = imgUrl
         }
        
         filleReader.readAsDataURL(file.files[0])
    }
    else{
        alert("This file is too large!")
    }
}