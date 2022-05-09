import styled from 'styled-components'

export const GoingBut=styled.button`

    width: 39%;
    height:51px;
    border-radius:6px;
    border: 1px solid ;
   background-color: white;
   text-align: left;
   font-size:19px;
   color:grey;
  position: absolute;
  margin-left: -655px;
`

export const InputDiv=styled.div`

    width: 453px;
    height:438px;
    border-radius:7px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: auto;
    margin-top:15px;
    position: absolute;
    border:1px solid red;
  margin-left: -650px;
  background-color:white;
`
export const InputGoing=styled.input`

    padding: 10px;
    width: 431px;
    height:30px;
   
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style:hidden;
 margin-top: 10px;
  
`
export const TravellerBut=styled.button`
    border: none;
     background-color: white;
   text-align: left;
   font-size:19px;
   
`

export const TravellerDiv=styled.button`

    width: 376px;
    height: 350px;
   border-radius:6px;
    border: none;
   background-color: white;
   text-align: left;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   margin-top:60px;
   margin-left: -45px;
   
  
`

export const GridDiv1=styled.div`

    display: grid;
    grid-template-columns: 250px 100px;
    font-size:16px;
    
`
export const ExportButton=styled.button`

        font-size:25px;
        border-radius: 50%;
        width: 80%;
        height: 80%;
        text-align: center; 
        color: grey;
       border:1px solid ;

`
export const AddAnotherButoon=styled.button`

        margin-left:150px;
     margin-top: 15px;
     margin-bottom:15px;
        width: 60%;
        font-size:17px;
       color: blue;
       border:none; 
       background-color: white;
`

export const DoneButoon=styled.button`

       
        width: 100%;
        height: 35px;
        font-size:17px;
        border-radius: 10px;
       color: white;
       border:none; 
       background-color: blue;
       margin-bottom: 5px;
`
export const HGrideDiv=styled.div`

        display: grid;
        grid-template-columns: 350px 200px 200px 200px 130px;
        /* border: 1px solid black; */
        width: 88%;
        height: 70px;
        margin: auto;
        gap:10px;
`
export const InerGridDiv= styled.div`

    border: 1px solid grey;
    background-color: white;
    color: black;
    width:${({width})=>width};
    height: ${({height})=>height};
   margin-top: 8px;
   border-radius:8px;

`


export const HGrideInnerDiv=styled.div`

        display: grid;
        grid-template-columns: 40px auto;
        grid-template-rows: 40px;
         margin-left: 15px;
         margin-top: 5px;
         gap: 7px;
 `

 export const CovidDiv=styled.div`
 
    border: 1px solid black;
    width:88%;
    height:70px;
    margin: auto;
    margin-top:15px;
    border-radius:10px;
    background-color: #343b53;
    color:white;
 `


//AIzaSyCf_e793r20KkL6HmISnx1yK-xVxuJKWOU