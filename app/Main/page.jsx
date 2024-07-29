'use client'
import React, { useState } from 'react'
import "./main.css"
import SearchDsiplay from "../../components/SearchDisplay"

export default function page() {


    const [results, setResults] = useState([]);

    async function serRes1(e) {
        // setRes(e.target.value);
        if(e.target.value == null){
            setResults({})
        }
        try {
            const response = await fetch('/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ResName: e.target.value
                })
            });
            if (response.ok) {
                const data = await response.json();
                // for(let i =0; i < 8; i++){
                //     console.log(data.restaurants[i].restaurant.name);
                // }
                let temp = []
                for(let i = 0; i < 10; i++){
                    temp.push(data.restaurants[i]);
                }
                setResults(temp);
                // console.log(data);

            } else {
                console.error("There was an error with the request:", response.statusText);
            }
        } catch (error) {
            console.error("There was an error making the request:", error);
        }
    }



  return (
    <>
    <header>
        <nav class="navtop">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"/>
        <div class="search">
            <i class="fa-solid fa-location-dot"></i>
            <p>xyz</p>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for Restaurant, cuisine or a dish" onChange={serRes1} />
        </div>
        </nav>
        <div className='index'>
        {results.map((res, index) => (
            <SearchDsiplay name={res.restaurant.name} id={res.restaurant.R.res_id} rating={res.restaurant.user_rating.aggregate_rating}/>
        ))}
        </div>
        
        <nav class="options">
            <div class="option-item">
                <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"/>
                <a href="#">Dining Out</a>
            </div>
            <div class="option-item">
                <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt=""/>
                <a href="#" class="active">Delivery</a>
            </div>
            <div class="option-item">
                <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt=""/>
                <a href="#">Nightlife</a>
            </div>
        </nav>
        
    </header>
    <nav class="line"></nav>

    <section class="filters">
        <button>Filters</button>
        <button>Rating: 4.0+</button>
        <button>Pure Veg</button>
        <button>Cuisines</button>
    </section>

    <section class="inspiration">
        <h2>Inspiration for your first order</h2>
        <div class="food-items">
            <div class="food-item">
                <img src="https://b.zmtcdn.com/data/o2_assets/37df381734b24f138af4a84fd7e4d4ec1716558578.jpeg" alt="Biryani"/>
                <p>Biryani</p>
            </div>
            <div class="food-item">
                <img src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" alt="Chicken"/>
                <p>Chicken</p>
            </div>
            <div class="food-item">
                <img src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="Pizza"/>
                <p>Pizza</p>
            </div>
            <div class="food-item">
                <img src="https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png" alt="Fried Rice"/>
                <p>Fried Rice</p>
            </div>
            <div class="food-item">
                <img src="https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png" alt="Dosa"/>
                <p>Dosa</p>
            </div>
            <div class="food-item">
                <img src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="Burger"/>
                <p>Burger</p>
            </div>
        </div>
    </section>
    <h2 class="delres">Food delivery Restaurants</h2>
    <section class="sec-1">
        <div class="box">
            <div class="white">
                <span>Order Online</span>
                <p>Stay home and order to your footsteps</p>
            </div>
            <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;,"/>
        </div>
        <div class="box">
            <div class="white">
                <span>Dining</span>
                <p>view the city's favourite dining veues</p>
            </div>
            <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;,"/>
        </div>
        <div class="box">
            <div class="white">
                <span>Dining</span>
                <p>view the city's favourite dining veues</p>
            </div>
            <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;,"/>
        </div>
    </section>

    
    </>
  )
}
