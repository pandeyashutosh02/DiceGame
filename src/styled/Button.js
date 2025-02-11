import styled from "styled-components";

export const Button = styled.button`
color: white;
padding: 10px 18px;
background: #000000;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
border-color: 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;
&:hover {
    background-color:white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
}
`;

export const OutlineButton = styled(Button)`
color: white;
padding: 10px 18px;
background: #000000;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
border-color: 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;
&:hover {
    background-color:white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
}
`;