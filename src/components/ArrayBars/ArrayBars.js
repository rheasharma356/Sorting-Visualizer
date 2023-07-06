import React, { useState, useEffect } from 'react'
import './ArrayBars.css'


function ArrayBars({ blocks, compare, sorted, swap }){
    const [width, setWidth] = useState(Math.min(25, Math.ceil(window.innerWidth / blocks.length) - 5))
    //when array bars increase the length 50 hide the numbering
    const color = blocks.length <= 50 && width > 14 ? 'white' : 'transparent'

    useEffect(() => {
        const handleResize = () => {
            //formula used to set the width according to the array size
            setWidth(Math.min(25, Math.ceil(window.innerWidth / blocks.length) - 8))
        }

        window.addEventListener('resize', handleResize)

        setWidth(Math.min(25, Math.ceil(window.innerWidth / blocks.length) - 8))
    }, [blocks.length])




    return (
        <div className='ArrayBars'>

            {blocks.map((block, i) => {
                const height = block * 500 / blocks.length;
               //initial color of array
                let bg = 'black'

                // i th element is being compared with some other element
                if(compare && (i === compare[0] || i === compare[1])){
                    bg = ' rgb(227, 123, 102)'
                }

                if(swap && (i === swap[0] || i === swap[1])){
                    bg=' rgb(234, 239, 145)'
                }
                
                // i th element is in its correct position
                if(sorted && sorted.includes(i)){
                    bg = ' #62ca8b'
                }

                const style = {
                    'backgroundColor': bg,
                    'color': color, 
                    'height': height, 
                    'width': width
                }
                return (<div key={i} className='block' style={style}>{block}</div>)
            })}
        </div>
    );
}

export default ArrayBars
