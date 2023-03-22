import React from "react";
import { Background, Container, Form,  GetStart, GetStartText, Image, ImageContainer, Input, InputContainer, JoinButton, Label } from "./EntryRoomStyled";
import IMAGE from '../assets/EntryRoomImage.png'
const EntryRoom = () => {
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
                            <Input/>
                        </InputContainer>
                        <InputContainer>
                            <Label>Code room</Label>
                            <Input/>
                        </InputContainer>
                        <InputContainer>
                            <JoinButton onClick={(e)=>{e.preventDefault()}}>
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