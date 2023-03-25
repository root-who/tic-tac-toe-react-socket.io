import React, { useEffect, useState } from "react";
import { Background } from "./EntryRoomStyled";
import { Circle, Container, SpaceCenter, SpaceLeftBottom, SpaceLeftMid, SpaceLeftTop, SpaceMidBottom, SpaceMidTop, SpaceRightBottom, SpaceRightMid, SpaceRightTop, X } from "./TicTacToeStyled";
import { useLocation } from "react-router-dom";

const TicTacToe = ({socket}) => {

    const location = useLocation();
    const data = location.state;
    const [player, setPlayer] = useState(data.userName)
    const [myMove, setMyMove] = useState(false)
    const [marker, setMarker] = useState("x")
    

    const [TicTacToeGame, setTicTacToeGame]= useState([
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
            NewTicTacToeGame[row][column] = marker
            setTicTacToeGame(NewTicTacToeGame)
        }
    }

    useEffect(()=>{
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

    },[TicTacToeGame, data, socket, myMove])

    return (
        <>
        <Background>
            <Container>
                <SpaceLeftTop 
                    onClick={(e)=>{
                        if(!TicTacToeGame[0][0]) handleGame(0,0)
                    }
                }>
                    {   
                        TicTacToeGame[0][0]
                        ?
                        TicTacToeGame[0][0] === "circle" ?  <Circle show="true"/> : <X show="true"/>
                        : 
                        <></>
                    }

                </SpaceLeftTop>
                <SpaceMidTop 
                    onClick={()=>{
                        if(!TicTacToeGame[0][1]) handleGame(0,1)
                    }
                }>
                    {
                        TicTacToeGame[0][1]
                        ?
                        TicTacToeGame[0][1] === "circle" ?  <Circle show="true"/> : <X show="true"/>
                        : 
                        <></>
                    }
                </SpaceMidTop>
                <SpaceRightTop 
                    onClick={()=>{
                        if(!TicTacToeGame[0][2]) handleGame(0,2)
                    }
                }>
                    {
                        TicTacToeGame[0][2]
                        ?
                        TicTacToeGame[0][2] === "circle" ?  <Circle show="true"/> : <X show="true"/>
                        : 
                        <></>
                    }
                </SpaceRightTop>
                <SpaceLeftMid 
                    onClick={()=>{
                        if(!TicTacToeGame[1][0]) handleGame(1,0)
                    }
                }>
                    {
                        TicTacToeGame[1][0]
                        ?
                        TicTacToeGame[1][0] === "circle" ?  <Circle show="true"/> : <X show="true"/>
                        : 
                        <></>
                    }    
                </SpaceLeftMid>
                <SpaceCenter 
                    onClick={()=>{
                       if(!TicTacToeGame[1][1]) handleGame(1,1)
                    }
                }>
                    {
                        TicTacToeGame[1][1]
                        ?
                        TicTacToeGame[1][1] === "circle" ?  <Circle show="true"/> : <X show="true"/>
                        : 
                        <></>
                    }    
                </SpaceCenter>
                <SpaceRightMid 
                    onClick={()=>{
                        if(!TicTacToeGame[1][2]) handleGame(1,2)
                    }
                }>
                    {
                        TicTacToeGame[1][2]
                        ?
                        TicTacToeGame[1][2] === "circle" ?  <Circle show="true"/> : <X show="true"/>
                        : 
                        <></>
                    } 
                </SpaceRightMid>
                <SpaceLeftBottom 
                    onClick={()=>{
                        if(!TicTacToeGame[2][0]) handleGame(2,0)
                    }
                }>
                    {
                        TicTacToeGame[2][0]
                        ?
                        TicTacToeGame[2][0] === "circle" ?  <Circle show="true"/> : <X show="true"/>
                        : 
                        <></>
                    } 
                </SpaceLeftBottom>
                <SpaceMidBottom 
                    onClick={()=>{
                        if(!TicTacToeGame[2][1]) handleGame(2,1)
                    }
                }>
                    {
                        TicTacToeGame[2][1] 
                        ?
                        TicTacToeGame[2][1] === "circle" ?  <Circle show="true"/> : <X show="true"/>
                        : 
                        <></>
                    } 
                </SpaceMidBottom>
                <SpaceRightBottom 
                    onClick={()=>{
                        if(!TicTacToeGame[2][2]) handleGame(2,2)
                    }
                }>
                    {
                        TicTacToeGame[2][2] 
                        ?
                        TicTacToeGame[2][2] === "circle" ?  <Circle show="true"/> : <X show="true"/>
                        : 
                        <></>
                    } 
                </SpaceRightBottom>
            </Container>
        </Background>
        </>
    );
}
export default TicTacToe;