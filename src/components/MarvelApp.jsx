import { useCharacters } from "../hooks/useCharacters"
import { useState} from "react"  
import { Search } from "./Search"
import { Pages } from "./Pages"

export const MarvelApp = () =>{
    return(
        <>
            <Search/>
            <Pages/>
        </>
    )
}