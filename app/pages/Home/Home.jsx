import React from 'react'

const Home = () => {
  return (
    <div className='Home grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen w-screen' id=''>
      <div className="HeroImg grid justify-center items-center bg-black min-h-screen">
        <img src="" alt="hero" />
      </div>
      <div className="HeroTitle grid justify-center items-center">
        <h1 className='font-bold text-6xl'>BusinessName</h1>
        <h3>"Create Innovations.."</h3>
      </div>
    </div>
  )
}

export default Home;