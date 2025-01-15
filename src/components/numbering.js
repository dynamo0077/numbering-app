import React, { useState } from 'react'
import white from '../assets/white.png'
import yellow from '../assets/yellow.png'
import brown from '../assets/brown.png'
import green from '../assets/green.png'
import blue from '../assets/blue.png'
import start from '../assets/start.png'
import pink from '../assets/pink.png'
import black from '../assets/black.png'
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const Numbering = () => {
    let [count, setCount] = useState(0)
    // let [showimage, setShowImage] = useState(false)
    let [usedCounts, setUsedCounts] = useState([])
    let [numberOfPlayers, setNumberOfPlayers] = useState(7) //Default number of players

    const images = [
        start,
        white,
        yellow,
        green,
        brown,
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
                <div className="threeD-text">Player Going: {count}</div>
                {/* <button onClick={handleIncrement}>Click to increment</button>
                <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>Click to decrement</button> */}

                <FormControl
                    variant="outlined"
                    sx={{
                        marginBottom: '10px',
                        width: '200px',
                        backgroundColor: '#f7f7f7',  // Light background
                        borderRadius: '5px',  // Rounded corners
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Subtle shadow
                    }}
                >
                    <InputLabel
                        id="number-of-players-label"
                        sx={{ fontWeight: 'bold', color: '#333' }}  // Bold label
                    >
                        Number of Players
                    </InputLabel>
                    <Select
                        labelId="number-of-players-label"
                        value={numberOfPlayers}
                        onChange={(e) => setNumberOfPlayers(e.target.value)}
                        sx={{
                            fontWeight: 'bold', // Make the text bold
                            color: '#333', // Text color
                            '& .MuiSelect-select': {  // Style for the select box
                                padding: '10px', // Adjust padding
                            },
                            '&:before': { // Style for the underline before select
                                borderBottom: `2px solid #ccc`,
                            },
                            '&:after': { // Style for the underline after select (focus)
                                borderBottom: `2px solid #6a11cb`,
                            },
                            '&:focus': {
                                borderColor: '#6a11cb',
                            }
                        }}
                        fullWidth // Make it full width if needed
                    >
                        {Array.from({ length: 7 }, (_, index) => (
                            <MenuItem key={index + 1} value={index + 1}>
                                {index + 1}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Move the Start button here */}
                <button
                    onClick={randomCounter}
                    className="animated-button" // Add class for animation
                    variant="contained"
                    style={{ display: 'block', margin: '10px auto' }}>
                    Start
                </button>

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