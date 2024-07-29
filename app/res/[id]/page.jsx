'use client'
import React, { useEffect, useState } from 'react'
import SearchDsiplay from "../../../components/SearchDisplay"

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
    <div>
      {result && 
        <SearchDsiplay name={result[0].restaurant.name} id={result[0].restaurant.R.res_id} rating={result[0].restaurant.user_rating.aggregate_rating} />
      }
    </div>
  )
}
