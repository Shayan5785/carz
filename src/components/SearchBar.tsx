'use client'

import { SearchManufacturer } from "@/components"
import { useState } from "react"


const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("")

  const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <SearchManufacturer 
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    </form>
  )
}

export default SearchBar 