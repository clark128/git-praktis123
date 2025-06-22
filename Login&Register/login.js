import dashboard from "./dashboard.js"

const loginBtn = document.getElementById("btnLogin")
const userLogin = document.getElementById("userL")
const passLogin = document.getElementById("passL")
const pValidator = document.getElementById("validateDisplay")


const Login = () =>{

    loginBtn.addEventListener("click", function(){
        const username = userLogin.value.trim()
        const password = passLogin.value.trim()
        const vUser = localStorage.getItem("Username")
        const vPass = localStorage.getItem("Password")
        const vName = localStorage.getItem("FullName")

        if(username === vUser && password ===vPass){
            alert(`Welcome, ${vName}`)
            const validateValid = pValidator.textContent = ""
            const displayDashboard = dashboard()
            return {validateValid,displayDashboard}
        }

        else if(!username || !password){
            const validateNull = pValidator.textContent = "Please fill all the fields"
            return validateNull
        }

        else if(username !== vUser || password !== vPass){
            const validateCredentials = pValidator.textContent = "Invalid credentials"
            return validateCredentials
        }
    })
}

export default Login