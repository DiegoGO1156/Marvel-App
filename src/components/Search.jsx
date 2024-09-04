import { useCharacters } from "../hooks/useCharacters"
import { useState} from "react"  
export const Search = () =>{
    const  {handleMarvel} = useCharacters()
    const [nameHero, setnameHero] = useState("")
    return(
        <>
             <div className="container">
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <form onSubmit={(e) => {handleMarvel(e, nameHero)}} className="d-flex">
                    <input type="text" className="form-control m-1 shadow bg-body-tertiary " onChange={(e) => {setnameHero(e.target.value)}} />
                    <input type="submit" value={"Buscar"} className="btn btn-outline-success"/>
                </form>
            </div>
            <br />
        </div>
        </>
    )
}