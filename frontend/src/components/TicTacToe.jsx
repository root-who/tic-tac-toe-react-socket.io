import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TicTacToeTable from "./TicTacToeTable";

const TicTacToe = ({socket}) => {

    const location = useLocation();
    const data = location.state;
    const [myMove, setMyMove] = useState(false)
    const [marker, setMarker] = useState("x")
    const [game, setGame] = useState({
        hasFinish: false,
        position: "",
        marker: ""
    })

    const [TicTacToeGame, setTicTacToeGame]= useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ])
    
    async function handleGame (row, column){
        let NewTicTacToeGame = TicTacToeGame
        console.log(myMove)
        
        if(myMove){
            const socketMessage = {
                room: data.room,
                player: data.userName,
                space: [row, column],
                myMove: myMove,
                marker: marker
            }
            await socket.emit("make_move", socketMessage)
            setMyMove(false)
            NewTicTacToeGame[row][column] = marker
            setTicTacToeGame(NewTicTacToeGame)
        }
    }

    useEffect(()=>{
        const setWinHorizontalPosition = (positionNumber) => {
            return positionNumber === 0 ? "top" : positionNumber === 1 ? "mid" : "bottom"
        }

        const setWinVerticalPosition = (positionNumber) => {
            return positionNumber === 0 ? "left" : positionNumber === 1 ? "center" : "right"
        }

        const checkWin = () =>{
            let win = false
            TicTacToeGame.forEach((row, keyRow)=>{
                let horizontal = 0;
                row.forEach((column, keyColumn)=>{
                    if(keyRow === 0 && column !== ""){
                        if(
                            column === TicTacToeGame[keyRow+1][keyColumn] 
                            && 
                            column === TicTacToeGame[keyRow+2][keyColumn]
                        ){
                            win = true
                                                       
                            setGame({
                                hasFinish: true,
                                position: "vertical",
                                marker: setWinVerticalPosition(keyColumn)
                            })
                        }
                        if(
                            column === TicTacToeGame[keyRow+1][keyColumn+1] 
                            && 
                            column === TicTacToeGame[keyRow+2][keyColumn+2]
                        ){
                            win = true
                            setGame({
                                hasFinish: true,
                                position: "diagonal",
                                marker: "first"
                            })
                        }
                        if(keyColumn === 2){
                            if(
                                column === TicTacToeGame[keyRow+1][keyColumn-1] 
                                && 
                                column === TicTacToeGame[keyRow+2][keyColumn-2]
                            ){
                                win = true
                                setGame({
                                    hasFinish: true,
                                    position: "diagonal",
                                    marker: "second"
                                })
                            }
                        }
                    }
                    if(column !== ""){
                        if(keyColumn === 0){
                            horizontal += 1;
                        }
                        else if(column === TicTacToeGame[keyRow][keyColumn -1]){
                            horizontal += 1;
                        }
                    }
                })
                if(horizontal === 3){
                    win =  true
                    setGame({
                        hasFinish: true,
                        position: "horizontal",
                        marker: setWinHorizontalPosition(keyRow)
                    })
                }
            })
            return win
        } 

        const isGameOver = () =>{
            let over = true;
                TicTacToeGame.forEach((row)=>{
                    row.forEach((column)=>{
                        if(column === ""){
                            over = false;
                        }
                    })
                })
            return over
        }

        const restartGame = ()=>{
            setTimeout(()=>{
                setTicTacToeGame([
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""], 
                ])
                marker === "x" ? setMarker("circle") : setMarker("x")
                setGame({
                    hasFinish: false,
                    position: "",
                    marker: ""
                })
            }, 1500)
        }
        socket.on("receive_move", (data)=>{
            var NewTicTacToeGame = TicTacToeGame
            NewTicTacToeGame[data.space[0]][data.space[1]] = data.marker
            setTicTacToeGame(NewTicTacToeGame)
            setMyMove(data.myMove)
        })
        socket.on("define_marker", (data)=>{
            setMarker(data)
            setMyMove(true)
        })
        isGameOver() && restartGame() 
        checkWin() && restartGame() 

    },[TicTacToeGame, data, socket, myMove, marker])

    return (
        <>
        <TicTacToeTable game={game} TicTacToeGame={TicTacToeGame} handleGame={handleGame}/>
        </>
    );
}
export default TicTacToe;