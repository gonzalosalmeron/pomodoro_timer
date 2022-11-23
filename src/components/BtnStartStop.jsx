import React from 'react'

function BtnStartStop({percent, isStarted, update}) {

  return (
		<button className="bg-white px-4 py-2 sm:py-3 rounded-full relative overflow-hidden 
			cursor-pointer w-28 text-center transition duration-500 transform hover:scale-105" 
			onClick={() => update(!isStarted)}
		>
			<div className="absolute left-0 top-0 h-full bg-black transform" style={{width: percent + "%"}}></div>
			<p className="mix-blend-difference bg-clip-text bg-white text-transparent font-bold text-lg sm:text-xl">{ !isStarted ? "Start" : "Pause"}</p>
		</button>
  )
}

export default BtnStartStop