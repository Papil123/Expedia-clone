import React from 'react'
import {GoingBut,InputDiv,InputGoing} from '../component.styled'
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PlacesAuthocomplete,{geocodeByAddress,getLating} from 'react-places-autocomplete'

const GoingTo = () => {

    const [isAuth,setAuth]=React.useState(false);
    const [address,setAddress]=React.useState("");

    const handleSelect=async value=>{};
  return (
      <>
    {isAuth?<> <InputDiv>
        <InputGoing placeholder="Where are you going?"/>
        <hr></hr>
        <ul>
            <li><button name="">Goa (GOI - Dabolim)</button></li>
            <li><button name="">Goa (GOI - Dabolim)</button></li>
            <li><button name="">Goa (GOI - Dabolim)</button></li>
            <li><button name="">Goa (GOI - Dabolim)</button></li>
            
        </ul>
    </InputDiv></>: <> <GoingBut onClick={()=>setAuth(!isAuth)}>
    <svg style={{height: '25px',width:"15%",}}><path  fill-rule="evenodd" d="M5 9a7 7 0 1114 0c0 5.25-7 13-7 13S5 14.25 5 9zm4.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" clip-rule="evenodd"></path></svg>
       
        
    Going To</GoingBut></>}
    <svg data-testid="LocationOnIcon"></svg>
    
    </>
    )
//    <PlacesAuthocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
    
//     {( getInputProps,suggestions,getSuggestionItemProps,loading ) =>(
 
//     <div>

//        <input {...getInputProps({ placeholder:"Type address"})}/>
//        <div>
//            {loading ? <div>...loading</div> : null}

//            {suggestions.map(suggestion =>{

//             const style={
            
//             backgroundColor:suggestion.active ?"#41b6e6" :"#fff"
//                 }

//                return <div {...getSuggestionItemProps(suggestion,{style})}>{suggestion.description
//                }</div>;
//            })}
//        </div>
//    </div>
  
//    )}
//    </PlacesAuthocomplete>
   
  
}

export default GoingTo



