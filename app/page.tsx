'use client'
import DataValueTable from "@/components/DataValueTable";
import SearchBox from "@/components/SearchBox";
import React, { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <div className='bg-white p-2 rounded-3xl border border-gray-200 m-6 flex flex-row items-center justify-center'>
        <SearchBox inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      <DataValueTable inputValue={inputValue} />
    </div>
  );
}
