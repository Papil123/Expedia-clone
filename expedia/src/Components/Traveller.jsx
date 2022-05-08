import React,{useState} from 'react'
import {TravellerBut,TravellerDiv,GridDiv1,ExportButton,AddAnotherButoon,DoneButoon} from '../component.styled'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Traveller = () => {
    const [isAuth,setAuth]=useState(false);
    const [ischildSelect,setchildSelect]=useState(false);
    const [isAnother,setAnother]=useState(false);
    const [isAudlts,setAudults]=useState(1);
    const [isChildren,setChildren]=useState(0);
    const [age, setAge] = React.useState('');
   
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
      setChildren(isChildren+1)
    
    };
  
  return (
      
<>
{isAuth?
<>
<div style={{border:"1px solid green" ,width:"25%",height:"50px",borderRadius:"5px",marginRight:"-350px",marginLeft:"10px"}} type="button">

<svg style={{marginLeft:"-195px",marginRight:"1px",marginTop:"15px", height: '25px',width:"15%",}}><path fill-rule="evenodd" d="M16 8a4 4 0 11-8 0 4 4 0 018 0zM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4v-2z" clip-rule="evenodd"></path></svg>
 <div style={{marginTop:"-40px",width:"70px",marginLeft:"120px",color:"grey",marginBottom:"1px"}}>
 <label>Travellers</label>
 </div>
 
    <button onClick={()=>{setAuth(!isAuth)}} style={{border:"none",backgroundColor:"white",textAlign:"center",fontSize:"19px"}} >
      1 room, {(isAudlts+isChildren)<1?1:isAudlts+isChildren} traveller
  </button> 
 </div>

  <TravellerDiv>
      <div style={{marginTop:"-35px",marginLeft:"10px"}}>
        <div style={{marginTop:"15px",marginLeft:"10px"}}>
            <h3>Travellers</h3>
            </div>
            <div style={{marginTop:"15px",marginLeft:"10px"}}>
            <h4>Room 1</h4>
            </div>
      </div>
           
            
            <GridDiv1 >
                <div style={{marginTop:"15px",marginLeft:"17px"}}>Adults</div>
                <div style={{display:"flex",marginLeft:"0px"}}>
                    <ExportButton onClick={()=>{setAudults(isAudlts-1)}}>-</ExportButton>
                    {isAudlts<1?<p style={{marginLeft:"10px",marginRight:"10px"}}> {1} </p>: <p style={{marginLeft:"10px",marginRight:"10px"}}> {isAudlts} </p>} 
                    <ExportButton onClick={()=>{setAudults(isAudlts+1)}}>+</ExportButton>
                </div>
            </GridDiv1>
              {ischildSelect?
                
                <>
              
                <GridDiv1  style={{marginTop:"15px",marginLeft:"10px"}}>
                <div>  Children
                <p style={{marginTop:"5px",fontSize:"13px",marginLeft:"-10px"}}>Ages 0 to 17</p>
                </div>
                
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <ExportButton onClick={()=>{setChildren(isChildren-1)}}>-</ExportButton>
                   {isChildren<0?<p style={{marginLeft:"10px",marginRight:"10px"}}> {0} </p>: <p style={{marginLeft:"10px",marginRight:"10px"}}> {isChildren} </p>} 
                   
                    <ExportButton onClick={()=>{setChildren(isChildren+1)}}>+</ExportButton>
                </div>
            </GridDiv1>

       <div>
      <FormControl sx={{ marginLeft:"10px",width:"40%",height:"30px",marginTop:"15px"}}>
        <InputLabel id="demo-simple-select-autowidth-label">Child 1 age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Child 1 age">
          <MenuItem value="">
            <em>Under 1</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
         
        </Select>
      </FormControl>
    </div>
            </>

      : 
                <>
            <GridDiv1  style={{marginTop:"15px"}}>
                <div>Children
                <p style={{marginTop:"5px",fontSize:"13px"}}>Ages 0 to 17</p>
                </div>
                
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <ExportButton onClick={()=>{setChildren(isChildren-1)}}>-</ExportButton>
                   {isChildren<0?<p style={{marginLeft:"0px",marginRight:"0px"}}> {0} </p>: <p style={{marginLeft:"10px",marginRight:"10px"}}> {isChildren} </p>} 
                   
                    <ExportButton onClick={()=>{setchildSelect(!ischildSelect)}}>+</ExportButton>
                </div>
               </GridDiv1>

               {
                  isAnother ? <>
                  
                  <div style={{marginTop:"-5px"}}>
                    
                    <div>
                    <h4>Room 2</h4>
                    </div>
                 </div>
           
            
            <GridDiv1 >
                <div>Adults</div>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    <ExportButton onClick={()=>{setAudults(isAudlts-1)}}>-</ExportButton>
                    {isAudlts<1?<p style={{marginLeft:"10px",marginRight:"10px"}}> {1} </p>: <p style={{marginLeft:"10px",marginRight:"10px"}}> {isAudlts} </p>} 
                    <ExportButton onClick={()=>{setAudults(isAudlts+1)}}>+</ExportButton>
                </div>
            </GridDiv1>
                  
            {ischildSelect?
                
                <>
              
                <GridDiv1  style={{marginTop:"25px" }}>
                <div>Children
                <p style={{marginTop:"5px",fontSize:"13px"}}>Ages 0 to 17</p>
                </div>
                
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <ExportButton onClick={()=>{setChildren(isChildren-1)}}>-</ExportButton>
                   {isChildren<0?<p style={{marginLeft:"10px",marginRight:"10px"}}> {0} </p>: <p style={{marginLeft:"10px",marginRight:"10px"}}> {isChildren} </p>} 
                   
                    <ExportButton onClick={()=>{setChildren(isChildren+1)}}>+</ExportButton>
                </div>
            </GridDiv1>

       <div>
      <FormControl sx={{ marginLeft:"10px",width:"40%",height:"30px"}}>
        <InputLabel id="demo-simple-select-autowidth-label">Child 1 age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Child 1 age">
          <MenuItem value="">
            <em>Under 1</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
         
        </Select>
      </FormControl>
      
    </div>
            </>

      : 
                <>
            <GridDiv1  style={{marginTop:"55px"}}>
                <div>Children
                <p style={{marginTop:"5px",fontSize:"13px"}}>Ages 0 to 17</p>
                </div>
                
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <ExportButton onClick={()=>{setChildren(isChildren-1)}}>-</ExportButton>
                   {isChildren<0?<p style={{marginLeft:"10px",marginRight:"10px"}}> {0} </p>: <p style={{marginLeft:"10px",marginRight:"10px"}}> {isChildren} </p>} 
                   
                    <ExportButton onClick={()=>{setchildSelect(!ischildSelect,!isAnother)}}>+</ExportButton>
                </div>
                
               </GridDiv1>
               <AddAnotherButoon onClick={()=>setAnother(!isAnother)}>Remove room</AddAnotherButoon>
               <AddAnotherButoon onClick={()=>setAnother(!isAnother)}>Add another room</AddAnotherButoon>
                    <div>
                      <DoneButoon onClick={()=>setAuth(!isAuth)} >Done</DoneButoon>
                    </div>
               </>
            }
                  </>
                  :
                  <>
              
                    </>
               }
               </>
            }
            
            
                <AddAnotherButoon onClick={()=>setAnother(!isAnother)}>Add another room</AddAnotherButoon>
                   
          
           <div>
           <DoneButoon onClick={()=>setAuth(!isAuth)} >Done</DoneButoon>
           </div>
    
     </TravellerDiv>
    

     </>

:


<div style={{border:"1px solid grey" ,width:"25%",height:"50px",borderRadius:"5px",margin:"auto"}} type="button">

<svg style={{marginLeft:"-195px",marginRight:"1px",marginTop:"15px", height: '25px',width:"15%",}}><path fill-rule="evenodd" d="M16 8a4 4 0 11-8 0 4 4 0 018 0zM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4v-2z" clip-rule="evenodd"></path></svg>
 <div style={{marginTop:"-40px",width:"70px",marginLeft:"120px",color:"grey",marginBottom:"1px"}}>
 <label>Travellers</label>
 </div>
 
    <button onClick={()=>{setAuth(!isAuth)}} style={{border:"none",backgroundColor:"white",textAlign:"center",fontSize:"19px"}} >
      1 room, {(isAudlts+isChildren)<1?1:isAudlts+isChildren} traveller
  </button> 
 </div>

 }  
    </>
  )
  
}

export default Traveller
