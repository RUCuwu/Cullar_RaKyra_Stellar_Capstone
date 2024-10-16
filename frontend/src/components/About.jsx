import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
    return (
        <section className='about' id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading"> WHAT WE ARE ABOUT</h1>
                        <p>Building a communtiy has started with food one way or another. 
                            Bringing smiles to everyone no matter who you are. </p>
                    </div>
                    <p className="mid">
                    At Cookie, we believe that great food and a strong sense of community go hand in hand. Located in the heart of Chicago, Illinois, 
                    we’ve been serving our neighbors with fresh, locally sourced dishes since 2024. Our menu blends traditional favorites 
                    with seasonal creations, showcasing the best ingredients from local farmers and artisans. </p>
                    <p className="mid"> Beyond our food, we’re committed to giving back to the community that supports us. From sponsoring local events to contributing 
                    to neighborhood causes, we actively participate in initiatives that strengthen the bonds within our area. At Cookie, 
                    we invite you to enjoy not just a meal, but a place where community thrives.
                    </p>
                    <Link to={"/"}>Explore Menu <span>
                        <HiOutlineArrowNarrowRight />
                        </span>
                        </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    );
};

export default About;