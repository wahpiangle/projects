import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";

export default function App() {
    const cards = data.map(card => {
        return (
            //or can be written as <Card {key=item.id} {...item}/>
            <Card
                img={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                location={card.location}
                title={card.title}
                price={card.price}
                openSpots={card.openSpots}/>
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards">
                {cards}
            </section>
        </div>
    )
}