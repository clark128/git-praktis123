const btnPokemon = document.getElementById("btnSearch")


btnPokemon.addEventListener("click",async function result(){
  try{ const search = document.getElementById("search").value.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      if(!response.ok){
        const err = document.getElementById("error").textContent = "No Found"
        const text = document.getElementById("txt").textContent = ""
        const imgElement = document.getElementById("imgPokemon").style.display = "none"
        return {err,text,imgElement}
      } else{
        document.getElementById("error").textContent = ""
      }
    const data = await response.json()
    const pokemonSprite =  data.sprites.front_default;
    const pokemonName = data.name
    const imgElement = document.getElementById("imgPokemon")

    imgElement.src = pokemonSprite
    imgElement.style.display = "block"

    const names = document.getElementById("txt").textContent = `Pokemon Name : ${pokemonName}`
    return names
  }
  catch(error){
    console.warn(error)
  }

})