import styled from "styled-components";

import {AiOutlinePlus} from 'react-icons/ai'
import {FiCircle} from 'react-icons/fi'

export const Container = styled.div`
    width: 500px;
    height: 500px;
    padding: 2rem 2rem 3.5rem 2rem;
    margin: auto auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 13px 12px,rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 20%) 3px 5px 3px -2px;
`


export const X = styled(AiOutlinePlus)`
    width: 100%;
    height: 100%;
    color: #fe1717;
    transform: rotate(45deg);
    position: relative;
    display: ${props=>props.show? "inline": "none"}
`

export const Circle = styled(FiCircle)`
    width: 80%;
    height: 80%;
    color: #fe1717;
    margin: auto;
    position: relative;
    display: ${props=>props.show? "inline": "none"}
`

export const RiskMarkerHorizontal = styled.div`
        position: relative;
        width: 500px;
        top: ${props=>props.position === "top" ? "calc(100%/6 + 9px)": props.position === "mid" ? "calc(100%/2 + 9px)": "calc(100%/1.20 + 9px)"};
        border: 3px solid #fe1717;
        margin: auto;
        z-index: 2;
`

export const RiskMarkerVertical = styled.div`
        position: relative;
        width: 500px;
        transform: rotate(90deg);
        top: calc(50% + 9px);
        left: ${props=>props.position === "left" ? "calc(-33% + 9px)" : props.position ==="right" ? "calc(30% + 9px)": ""};
        border: 3px solid #fe1717;
        z-index: 2;
`

export const RiskMarkerDiagonal = styled.div`
        position: relative;
        width: 500px;
        transform: ${props => props.position === "first" ? "rotate(47.5deg)" : "rotate(132.5deg)"};
        top: calc(50% + 9px);
        border: 3px solid #fe1717;
        z-index: 2;
`

export const Space = styled.div`
    border:none;
    cursor:pointer;
    /* position: absolute; */
    width: 30%;
    height: 33%;
    display: flex;
    flex-direction: column;
`

export const SpaceLeftTop = styled(Space)`
    
    border-right: 3px solid #7ab1bb;
    border-bottom: 3px solid #7ab1bb;
    margin-top: 3px;
    margin-left: 3px;
    /* border: 1px solid #7ab1bb; */
`
export const SpaceLeftMid = styled(Space)`
    width: 30%;
    height: 33%;
    border-top: 3px solid #7ab1bb;
    border-right: 3px solid #7ab1bb;
    border-bottom: 3px solid #7ab1bb;
    margin-left: 3px;

`
export const SpaceLeftBottom = styled(Space)`
    width: 30%;
    height: 33%;
    border-right: 3px solid #7ab1bb;
    border-top: 3px solid #7ab1bb;
    margin-bottom: 3px;
    margin-left: 3px;
`

export const SpaceMidTop = styled(Space)`
    width: 30%;
    height: 33%;
    border-left: 3px solid #7ab1bb;
    border-bottom: 3px solid #7ab1bb;
    border-right: 3px solid #7ab1bb;
    margin-top: 3px;
`

export const SpaceCenter = styled(Space)`

    width: 30%;
    height: 33%;
    border: 3px solid #7ab1bb;
`

export const SpaceMidBottom = styled(Space)`
    width: 30%;
    height: 33%;
    border-right: 3px solid #7ab1bb;
    border-left: 3px solid #7ab1bb;
    border-top: 3px solid #7ab1bb;
    margin-bottom: 3px;
`
export const SpaceRightTop = styled(Space)`
    width: 30%;
    height: 33%;
    border-left: 3px solid #7ab1bb;
    border-bottom: 3px solid #7ab1bb;
    margin-top: 3px;
    margin-right: 3px;
`
export const SpaceRightMid = styled(Space)`
    width: 30%;
    height: 33%;
    border-top: 3px solid #7ab1bb;
    border-left: 3px solid #7ab1bb;
    border-bottom: 3px solid #7ab1bb;
    margin-right: 3px;
`

export const SpaceRightBottom = styled(Space)`
    width: 30%;
    height: 33%;
    border-left: 3px solid #7ab1bb;
    border-top: 3px solid #7ab1bb;
    margin-right: 3px;
    margin-bottom: 3px;
`