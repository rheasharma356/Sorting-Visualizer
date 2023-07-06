import React from 'react'
import './ColourTheme.css'

const ColourTheme = ({algo}) => {
    return (
        <div className='ColourTheme'>
            <div className='key'> 
                <span className='sq compare'></span> On Comparison
            </div>


            <div className='key'> 
                <span className='sq swap'></span> {algo !== 'mergeSort' ? 'Swapping' : 'Taking From Auxillary Space'}
            </div>
            
            
            <div className='key'> 
                <span className='sq sorted'></span> Sorted Array
            </div>
        </div>
    )
}

export default ColourTheme
