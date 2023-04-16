import styled from 'styled-components'

export const Background = styled.div`
    width:100%;
    height:100vh;
    text-align: center;
    background: radial-gradient(circle at top left,transparent 9%, #fe1717 10% ,#fe1717 15% , transparent 16%) , radial-gradient(circle at bottom left,transparent 9%, #fe1717 10% ,#fe1717 15% , transparent 16%), radial-gradient(circle at top right ,transparent 9%, #fe1717 10% ,#fe1717 15% , transparent 16%) , radial-gradient(circle at bottom right,transparent 9%, #fe1717 10% ,#fe1717 15% , transparent 16%),radial-gradient(circle, transparent 25%, #ffffff  26%),linear-gradient(45deg, transparent 46%, #fe1717 47%, #fe1717 52%, transparent 53%), linear-gradient(135deg, transparent 46%, #fe1717 47%, #fe1717 52%, transparent 53%);
    background-size: 5em 5em;
    background-color: #ffffff;
    opacity: 0.6;
    position: absolute;
    /* display: flex; */
    /* justify-content: center; */
`

export const Container = styled.div`
    width: 300px;
    height: 450px;
    margin: auto auto;
    border-radius: 15px;
    background-color: #7ab1bb;    
    /* box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px; */
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 13px 12px,rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 20%) 3px 5px 3px -2px;
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    width:80%;
    height: 30%;
    padding: 6%;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: scale-down;
`

export const GetStart = styled.div`
    width: 60%;
    height: 50px;
    border-radius: 15px;
    background-color: #a86060;
    margin: 1rem auto 1rem auto;
    display: flex;
    justify-content: center;
`

export const GetStartText = styled.p`
    color: #02243a;
    font-weight: 600;
    margin: auto;
`

export const Form = styled.form`
    width:100%;
    height: 60%;
    display: flex;
    flex-direction: column;
`

export const InputContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    padding: 4% 6% 4% 4%;

`
export const Label = styled.label`
    font-weight: 600;
    color: #fe1717;
    width: 100%;
`

export const Input = styled.input`
    width: 98%;
    border-radius: 5px;
    border: none;
    height: 1.5rem;
    background-color: #facccc;
    &:focus{
        outline: none;
    }
`

export const JoinButton = styled.button`
    width: 40%;
    height: 30px;
    border-radius: 5px;
    border:none;
    background-color: #a86060;
    color: #02243a;
    font-weight: 600;
    align-self: flex-end;
    cursor: pointer;
`