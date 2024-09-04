import CryptoJS from "crypto-js"

    const API_PUBLIC_KEY = "61bf7d8b8e2f4a5fbf8227ce045e8582"
    const API_PRIVATE_KEY = "f5b7581146481fe6d2cc285775b71d8f8653032d"

    //Funciona como Salt y es para mandar un dato de tiempo actual 
    const time_stamp = new Date().getTime()

    const hash = CryptoJS.MD5(time_stamp + API_PRIVATE_KEY + API_PUBLIC_KEY).toString()

    const api_url = `https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`

    
    export  const reqMarvel = async () => {
        const resp = await fetch(api_url)
        const {data} = await resp.json()
        console.log(data)
        return data
    }
    
    export const reqBuscarMarvel = async (nombre) =>{
        const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters/?nameStartsWith=${nombre}&&ts=${time_stamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
        const {data} = await resp.json()
        const pers = data.map(hero => ({
            id: hero.results.id,
            name: hero.results.name
        }))
        return pers
    }

    
