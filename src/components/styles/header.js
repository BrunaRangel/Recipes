import styled from "styled-components";

export const Container = styled.section`
width:100%;
height:100vh;
display:flex;
align-items: center;
flex-direction:column;
background-image: url(${props => props.back});
background-size: cover;
background-position-y: -39rem;
`

export const BoxMenu = styled.div`
width:95%;
height:18vh;
display:flex;
justify-content: space-between;
align-items: center;
`

export const BoxLogo = styled.div`
width:10%;
height:100%;
display:flex;
justify-content: space-between;
align-items: center;
`

export const Logo = styled.img`
height:3rem;
`

export const BoxButtons = styled.div`
width:40%;
height:100%;
display:flex;
justify-content: space-between;
align-items: center;
`

export const Btn = styled.button`
width:9rem;
height:3rem;
font-size:1.5rem;
border:none;
color:#373737;
background-color:transparent;
&:hover{
    border: 5px solid #373737;
}
`
export const BoxTitle = styled.div`
width:100%;
height:82vh;
display:flex;
justify-content: center;
align-items: center;
}
`

export const Title = styled.h1`
font-size:8.75rem;
color:#373737;
margin-bottom:16rem;
height:auto;
}
`