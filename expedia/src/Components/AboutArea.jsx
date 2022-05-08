import React from 'react'
import "../Css/AboutArea.css";
const AboutArea = () => {
  return (
    <div >
       <div className='dam' style={{margin: "auto"}}>
            <div className='part1' style={{textAlign: "left",marginLeft:"10px"}}>
                <div className='child1'>
                    <h2 className='title'>About this area</h2>
                </div>
                <div className='child2'>
                    <h3 className='title'>New Delhi</h3>
                    <p className='para'>Hotel The Royal Plaza is located in Connaught Place, a neighbourhood in New Delhi, and is in the city centre and near a metro station. India Gate and Gurudwara Bangla Sahib are notable landmarks, and travellers looking to shop may want to visit Chandni Chowk. Looking to enjoy an event or a game while in town? See what's happening at Jawaharlal Nehru Stadium or R.K. Khanna Tennis Complex. Spend some time exploring the area's activities, including outlet shopping.</p>
                </div>
                <div className='child3'>
                    <p className='para1'>Visit our New Delhi travel guide</p>
                </div>
            </div>
            <div className='part2'>
                <div className='firstPart'>
                    <img style={{marginLeft:"0px",width:"100%",marginTop:"0px"}} src='https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=13&scale=&size=660x330&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker.png%7C28.621194,77.216718&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=gn2l39HlrFyuTwgqqWZscNsMr8g=' alt='new delhi map'/>
                    <p className='para3'>View in a map</p>
                </div>
                <div className='secondPart'>
                      <div className='innerPart1'>
                          <div className='last'>
                              <div className='iconTab'>
                                <span class="material-symbols-outlined">share_location</span>
                                <h3 className='heading'>What's nearby</h3>
                              </div>
                              <div className='about'>
                                    <p>Gurudwara Bangla Sahib - 12 min walk</p>
                                    <p>Kasturba Gandhi Marg - 13 min walk</p>
                                    <p>Jantar Mantar - 13 min walk</p>   
                                    <p>Parliament of India - 20 min walk</p>
                                    <p>India Gate - 6 min drive </p> 
                              </div>  
                          </div>
                          <div className='last'>
                              <div className='iconTab'>
                                <span class="material-symbols-outlined">directions_car</span>
                                <h3 className='heading'>Getting around</h3>
                              </div>
                              <div className='about'>
                                    <div className='iconTab'>
                                        <span class="material-symbols-outlined">train</span>
                                        <p>New Delhi Shivaji Bridge Station - 3 min drive</p>
                                    </div>
                                    <div className='iconTab'>
                                        <span class="material-symbols-outlined">train</span>
                                        <p>Patel Chowk Station - 4 min walk</p>
                                    </div>
                                    <div className='iconTab'>
                                        <span class="material-symbols-outlined">airplanemode_active</span>
                                        <p>Indira Gandhi International Airport (DEL) - 38 min drive</p>
                                    </div>
                              </div>
                          </div>
                      </div>
                      <div className='innerPart2'>
                          <div className='last' >
                              <div className='iconTab'style={{marginLeft:"90px"}} >
                                <span class="material-symbols-outlined" style={{marginRight:"-50px"}}>restaurant_menu</span>
                                <h3 className='heading' style={{marginLeft:"70px"}}>Restaurants</h3>
                              </div>
                              <div className='about'>
                                <p>Restaurants on site</p>
                                <p>Lutynes</p>
                                <p>Jasmine</p>
                                <p>Onyx</p>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default AboutArea;