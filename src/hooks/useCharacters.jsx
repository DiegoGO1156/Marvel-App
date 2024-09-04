
import { useState, useEffect } from "react"  
import { reqBuscarMarvel, reqMarvel } from "../service/characters"
  

export const useCharacters = () => {
    const [characters, setcharacters] = useState()
    const [nameHero, setnameHero] = useState("")

    useEffect(() => {
        reqMarvel().then((data)=>{
        setcharacters(data.results)
        })
    }, [])

    const formatoImg =(char) => {
        const img = char.thumbnail
        const url_path = `${img.path}.${img.extension}`
        return url_path
    }
    
    const handleMarvel = (e,nombre)=>{
        e.preventDefault()
        reqBuscarMarvel() &&
            reqBuscarMarvel(nombre).then((nombre)=>{
             setcharacters(nombre)
            })
        setnameHero(nombre)
    }
  
    return {
        characters,
        formatoImg,
        handleMarvel
    
  }
}
