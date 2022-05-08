import React from 'react'
import {GoingBut,InputDiv,InputGoing} from '../component.styled'


const GoingTo = () => {

    const [isGoing,setGoing]=React.useState(false);
    const [task,setTask]=React.useState("Going To");

   const handleChange=(n)=>{
        setGoing(false);
        if(n==1) return setTask("Indore, Madhya Pradesh, India") 
        if(n==2) return setTask("Goa Highridge Residency")
        if(n==3) return setTask("Delhi Aero City Station")
        if(n==4) return setTask("Mumbai (BOM - Chhatrapati Shivaji Intl.)")
       
   }
  return (
      <>
    {isGoing?<> 
        
        <InputDiv>
        <InputGoing placeholder="Where are you going?"/>
        <hr></hr>
        <div style={{border: 'none',backgroundColor:"white",fontSize:"28px",marginTop:"15px"}}></div>
            <button onClick={()=>handleChange(1)}  style={{border: 'none',backgroundColor:"white",fontSize:"18px",marginTop:"15px"}}>Indore, Madhya Pradesh, India</button><br></br>
            <button onClick={()=>handleChange(2) } style={{border: 'none',backgroundColor:"white",fontSize:"18px",marginTop:"15px"}}>Goa Highridge Residency</button><br></br>
            <button onClick={()=>handleChange(3)} style={{border: 'none',backgroundColor:"white",fontSize:"18px",marginTop:"15px"}}>Delhi Aero City Station</button><br></br>
            <button onClick={()=>handleChange(4)} style={{border: 'none',backgroundColor:"white",fontSize:"18px",marginTop:"15px"}}>Mumbai (BOM - Chhatrapati Shivaji Intl.)</button><br></br>
    </InputDiv>
    
    </>

    :
     <> <GoingBut onClick={()=>setGoing(!isGoing)} style={{}}>
    <svg style={{height: '25px',width:"15%",}}><path  fill-rule="evenodd" d="M5 9a7 7 0 1114 0c0 5.25-7 13-7 13S5 14.25 5 9zm4.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" clip-rule="evenodd"></path></svg>
       
        
    {task}</GoingBut></>}
    <svg data-testid="LocationOnIcon"></svg>
   
    </>
    )

   
  
}

export default GoingTo



