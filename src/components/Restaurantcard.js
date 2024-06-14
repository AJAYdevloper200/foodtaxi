
const Restaurantcard = ({imgUrl, title, startRating, deliveryTime, cuisines, location,}) =>{
    // imgUrl, title, startRating, deliveryTime, cuisines, location

    return(
        <div className="custom-card">
           <div className="mb-2">
                < img 
                    src={imgUrl}
                // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2418209798927d733a50f5d2ebcc2aee"
                />
           </div>
            <div>
            <h5>{title}</h5>
              {/* <h5>Starbucks Coffee</h5> */}
              <div className="d-flex justify-content-between">
              <div>⭐{startRating}</div>
                  {/* <div>⭐5</div> */}

                  <div>{deliveryTime}Min</div>
                  {/* <div>20-30 Min</div> */}
             </div>

             <div>
                 {cuisines}</div>
             {/* <div>
                 Beverage,cafe,Snacks</div> */}

                <div>
                {location}</div>
             {/* <div>
                Santacruz East</div> */}
        </div>
        </div>
    )
  }

  export default Restaurantcard





  
// const Restaurantcard=({areaName,avgRating,cuisines,name})=>{
//     return(
//         <div className="Restaurantcard mb-4 custom-card">
//             <div className="image">
//                 {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" alt="" className="w-100" style={{height:"250px"}}/> */}
//                 <h1></h1>
//             </div>
//             <div className="content px-2">
//                 <h4>{name}</h4>
//                 <div className="d-flex justify-content-between"><span>⭐{avgRating}</span> <span>25-30 mins</span></div>
//                 <div>{cuisines.join(",")}</div>
//                 <p>{areaName}</p>
//             </div>
//         </div>
//     )
// }
// export default Restaurantcard
