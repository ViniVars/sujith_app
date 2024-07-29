import { NextResponse } from "next/server";
import data from "../../../datasets/file1.json";

export async function POST(request) {
    try {
        // Parse the request body to get the ResName
        const { ResName } = await request.json();
        console.log("ResName received:", ResName);

        // Collect all matching restaurants
        let matchingRestaurants = [];
        for (const item of data) {
            // Check if the item has a 'restaurants' property and it is an array
            if (Array.isArray(item.restaurants)) {
                // Filter to get all restaurants with the matching name
                const foundRestaurants = item.restaurants.filter(
                    restaurant => restaurant.restaurant.name.toLowerCase().includes(ResName.toLowerCase())
                );
                // Add found restaurants to the result array
                matchingRestaurants = [...matchingRestaurants, ...foundRestaurants];
            }
        }
        console.log("Matching restaurants found:", matchingRestaurants);

        // If no restaurants are found, return a 404 error
        if (matchingRestaurants.length == 0) {
            return NextResponse.json({ error: `Restaurant with name ${ResName} not found.` }, { status: 404 });
        }

        // Return the found restaurants
        return NextResponse.json({ restaurants: matchingRestaurants });
    } catch (error) {
        console.error("Error in POST request:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
