import React from 'react'
import {HGrideDiv,InerGridDiv,HGrideInnerDiv,CovidDiv} from '../component.styled'

const Fivecomponents = () => {
  return (
    <div>
      <HGrideDiv >
      <InerGridDiv height={'50px'} >
        <HGrideInnerDiv>
          <div style={{height:"100%"}}>

          <svg style={{marginTop:"5px",marginLeft:"5px"}}> <path fill-rule="evenodd" d="M5 9a7 7 0 1114 0c0 5.25-7 13-7 13S5 14.25 5 9zm4.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" clip-rule="evenodd"></path></svg>

          </div>
          <div style={{height:"100%"}}>
            <p style={{fontSize:"13px",marginTop:"-1px",marginBottom:"-19px"}}>Going to</p>
            <h5>Indore,India(IDR-Devi Ahilyabai Holker Intl.)</h5>
          </div>
        </HGrideInnerDiv>
      </InerGridDiv>
      <InerGridDiv height={'50px'} >
      <HGrideInnerDiv>
          <div style={{height:"100%",marginLeft:"-15px",marginRight:"10px"}}>

          <svg style={{marginTop:"5px",marginLeft:"5px"}}><path fill-rule="evenodd" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-1.99 2L3 19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 5v11H5V8h14zm-7 2H7v5h5v-5z" clip-rule="evenodd"></path></svg>

          </div>
          <div style={{height:"100%",marginLeft:"-15px"}}>
            <p style={{fontSize:"13px",marginTop:"-1px",marginBottom:"-19px"}}>Check-in</p>
            <h5>19 May</h5>
          </div>
        </HGrideInnerDiv>
      </InerGridDiv>
      <InerGridDiv height={'50px'}  >
      <HGrideInnerDiv>
          <div style={{height:"100%",marginLeft:"-15px",marginRight:"10px"}}>

          <svg style={{marginTop:"5px",marginLeft:"5px"}}><path fill-rule="evenodd" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-1.99 2L3 19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 5v11H5V8h14zm-7 2H7v5h5v-5z" clip-rule="evenodd"></path></svg>

          </div>
          <div style={{height:"100%",marginLeft:"-15px"}}>
            <p style={{fontSize:"13px",marginTop:"-1px",marginBottom:"-19px"}}>Check-out</p>
            <h5>20 May</h5>
          </div>
        </HGrideInnerDiv>
      </InerGridDiv>
      <InerGridDiv height={'50px'} >
      <HGrideInnerDiv>
          <div style={{height:"100%",marginLeft:"-15px",marginRight:"10px"}}>

          <svg style={{marginTop:"5px",marginLeft:"5px"}}><path fill-rule="evenodd" d="M16 8a4 4 0 11-8 0 4 4 0 018 0zM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4v-2z" clip-rule="evenodd"></path></svg>

          </div>
          <div style={{height:"100%",marginLeft:"-15px"}}>
            <p style={{fontSize:"13px",marginTop:"-1px",marginBottom:"-19px"}}>Travellers</p>
            <h5>1,room,1 traveller</h5>
          </div>
        </HGrideInnerDiv>
      </InerGridDiv>
      <InerGridDiv height={'50px'} style={{backgroundColor:"#3662d8",color:"white",fontSize:"20px"}}>
        
        <p style={{marginTop:"8px"}}>Search</p></InerGridDiv>
    </HGrideDiv>
    </div>
  )
}

export default Fivecomponents
