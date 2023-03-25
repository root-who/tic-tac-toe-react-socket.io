import React, { useEffect, useState } from "react";
import { Background, Container, Form,  GetStart, GetStartText, Image, ImageContainer, Input, InputContainer, JoinButton, Label } from "./EntryRoomStyled";
import IMAGE from '../assets/EntryRoomImage.png'
import { useNavigate } from "react-router-dom";


const EntryRoom = ({socket}) => {
    const [userName, setUserName] = useState("");
    const [room, setRoom] = useState("");
    const [marker, setMaker] = useState("")
    const navigate = useNavigate()

    const joinRoom = ()=>{
        if(userName !== "" && room !== ""){
            socket.emit("join_room", {room: room, player: userName})
            navigate('/room', {
                    state: { 
                        userName: userName,
                        room: room,
                    },
            });
        }
    }

    useEffect(()=>{
        
    },[])


    return (
        <>
            <Background>
                <Container>
                    <ImageContainer>
                        <Image src={IMAGE}/>
                    </ImageContainer>
                    <GetStart>
                        <GetStartText>
                            GET STARTED
                        </GetStartText>
                    </GetStart>
                    <Form>
                        <InputContainer>
                            <Label>Your name</Label>
                            <Input
                                defaultValue={userName}
                                onChange={(e)=>{setUserName(e.target.value)}}
                            />
                        </InputContainer>
                        <InputContainer>
                            <Label>Code room</Label>
                            <Input
                                defaultValue={room}
                                onChange={(e)=>{setRoom(e.target.value)}}
                            />
                        </InputContainer>
                        <InputContainer>
                            <JoinButton 
                                onClick={
                                    (e)=>{
                                        e.preventDefault()
                                        joinRoom()
                                    }
                                }
                                
                            >
                                Join
                            </JoinButton>
                        </InputContainer>
                    </Form>
                </Container>
            </Background>
        </>
    );
}
 
export default EntryRoom;