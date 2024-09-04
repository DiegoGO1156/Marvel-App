import { useCharacters } from "../hooks/useCharacters"

export const Pages = () => {
    const  {characters, formatoImg} = useCharacters()
  return (
    <>
        <div className="d-flex flex-row row row-cols-5">
                { 
                    characters &&
                        characters.map((char)=>(
                                <div key={char.id}>
                                    <div>
                                        <li>{char.name}</li>
                                        <img src={formatoImg(char)} alt="super Heroe Img" style={{width: '8rem'}} />
                                    </div>
                                </div>
                        ))
                }
            </div>
    </>
  )
}
