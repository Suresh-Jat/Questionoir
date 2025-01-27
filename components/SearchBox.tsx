'use client'
import React, { useState } from 'react'

const SearchBox = ({ inputValue, setInputValue }: {
    inputValue: any,
    setInputValue: any
}) => {
    return (
        <div className=' m-6 flex flex-col items-center justify-center'>
            <h1 className='font-bold text-gray-600'>Search to filter out data</h1>
            <input className='m-4 border border-gray-400 py-2 px-4 rounded-lg shadow-lg outline-none' placeholder='Search...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div >
    )
}

export default SearchBox
