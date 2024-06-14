import Restaurantcard from "./Restaurantcard"

const Cardcontainer = () =>{

    const restaurantList = [
        {
        imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2418209798927d733a50f5d2ebcc2aee",
        title : "Starbucks Coffee",
        startRating : "5",
        deliveryTime : "20-30",
        cuisines : " Beverage,cafe,Snacks",
        location : "Santacruz East"
        }, 
      
        {
            imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
            title : "Chinese Wok",
            startRating : "4.1",
            deliveryTime : "60-65",
            cuisines : " Chinese, Asian, Tibetan, Desserts",
            location : "Ghatkopar West"
            }, 
            
            {
                imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
                title : "The Good Bowl",
                startRating : "4.3",
                deliveryTime : "35-40",
                cuisines : " Biryani,Pastas,Desserts",
                location : "Ghatkopar West"
                }, 

                {
                    imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63dd75492c47fcec191132b8eb299ea5",
                    title : "Theobroma",
                    startRating : "4.6",
                    deliveryTime : "35-40",
                    cuisines : "Bakery, Desserts",
                    location : "Vikroli West"
                    }, 
                    
                    {
                        imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/8d8187ee-3d6c-455b-9318-467a37ac274b_334353.jpg",
                        title : "McDonald's",
                        startRating : "4.5",
                        deliveryTime : "25-30",
                        cuisines : " Beverage,cafe,Burger",
                        location : "Ghatkopar West"
                        }, 
                        
                        {
                            imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c99751d54e4e1847186c62b3309c1327",
                            title : "Big Bowl",
                            startRating : "4.3",
                            deliveryTime : "35.40",
                            cuisines : "Chinese,Tibetan,Desserts ",
                            location : "Chembur"
                            }, 
                            
                            
                            {
                                imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e44fd7f1e5cd9967edfe47c10247671",
                                title : "Indian Khichdi",
                                startRating : "4.4",
                                deliveryTime : "30-35",
                                cuisines : "Home Food, North India",
                                location : "Powai"
                                }, 
                                
                                
                                {
                                    imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yo09v6cqafli9v3bnnnq",
                                    title : "Panshikar",
                                    startRating : "4.5",
                                    deliveryTime : "30-35",
                                    cuisines : " Street Food,Snacks",
                                    location : "Ghatkopar Vikroli"
                                    }, 
                                    
                                    
                                    {
                                        imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/18d8b8fb6bac8063a6fa886e20148110",
                                        title : "NIC Ice creams",
                                        startRating : "4.6",
                                        deliveryTime : "15-20",
                                        cuisines : "Ice creams, Desserts",
                                        location : "Ghatkopar"
                                        }, 
                                        
                                        
                                        {
                                            imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c19lnmlrlslwmupolnoz",
                                            title : "Natural Ice cream",
                                            startRating : "4.8",
                                            deliveryTime : "30-35",
                                            cuisines : " Ice creams, Desserts",
                                            location : "Ghatkopar East"
                                            },     
    ]
    return(
        <div className="container d-flex flex-wrap gap-4">
           {
            restaurantList.map((restaurant,index)=>{
                return(
                    <Restaurantcard key={index}
                    imgUrl={restaurant?.imgUrl}
                    title={restaurant?.title}
                    startRating={restaurant?.startRating}
                    deliveryTime={restaurant?.deliveryTime}
                    cuisines={restaurant?.cuisines}
                    location={restaurant?.l}
                     
                  />
                )
            })
           }
            
     
        </div>
    )
  }

  export default Cardcontainer