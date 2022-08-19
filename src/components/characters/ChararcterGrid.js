import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

const ChararcterGrid = ({ isLoading, items}) => {
  return (
    isLoading ? (<Spinner />) : (<section className='cards'>
        {items.map((item) => (
            <CharacterItem key={item.char_id} item={item} />
        ))}
    </section>)
  )
}

export default ChararcterGrid