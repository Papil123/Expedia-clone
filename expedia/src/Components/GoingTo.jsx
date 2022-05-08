import React from 'react'
import {GoingBut,InputDiv,InputGoing} from '../component.styled'


const GoingTo = () => {

    const [isGoing,setGoing]=React.useState(false);
   

   
  return (
      <>
    {isGoing?<> 
        
        <InputDiv>
        <InputGoing placeholder="Where are you going?"/>
        <hr></hr>
      
    </InputDiv></>: <> <GoingBut onClick={()=>setGoing(!isGoing)}>
    <svg style={{height: '25px',width:"15%",}}><path  fill-rule="evenodd" d="M5 9a7 7 0 1114 0c0 5.25-7 13-7 13S5 14.25 5 9zm4.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" clip-rule="evenodd"></path></svg>
       
        
    Going To</GoingBut></>}
    <svg data-testid="LocationOnIcon"></svg>
    
    </>
    )

   
  
}

export default GoingTo



