export const saveGameTable = (game)=>{
    localStorage.setItem("game_session", JSON.stringify(game))
}

export const getGameTable = ()=>{
    return JSON.parse(localStorage.getItem("game_session"))
}

export const saveGameInfo = (gameInfo)=>{
    localStorage.setItem("game_connection", JSON.stringify(gameInfo))
}

export const editGameInfo = (gameInfos)=>{
    let newGameInfo = getGameInfo()
    const properties = Object.keys(gameInfos)
    properties.forEach((value, key)=>{
        newGameInfo[value] = gameInfos[value]
    })
    localStorage.setItem("game_connection", JSON.stringify(newGameInfo))
}

export const getGameInfo = ()=>{
    return JSON.parse(localStorage.getItem("game_connection"))
}

