'use client'
import React, { useEffect, useState } from 'react'
import SearchDsiplay from "../../../components/SearchDisplay"
import "./resid.css"
import Link from 'next/link'
export default function page({ params }) {
  const [result, setResults] = useState(false);
  const { id } = params;
  useEffect(() => {
    async function run() {
      try {
        const response = await fetch('/api/res', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Resid: id
          })
        });
        if (response.ok) {
          const data = await response.json();
          setResults(data.restaurants);
          // console.log(data.restaurants)

        } else {
          console.error("There was an error with the request:", response.statusText);
        }
      } catch (error) {
        console.error("There was an error making the request:", error);
      }
    }
    run();

  }, [])
  return (

    <>
      {result ? (

        <>
          <header className='tox21'>
            <nav class="navtop">
              <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Logo" />
              {/* <div class="search">
                <i class="fa-solid fa-location-dot"></i>
                <p>xyz</p>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for Restaurant, cuisine or a dish" />
              </div> */}
            </nav>
          </header>
          <div class="imgs">
            <img src={result[0].restaurant.thumb} alt="" />
            <img src="https://b.zmtcdn.com/data/pictures/4/2800154/e69233e9d373cfe2cf6c41a790d232fa.jpg?fit=around|300:273&crop=300:273;," alt="" />
          </div>
          <div class="resname">
            <h1>Restaurant Name : {result[0].restaurant.name}</h1>
            <p>Address : {result[0].restaurant.location.address}</p>
            <div class="ratings">
              <div class="rating">
                <span>{result[0].restaurant.user_rating.aggregate_rating}</span>
                <p>{result[0].restaurant.user_rating.votes} Dining Ratings</p>
              </div>
              <div class="rating">
                <span>{result[0].restaurant.user_rating.rating_text}</span>
                <p>Online Delivery: {result[0].restaurant.has_online_delivery == 0 ? `No` : `Yes`}</p>
              </div>
            </div>
          </div>
          <nav>
            
            <ul>
              Cuisines : {result[0].restaurant.cuisines}
            </ul>
          </nav>
          <main>


            <section class="dishes">
              <Link href={result[0].restaurant.menu_url}><button>Menu</button></Link>
              <div class="dish">
                {/* <img src="https://b.zmtcdn.com/data/dish_photos/da0/2b90afe57a32a1d6248a6f3fcc2a3da0.jpeg?fit=around|130:130&crop=130:130;," alt="Boneless Chicken Biryani" /> */}
                <div>
                  <h3><Link href={result[0].restaurant.url}><button>Order</button></Link>
                  </h3>
                </div>
              </div>
              <div class="dish">
                <img src="https://b.zmtcdn.com/data/dish_photos/27e/2aca6f5d2e1f336cf94b6612bc59a27e.jpeg?fit=around|130:130&crop=130:130;," alt="Prawns Biryani" />
                <div>
                  <h3>Prawns Biryani</h3>
                  <p>₹250</p>
                  <p>Richly flavored aromatic rice layered with succulent prawns in a delicate blend of...</p>
                  <p>228 votes</p>
                </div>
              </div>
            </section>
          </main>

        </>
      ) : (
        <>
        <div className='tox'>
        <div class="containerx">
            <div class="loader">
              <div class="crystal"></div>
              <div class="crystal"></div>
              <div class="crystal"></div>
              <div class="crystal"></div>
              <div class="crystal"></div>
              <div class="crystal"></div>
            </div>
          </div>
        </div>
          

        </>
      )}

    </>


  )
}


{/* <div>
       {result && result.length > 0 &&
         <SearchDsiplay name={result[0].restaurant.name} id={result[0].restaurant.R.res_id} rating={result[0].restaurant.user_rating.aggregate_rating} />
       }
     </div> */}