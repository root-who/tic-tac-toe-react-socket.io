import React from "react";
import { Container, MarkerContainer, PlayerName, PlayerSide, PlayerWins, ScoreTitle, WinsText } from "./styled_components/ScoreGameStyled"
import { Circle, X } from "./styled_components/TicTacToeTableStyled";

const Score = ({opponent, user}) =>{
    return( 
        <Container>
            <ScoreTitle>Score Game</ScoreTitle>
            <PlayerSide>
                <PlayerName>{user}</PlayerName>
                <MarkerContainer>
                    {opponent?.marker === "x" ?<Circle show/> : <X show/>}
                    
                </MarkerContainer>
                <WinsText>Wins</WinsText>
                <PlayerWins>2</PlayerWins>
            </PlayerSide>
            <PlayerSide>
                <PlayerName>{opponent?.userName}</PlayerName>
                <MarkerContainer>
                    {opponent?.marker === "x" ? <X show/> : <Circle show/>}
                </MarkerContainer>
                <WinsText>Wins</WinsText>
                <PlayerWins>3</PlayerWins>
            </PlayerSide>
        </Container>
    )
}

export default Score