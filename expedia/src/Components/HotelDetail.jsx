import React from 'react'
import "./hotelDetail.css";

const HotelDetail = () => {
  return (
    <div>
        <div className='container'>
           <div className='innerDiv1'>
               <div className='imgCont1'>
                  <img src='https://media.istockphoto.com/photos/hotel-sign-picture-id487042276?k=20&m=487042276&s=612x612&w=0&h=NLfA9CVOjegM4lyIAEEj_Pof5VsahxfVYqTmO9F3Q3g=' alt='hotel1' />
               </div>
               <div className='imgCont2'>
                   <div>
                     <img src='https://media.istockphoto.com/photos/hotel-sign-picture-id487042276?k=20&m=487042276&s=612x612&w=0&h=NLfA9CVOjegM4lyIAEEj_Pof5VsahxfVYqTmO9F3Q3g=' alt='hotel2' />
                   </div>
                   <div>
                     <img src='https://media.istockphoto.com/photos/hotel-sign-picture-id487042276?k=20&m=487042276&s=612x612&w=0&h=NLfA9CVOjegM4lyIAEEj_Pof5VsahxfVYqTmO9F3Q3g=' alt='hotel3' />
                   </div>
                   <div>
                     <img src='https://media.istockphoto.com/photos/hotel-sign-picture-id487042276?k=20&m=487042276&s=612x612&w=0&h=NLfA9CVOjegM4lyIAEEj_Pof5VsahxfVYqTmO9F3Q3g=' alt='hotel4' />
                   </div>
                   <div>
                     <img src='https://media.istockphoto.com/photos/hotel-sign-picture-id487042276?k=20&m=487042276&s=612x612&w=0&h=NLfA9CVOjegM4lyIAEEj_Pof5VsahxfVYqTmO9F3Q3g=' alt='hotel5' />
                   </div>
               </div>
           </div>
           <div className='innerDiv2'>
                <div className='Option'>
                    <h5>Overview</h5>
                    <h5>Rooms</h5>
                    <h5>Location</h5>
                    <h5>Amenities</h5>
                    <h5>Policies</h5>
                    <h5>Reviws</h5>
                </div>
                <div className='Button'>
                    <button>Reserve a Room</button>
                </div>
           </div>
           <div className='innerDiv3'>
               <div className='Box1'>
                   <h1>Hotel The Royal Plaza</h1>
                   <div className='star'>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                   </div>
                   <p>Guests rated this property 3.4/5 for cleanliness.</p>
                   <p className='review'>See all 779 reviews</p>
                   <div className='PopularAmenities'>
                       <div className='Part1'>
                           <h3 className='speciality'>Popular amenities</h3>
                          <div className='Icon'>
                           <span class="material-symbols-outlined">pool</span>
                           <p>Pool</p>
                          </div>
                          <div className='Icon'>
                            <span class="material-symbols-outlined">wifi</span>
                            <p>Free WiFi</p>
                          </div>
                          <div className='Icon'>
                             <span class="material-symbols-outlined">local_parking</span>
                             <p>Parking Included</p>
                          </div>
                       </div>
                       <div className='Part2'>
                          <div className='Icon'>
                          <span class="material-symbols-outlined">ac_unit</span>
                           <p>Air Conditioning</p>
                          </div>
                          <div className='Icon'>
                            <span class="material-symbols-outlined">spa</span>
                            <p>Spa</p>
                          </div>
                          <div className='Icon'>
                             <span class="material-symbols-outlined">local_dining</span>
                             <p>Restaurant</p>
                          </div>
                       </div>
                   </div>
                   <p className='more'>See all</p>

                   <div className='PopularAmenities'>
                       <div className='Part1'>
                           <h3 className='speciality'>Cleaning and safety practices</h3>
                           <div className='Icon'>
                             <span class="material-symbols-outlined">sanitizer</span>
                             <p>Cleaned with disinfectant</p>
                          </div>
                          <div className='Icon'>
                            <span class="material-symbols-outlined">clean_hands</span>
                            <p>Hand sanitiser provided</p>
                          </div>
                       </div>
                       <div className='Part3'>
                          <div className='Icon'>
                             <span class="material-symbols-outlined">masks</span>
                             <p>Personal protective equipment</p>
                          </div>
                       </div>
                   </div>
                   <p className='more'>See all</p>
               </div>

               <div className='Box2'>
                   <div className='div1'>
                       <img src='https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=13&scale=&size=375x250&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker.png%7C28.621194,77.216718&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=Cjx7B2kJDiFvXmTGMtURrb2OMAM=' alt='map' />
                   </div>
                   <div className='div2'>
                      <p>19, Ashoka Road, Connaught Place, New Delhi, Delhi N.C.R, 110001</p>
                      <p className='more'>View in a map</p>
                   </div>
                   <div className='div3'>
                      <h2 className='areaDesc'>Explore the area</h2>
                   </div>
                   <div className='exploreArea'>
                       <div className='content'>
                           <span class="material-symbols-outlined">share_location</span>
                           <p>Gurudwara Bangla Sahib</p>
                           <p>12 minute walk</p>
                       </div>
                       <div className='content'>
                           <span class="material-symbols-outlined">share_location</span>
                           <p>Jantar Mantar</p>
                           <p>12 minute walk</p>
                       </div>
                       <div className='content'>
                           <span class="material-symbols-outlined">share_location</span>
                           <p>Parliament of india</p>
                           <p>12 minute walk</p>
                       </div>
                       <div className='content'>
                           <span class="material-symbols-outlined">airplanemode_active</span>
                           <p>Delhi (DEL-Indira Gandhi Intl.)</p>
                           <p>12 minute walk</p>
                       </div>
                   </div>
                   
               </div>
           </div>
           <div className='innerDiv4'>
               <div className='info1'>
                   <h5>Trip details</h5>
                   <p>21 May - 22 May • Stay (1 night) + Flight (2 return tickets), taxes & fees</p>
               </div>
               <div className='info2'>
                   <h2>Rs14,438</h2>
                   <p className='rent'>per traveller (includes 1 room)</p>
               </div>
           </div>
        </div>
    </div>
  )
}

export default HotelDetail;