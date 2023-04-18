import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TicTacToeTable from "./TicTacToeTable";
import { Background } from "./styled_components/EntryRoomStyled";
import Score from "./ScoreGame";
import { Container } from "./styled_components/TicTacToeGameStyled";
import { editGameInfo, getGameInfo, getGameTable } from "../utils/storage";

const TicTacToe = ({socket}) => {

    const location = useLocation();
    const data = location.state;
    const [opponent, setOpponent] = useState(getGameInfo()?.opponent && {
        userName : getGameInfo().opponent,
        marker : getGameInfo().marker === "x" ? "circle" : "x"
    })
    const [myMove, setMyMove] = useState(getGameInfo()?.myMove ? getGameInfo().myMove : false)
    const [marker, setMarker] = useState(getGameInfo()?.marker ? getGameInfo().marker: "x")
    const [game, setGame] = useState({
        hasFinish: false,
        position: "",
        marker: ""
    })

    const [TicTacToeGame, setTicTacToeGame]= useState(getGameTable() ? getGameTable() :
    [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ])
   
    
    async function handleGame (row, column){
        let NewTicTacToeGame = TicTacToeGame
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
            editGameInfo({
               myMove: false
            })
            NewTicTacToeGame[row][column] = marker
            setTicTacToeGame(NewTicTacToeGame)
        }
    }

    useEffect(()=>{
        window.onload = function() {
            setTimeout(()=>{
                socket.emit("join_room", {room: data.room, player: data.userName})
            }, 2000)
        };
    

        
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
                editGameInfo({
                    marker : marker === "x" ? "x" : "circle"
                })
                setOpponent({
                    userName: opponent.userName,
                    marker: marker === "x" ? "x" : "circle"
                })
            }, 1500)
        }

        async function onGameStart(){
            await socket.emit("user_info", {
                room: data.room,
                player : data.userName,
                marker : "circle"
            })
        }

        socket.on("receive_move", (data)=>{
            var NewTicTacToeGame = TicTacToeGame
            NewTicTacToeGame[data.space[0]][data.space[1]] = data.marker
            setTicTacToeGame(NewTicTacToeGame)
            setMyMove(data.myMove)
            editGameInfo({
               myMove: data.myMove
            })
        })

        socket.on("define_marker", (data)=>{
            setMarker(data)
            setMyMove(true)
            onGameStart()
            editGameInfo({
               marker : data,
               myMove: true
            })
        })

        socket.on("opponent_info", (data)=>{
            setOpponent({
                userName: data.player,
                marker: data.marker
            })
            editGameInfo({
               opponent : data.player,
               marker : data.marker === "x" ? "circle" : "x",
            })
        })
        isGameOver() && restartGame() 
        checkWin() && restartGame() 

    },[TicTacToeGame, data, socket, myMove, marker, opponent])

    return (
        <>
        <Background>
            <Container>
                <TicTacToeTable game={game} TicTacToeGame={TicTacToeGame} handleGame={handleGame}/>
                <Score opponent={opponent} user={data.userName} />
            </Container>
        </Background>
        </>
    );
}
export default TicTacToe;