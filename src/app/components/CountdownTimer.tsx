
import React, {useState,useEffect} from 'react'

const CountdownTimer: React.FC = () => {
  const [time,setTime] = useState(0)
  const [isRunning,setIsRunning] = useState(false)
  const [isRemaining,setIsRemaining] = useState(0)


  useEffect(()=>{
    let timer: NodeJS.Timeout;
    if(isRunning && isRemaining > 0){
      timer =setInterval(() => {
        setIsRemaining((prev) => prev - 1)
        
      }, 1000);


    }
    else if(isRemaining === 0){
      setIsRunning(false)
      
    }
    return () => clearInterval(timer);
  }, [isRunning, isRemaining])


  const handleStart = () => {
    if(time > 0)
    setIsRunning(true)
    setIsRemaining(time)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setIsRemaining(0)
    setTime(0)
  }


  return (
    <div className='flex flex-col items-center  bg-gradient-to-br from-lime-900 to-orange-50 min-h-screen'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold italic mb-10 uppercase mt-20'>Countdown Timer</h1>
      <input type="number" className='p-3 border-2 border-black bg-transparent rounded-md mb-6 text-xl' placeholder='Enter your seconds' 
      value={time > 0 ? time : ""}
      onChange={(e) => setTime(Number(e.target.value))}
      />

      <div className='text-2xl md:text-3xl lg:text-4xl mb-6  font-semibold'>
        {isRemaining } seconds remaining
      </div>

      <div>
        <button className='px-6 py-3 bg-lime-800 text-white rounded-md hover:bg-gray-400' onClick={handleStart}>Start</button>
        <button className='px-6 py-3 bg-lime-700 text-white rounded-md hover:bg-gray-400 ml-4' onClick={handleStop}>Stop</button>
        <button className='px-6 py-3 bg-lime-600 text-white rounded-md hover:bg-gray-400 ml-4' onClick={handleReset}>Reset</button>
      </div>

      <p className='text-xl md:text-2xl lg:text-3xl mt-20 font-semibold'>
        Create By Ayesha Iqbal
      </p>
      
    </div>
  )
}

export default CountdownTimer

