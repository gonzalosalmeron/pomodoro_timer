import React, { useEffect } from 'react'
import Pomodoro from '../components/Pomodoro';

function HomePage() {
  useEffect(() => {
    storageBg();
    setBg()

    return () => {};
  }, []);

  function storageBg(background){
    if (localStorage.getItem("background") == undefined) localStorage.setItem("background", "default");
    if (background) localStorage.setItem("background", background);
  }

  function setBg(){
    const background = localStorage.getItem("background");
    document.getElementById("root").style.backgroundImage = "url('/assets/backgrounds/" + background + ".gif')";
  }

  return (
    <div className="w-full min-h-screen relative">
      {/* this is a filter for the background */}
      <div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0 z-0" />
      
      {/* content */}
      <div className="z-10 relative grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        <div className="hidden lg:inline-block"></div>
        <div className="flex justify-center items-center">
          <Pomodoro></Pomodoro>
        </div>
        <div className="hidden lg:inline-block"></div>
      </div>
    </div>
  )
}

export default HomePage