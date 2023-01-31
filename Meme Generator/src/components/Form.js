import React from 'react';

export default function Form() {
    //set the meme as an object state
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    //useEffect here to call API and set the allMemes array to data from API
    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[]) //no dependency as the array only needs to be loaded once

    //using async await instead of fetch, then:
    /*
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    */

    //function to get a random image by accessing the JSON array
    function getMemeImage(event) {
        event.preventDefault();
        //to get a random image
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        //call of setMeme from the state function to change the randomImage property to the random url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    //function to get input
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <form>
                <input
                    type="text"
                    placeholder='Top Text'
                    name='topText'
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder='Bottom Text'
                    name='bottomText'
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button className='submit-btn' onClick={getMemeImage}>Get a new meme image 🏞️</button>
            </form>
            <br />
            <div className='meme'>
                <img src={meme.randomImage} className='meme-image' />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}