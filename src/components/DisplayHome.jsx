import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albumsData, songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Feature Charts</h1>
        <div className='flex overflow-auto'>
          {
            albumsData.map((e, index) => (
              <AlbumItem key={index} image={e.image} name={e.name} desc={e.desc} id={e.id} />
            ))
          }
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto'>
          {
            songsData.map((e, index) => (
              <SongItem key={index} image={e.image} name={e.name} desc={e.desc} id={e.id} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default DisplayHome