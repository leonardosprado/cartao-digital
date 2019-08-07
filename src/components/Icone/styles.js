import styled from 'styled-components';

export const Container = styled.div`

    align-content:center;
    text-align:center;
    img{
        align-contents:center;
        width:50%;
        background: #fff;
        padding: 5px;
        margin: 10px;
        border-radius: 10px;
    }&:hover{
        font-weight:bold;
        text-shadow: 0 0 3px #000, 0 0 5px #000;        
    }

    a{
        text-decoration:none;
    }
`;

export const Text = styled.p`
    color: #fff;
    font-size:40%;
    text-align:center;
    text-decoration:none;
`;

