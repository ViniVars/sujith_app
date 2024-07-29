"use client"
import Image from "next/image";
import "./home.css"
import { useEffect, useState } from "react";
import Link from "next/link";
import SearchDsiplay from "../components/SearchDisplay"
// import axios from "axios";


export default function Home() {



    const [results, setResults] = useState([]);
    // const [serRes, setRes] = useState("");

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
                <div className="nav">
                    <div>
                        <h4>Get The App</h4>
                    </div>
                    <ul className="nav-bar">
                        <li>Add Restaurant</li>
                        <li>Log in</li>
                        <li>Sign up</li>
                    </ul>
                </div>
                <div className="head">
                    <img className="logo" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" />
                    <h3>Discover the best food & drinks</h3>
                    <div className="search">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>xyz</p>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search for Restaurant, cuisine or a dish" onChange={serRes1} />
                    </div>
                    <div>
                        {results.map((res, index) => (
                            <SearchDsiplay name={res.restaurant.name} id={res.restaurant.R.res_id} rating={res.restaurant.user_rating.aggregate_rating}/>
                            // <div>
                            // <Link key={index} href={res.restaurant.url}>
                            //     {res.restaurant.name}
                            // </Link>
                            // </div>
                        ))}
                    </ div>
                </div>
                <div className="header-image">
                    <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" />
                </div>
            </header>
            <section className="sec-1">
                <Link className="box" href="/Main">
                    <div className="white">
                        <span>Order Online</span>
                        <p>Stay home and order to your footsteps</p>
                    </div>
                    <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;," />
                </Link>
                <div className="box">
                    <div className="white">
                        <span>Dining</span>
                        <p>view the city's favourite dining veues</p>
                    </div>
                    <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;," />
                </div>
            </section>
            <section className="footer">
                <div className="sec-7">
                    <div className="first">
                        <div>
                            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;," />
                        </div>
                        <div className="first-1">
                            <div>
                                <span>India</span>
                            </div>
                            <div>
                                <span>English</span>
                            </div>
                        </div>
                    </div>
                    <div className="second">
                        <div>
                            <h4>About Zomato</h4>
                            <a href="#">Who we are</a>
                            <a href="#">Blog</a>
                            <a href="#">Work with us</a>
                            <a href="#">Investor relations</a>
                            <a href="#">Report Fraud</a>
                            <a href="#">Press kit</a>
                            <a href="#">Contact us</a>
                        </div>
                        <div>
                            <h4>Zomaverse</h4>
                            <a href="#">Zomato</a>
                            <a href="#">Blinkit</a>
                            <a href="#">Feeding India</a>
                            <a href="#">HyperPure</a>
                            <a href="#">Zomaland</a>
                            <a href="#">Weather Land</a>
                        </div>
                        <div>
                            <h4>For Restaurants</h4>
                            <a href="#">Partner with us</a>
                            <a href="#">Apps for you</a>
                        </div>
                        <div>
                            <h4>Learn more</h4>
                            <a href="#">Privacy</a>
                            <a href="#">Security</a>
                            <a href="#">Terms</a>
                        </div>
                        <div className="box-4">
                            <h4>Social Links</h4>
                            <div>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-x"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" />
                            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" />

                        </div>

                    </div>
                    <hr />
                    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
                </div>
            </section>
        </>
    );
}
