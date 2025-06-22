const btnRegister = document.getElementById("btnRegister")
const registerUser = document.getElementById("txtUser")
const registerName = document.getElementById("txtName")
const registerPass = document.getElementById("txtPass")
const validator = document.getElementById("displayValidate")

const Register = () =>{

    btnRegister.addEventListener("click", ()=>{
        const vUser = registerUser.value.trim()
        const vName = registerName.value.trim()
        const vPass = registerPass.value.trim()
        if(!vUser || !vName || !vPass){
            const nullValidator = validator.textContent = "Please fill all the fields!"
            return nullValidator
        } else{
            localStorage.setItem("Username",vUser)
            localStorage.setItem("FullName",vName)
            localStorage.setItem("Password",vPass)
            setTimeout(()=>alert("Registered!"),1500)
            const validValidator = validator.textContent = ""
            return validValidator
        }
    })

}

export default Register