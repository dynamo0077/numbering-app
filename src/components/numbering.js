import React, { useState } from 'react'
import white from '../assets/white.png'
import red from '../assets/red.png'
import yellow from '../assets/yellow.png'
import brown from '../assets/brown.png'
import green from '../assets/green.png'
import blue from '../assets/blue.png'
import start from '../assets/start.png'
import pink from '../assets/pink.png'
import black from '../assets/black.png'
import { Button, TextField } from '@mui/material';
import { Typography } from '@mui/material';



const Numbering = () => {
    let [count, setCount] = useState(0)
    // let [showimage, setShowImage] = useState(false)
    let [usedCounts, setUsedCounts] = useState([])
    let [numberOfPlayers, setNumberOfPlayers] = useState(7) //Default number of players

    const images = [
        start,
        white,
        red,
        yellow,
        brown,
        green,
        blue,
        pink,
        black
    ]

    const randomCounter = () => {
        if (usedCounts.length === numberOfPlayers) {
            setUsedCounts([]);
            setCount(0);
            alert("All values used! Resetting session.")
            return;
        }

        let randomVal;
        do {
            randomVal = Math.floor(Math.random() * numberOfPlayers) + 1;
        } while (usedCounts.includes(randomVal));

        setCount(randomVal);
        setUsedCounts((prevUsedCounts) => [...prevUsedCounts, randomVal]);
    };


    const imageElement = count === 0 ? (
        <img src={start}
            alt='start session'
            style={{ width: '50%', height: 'auto', marginTop: '20px' }}
        />) : (
        <img src={images[count]}
            alt={`Image ${count}`}
            style={{ maxWidth: '50%', height: 'auto', marginTop: '20px' }}
        />
    );

    const handlePlayerCountChange = (e) => {
        const value = parseInt(e.target.value)
        if (value <= 7 && value >= 1) {
            setNumberOfPlayers(value);
        } else if (value > 7) {
            setNumberOfPlayers(7);
        }
    }

    // const handleIncrement = () => {
    //     if (count < 5)
    //         setCount(count + 1);
    // }

    // const handleDecrement = () => {
    //     if (count > 0)
    //         setCount(count - 1);
    // }

    // const startImageElement = (
    //     <img
    //         src={start}
    //         alt="Start session"
    //         style={{ maxWidth: "100%", height: 'auto', marginTop: "20px" }}
    //     />
    // )

    // const randomCounter = () => {
    //     const randomVal = Math.floor(Math.random() * 5);
    //     setCount(randomVal);
    // }

    // const toggleImage = () => {
    //     setShowImage(!showimage);
    // }
    // const buttonText = showimage ? "Hide Image" : "Show Image";

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Typography variant="outlined" color="danger" style={{ fontSize: '40px', marginBottom: '20px', display: 'block' }}>
                    Player Number : {count}
                </Typography>
                {/* <button onClick={handleIncrement}>Click to increment</button>
                <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>Click to decrement</button> */}

                <TextField
                    variant='outlined'
                    type='number'
                    label='Number of Players'
                    value={numberOfPlayers}
                    onChange={handlePlayerCountChange}
                    style={{ marginRight: '10px', width: '200px' }}
                    disabled={numberOfPlayers > 7}
                />

                <Button onClick={randomCounter}
                    variant="contained" color="primary"
                    style={{ marginLeft: "10px", backgroundColor: 'lightgreen' }}>
                    Generate Random Counter
                </Button>

                <div style={{ marginTop: '20px' }}>
                    {imageElement}
                </div>

                {/* {count === 0 && startImageElement}
                {count > 0 && imageElement}  */}

            </div>
            {/* <button onClick={toggleImage}>
                    {buttonText}
                </button> */}
        </>
    )
}

export default Numbering;