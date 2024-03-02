import React from 'react'
import { LineChart } from './LineChart'

export const SideStatistic = () => {
  return (
    <div className=" flex flex-wrap justify-center  m-3 w-[870px]">
    <div className="m-1 rounded-lg h-[168px] w-[280px] border-2 border-[#D9DCE4]">
      <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
        <p className="text-[#0E0874] text-center p-3">DAY</p>
      </div>
      <p className="text-[#0E0874] text-center pt-7">fdgfgf</p>
    </div>
    <div className="m-1 rounded-lg h-[168px] w-[280px] border-2 border-[#D9DCE4]">
      <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
        <p className="text-[#0E0874] text-center  p-3">WEEK</p>
      </div>
      <p className="text-[#0E0874] text-center pt-7">fdgfgf</p>
    </div>
    <div className="m-1 rounded-lg h-[168px] w-[280px] border-2 border-[#D9DCE4]">
      <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
        <p className="text-[#0E0874] text-center p-3">MOUNT</p>
      </div>
      <p className="text-[#0E0874] text-center pt-7">fdgfgf</p>
    </div>
    <div className=" mx-auto rounded-lg h-[48px] w-[900px]  bg-[#0E0874]">
        <p className="text-white text-center p-3">WE HAVE 12 ROLLS</p>
      </div>
    <div className="my-2 rounded-lg h-[500px] w-[900px] border-2 border-[#D9DCE4]">
      <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
        <p className="text-[#0E0874] text-center p-3">ALL TIME</p>
      </div>
      <LineChart/>
    </div>
  </div>
  )
}