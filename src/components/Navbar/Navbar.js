import React from 'react'
import './Navbar.css'
// import logo from './logo.png'

const Navbar = ({ handleLength, handleSpeed, handleAlgo, generateRandomArray, handleSort, sorting, completed, len, speed, algo }) =>{

    return (
        <nav>
            {/*  <img className='logo' src={logo} alt="Logo"  /> Algorithm Visualizer  */}
            <div className='nav-brand'>Sorting Visualizer </div>
            <div className='toolbox'>
                <div>
                    {/* for speed handeling */}
                    <div className='group speed'>
                        <label >Speed</label>
                        <input title= "Click to Adjust Speed" class name= ' input_type' type='range' onChange={handleSpeed} min='1' max='10' value={Math.ceil(400 / speed)} disabled={sorting}></input>
                    </div>

                    
                    
                    <select onChange={handleAlgo} disabled={sorting} value={algo}>
                        <option value='selectionSort'>Selection Sort</option>
                        <option value='bubbleSort'>Bubble Sort</option>
                        <option value='insertionSort'>Insertion Sort</option> 
                        <option value='mergeSort'>Merge Sort</option>
                        <option value='quickSort'>Quick Sort</option>
                    </select>
                </div>
               
                
                <div>
                    <button onClick={generateRandomArray} disabled={sorting} title="Click to generate Random Array">Generate Random Array</button>
                    <button onClick={handleSort} disabled={sorting || completed} title= "Click to Sort">Sort</button>
                </div>
                <div className='group length'>
                        <label>Length</label>
                        <input  title= "Click to Adjust Length" type='range' onChange={handleLength} min='5' max={100} step='1' disabled={sorting} value={len}></input>
                </div>
            </div>
        </nav>
    )
}

export default Navbar