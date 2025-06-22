const initForm = document.getElementById("form")
const content = document.getElementById("dashboard")

const dashboard = () =>{
    const noneForm = initForm.style.display = "none"
    const dContent = content.style.display = "block"
    return {noneForm,dContent}
}

export default dashboard