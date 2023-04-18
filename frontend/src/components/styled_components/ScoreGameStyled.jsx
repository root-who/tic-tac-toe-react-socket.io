import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: start;
    width: 300px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 13px 12px,rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 20%) 3px 5px 3px -2px;
    border-radius: 15px;
`

export const ScoreTitle = styled.h1`
    width: 100%;
    text-align: center;
    height: fit-content;
`

export const PlayerSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

export const PlayerName = styled.h2`
    text-align: center;
`

export const MarkerContainer = styled.div`
    display: flex;
    margin: auto auto;
    width: 50%;
`

export const WinsText = styled.h2`
    width: 100%;
    text-align: center;
`

export const PlayerWins = styled.h2`
    width: 100%;
    text-align: center;
`

 