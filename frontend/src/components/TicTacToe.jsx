import React, { useEffect, useState } from "react";
import { Background } from "./EntryRoomStyled";
import { Circle, Container, SpaceCenter, SpaceLeftBottom, SpaceLeftMid, SpaceLeftTop, SpaceMidBottom, SpaceMidTop, SpaceRightBottom, SpaceRightMid, SpaceRightTop, X } from "./TicTacToeStyled";


const TicTacToe = ({players}) => {

    // eslint-disable-next-line
    const [playerTurn, setPlayerTurn] = useState([
        {
            "player": "Pedro",
            "turn":"on",
            "points": 3        
        },
        {
            "player": "João",
            "turn":"off",
            "points": 2 
        }
    ])

    const [TicTacToeGame, setTicTacToeGame]= useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ])
    
    useEffect(()=>{
        console.log(playerTurn)
    },[TicTacToeGame, playerTurn])

    function handleGame (row, column){
        let TicTacToeMove = TicTacToeGame
        if(playerTurn[0].turn === "on"){
            TicTacToeMove[row][column] = "x"
            setPlayerTurn(prev=>{
                return [
                {
                    "player": prev[0].player,
                    "turn":"off",
                    "points": prev[0].points        
                },
                {
                    "player":  prev[1].player,
                    "turn":"on",
                    "points": prev[1].points 
                }
            ]
            })
        }else{
            TicTacToeMove[row][column] = "circle"
            setPlayerTurn([
                {
                    "player1": "",
                    "turn":"on",
                    "points": 0        
                },
                {
                    "player2": "",
                    "turn":"off",
                    "points": 0 
                }
            ])
        }
        setTicTacToeGame(prev=>{
            return TicTacToeMove
        })
    }


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