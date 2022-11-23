import React, {useEffect, useState} from 'react';
import BtnStartStop from './BtnStartStop';

function Pomodoro() {
  const [cycleLength, setCycleLength] = useState(2);
  const [breakLength, setBreakLength] = useState(4);
  const [longBreakLength, setLongBreakLength] = useState(6);
  const [cycle, setCycle] = useState(1);
  const [isStarted, setIsStarted] = useState(false);
  const [seconds, setSeconds] = useState(1);
  const [time, setTime] = useState(cycleLength);
	const [currentPercent, setCurrentPercent] = useState(100);

  useEffect(() => {
		// Sets the document title
		setDocumentTitle();
		
    if (isStarted){
      let intervalo = setInterval(() => {
				setSeconds(seconds => seconds + 1);

				// Depending of the cycle, sets the current time and percent of
				// the cycle / break / longBreak
				if ((cycle % 2) != 0) {
					setTime(cycleLength - seconds);
					setCurrentPercent(100 - ((seconds * 100) / cycleLength));
				}
				if ((cycle % 2) == 0 && (cycle % 8) != 0) {
					setTime(breakLength - seconds);
					setCurrentPercent(100 - ((seconds * 100) / breakLength));
				} 
				if ((cycle % 2) == 0 && (cycle % 8) == 0) {
					setTime(longBreakLength - seconds);
					setCurrentPercent(100 - ((seconds * 100) / longBreakLength));
				}
        // When the clock reaches 0, calls this function
        if (time - 1 == 0) nextCycle();
      }, 1000);
      
      return () => clearInterval(intervalo);
    }
  }, [isStarted, seconds]);

  // Resets seconds to 0 and adds the next cycle
  function nextCycle(){
    setSeconds(0);
    setCycle(cycle => cycle + 1);
  }

	// Resets pomodoro
	function resetPomodoro(){
		setCycle(0);
		setSeconds(1);
		setTime(cycleLength);
		setCurrentPercent(100);
		setIsStarted(false);
	}

	// If recieve 1 this converts to 01
	const filterTime = (number) => (Math.floor(number)).toLocaleString('es-ES', {minimumIntegerDigits: 2, useGrouping:false});

  // Sets the document title
  const setDocumentTitle = () => document.title = filterTime(time/60) + ":" + filterTime(time%60) + " | Pomodoro";

  return (
		<div className="flex flex-col items-center">
			<p className="font-bold text-7xl sm:text-10xl text-gray-100 whitespace-nowrap">{ filterTime(time/60) + " : " + filterTime(time%60) }</p>
			<div className="flex gap-4 items-center justify-center mt-2 sm:mt-0">
				{/* start stop btn */}
				<BtnStartStop percent={currentPercent} isStarted={isStarted} update={(e) => setIsStarted(e)} />
				{/* reset all pomodoro btn */}
				<button className="text-gray-100" onClick={() => {resetPomodoro()}}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.8" stroke="currentColor" className="w-6 sm:w-8 h-6 sm:h-8 transition duration-300">
						<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
					</svg>
				</button>
				{/* config pomodoro btn */}
				<button className="text-gray-100" onClick={() => {}}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 sm:w-9 h-7 sm:h-9">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
				</button>
			</div>
		</div>
  );
}

export default Pomodoro