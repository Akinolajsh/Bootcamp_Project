import React from 'react'
import styled from 'styled-components'
import img from "../../assets/capenter.jpg"

const DashBoard = () => {
  return (
    <div>
        <Container>
            <Main>
<FormHolder>
    <ImageDiv><Image src={img}/></ImageDiv>
    <label htmlFor="id" style={{padding:"10px 20px",background:"#47CF73",color:"white",cursor:"pointer"}}>Upload image</label> <input type="file" id="id" style={{display:"none"}}/>

<Input placeholder='Business name'/>

<InputPrice placeholder='Business price'/>
<Description>

</Description >
<label htmlFor="id" style={{padding:"10px 20px",background:"#47CF73",color:"white", cursor:"pointer"}}>Upload business</label> <input type="file" id="id" style={{display:"none"}}/>
</FormHolder>
            </Main>
        </Container>
    </div>
  )
}

export default DashBoard

const Description=styled.textarea`
resize: none;
width: 300px;
height: 100px;
border-radius: 5px;
outline: none;
`
const InputPrice=styled.input`
width: 300px;
height: 30px;
border-radius: 5px;
outline: none;
`
const Input=styled.input`
width: 300px;
height: 30px;
border-radius: 5px;
/* border: none; */
outline: none;
`
const FormHolder=styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 50%;
height: 95%;
`
const Image1=styled.img`
height: 100%;
width: 100%;
`
const ImageHolder=styled.div`
width: 50%;
height: 100%;
object-fit: cover;
`
const ImageDiv=styled.div`
height: 150px;
width: 300px;
/* background-color: red; */
`
const Image=styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
const Main=styled.div`
width: 450px;
/* background-color: yellow; */
height: 550px;
display: flex;
justify-content: center;
border-radius: 10px;
align-items: center;
box-shadow: -1px 43px 78px 12px rgba(222,208,208,0.75);
-webkit-box-shadow: -1px 43px 78px 12px rgba(222,208,208,0.75);
-moz-box-shadow: -1px 43px 78px 12px rgba(222,208,208,0.75);
`
const Container=styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`

