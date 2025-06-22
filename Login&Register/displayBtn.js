const btnLogin = document.getElementById("displayLogin")
const btnRegister = document.getElementById("displayRegister")

const displayRegister = document.getElementById("Register")
const displayLogin = document.getElementById("Login")

const DisplayBtn = () => {

    btnLogin.addEventListener("click",function(){
        displayLogin.style.display = "block"
        displayRegister.style.display = "none"
    })

    btnRegister.addEventListener("click", function(){
        displayRegister.style.display = "block"
        displayLogin.style.display = "none"
    })

}

export default DisplayBtn