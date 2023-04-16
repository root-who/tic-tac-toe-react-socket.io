import React from 'react'
import { Circle, Container,  RiskMarkerDiagonal,  RiskMarkerHorizontal, RiskMarkerVertical, SpaceCenter, SpaceLeftBottom, SpaceLeftMid, SpaceLeftTop, SpaceMidBottom, SpaceMidTop, SpaceRightBottom, SpaceRightMid, SpaceRightTop, X } from "./TicTacToeStyled";
import { Background } from "./EntryRoomStyled";

export default function TicTacToeTable({game, TicTacToeGame, handleGame}) {
  return (
    <Background>
            <Container>
                {
                game.hasFinish  ?  game.position === "horizontal" ?
                <RiskMarkerHorizontal position={game.marker}/> 
                :
                game.position === "vertical" ?
                <RiskMarkerVertical position={game.marker}/>
                : 
                <RiskMarkerDiagonal position={game.marker}/>
                :
                <></>
                }                           
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
  )
}
