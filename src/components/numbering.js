import React, { useState } from 'react'
import white from '../assets/white.png'
import red from '../assets/red.png'
import yellow from '../assets/yellow.png'
import brown from '../assets/brown.png'
import green from '../assets/green.png'
import blue from '../assets/blue.png'
import start from '../assets/start.png'
import { Button } from '@mui/material';
import { Typography } from '@mui/material';



const Numbering = () => {
    let [count, setCount] = useState(0)
    // let [showimage, setShowImage] = useState(false)
    let [usedCounts, setUsedCounts] = useState([])

    const images = [
        start,
        white,
        red,
        yellow,
        brown,
        green,
        blue
    ]

    const randomCounter = () => {
        if (usedCounts.length === 5) {
            setUsedCounts([]);
            setCount(0);
            alert("All values used! Resetting session.")
            return;
        }

        let randomVal;
        do {
            randomVal = Math.floor(Math.random() * 5) + 1;
        } while (usedCounts.includes(randomVal));

        setCount(randomVal);
        setUsedCounts((prevUsedCounts) => [...prevUsedCounts, randomVal]);
    };


    const imageElement = count === 0 ? (
        <img src={start}
            alt='start session'
            style={{ maxWidth: '50%', height: 'auto', marginTop: '20px' }}
        />) : (
        <img src={images[count]}
            alt={`Image ${count}`}
            style={{ maxWidth: '50%', height: 'auto', marginTop: '20px' }}
        />
    );

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
                <Typography variant="outlined" color="success" style={{fontSize: '40px'}}>
                    Counter : {count}
                </Typography>
                <br />
                {/* <button onClick={handleIncrement}>Click to increment</button>
                <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>Click to decrement</button> */}
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