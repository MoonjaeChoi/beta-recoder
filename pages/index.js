import React from 'react'
//import ScreenRecording from './components/ScreenRecording'

import dynamic from "next/dynamic";

const ScreenRecording = dynamic(() => import('./components/ScreenRecording'))

function Home() {
  return (
    <div className='content'>
      <ScreenRecording
        screen={true}
        audio={false}
        video={false}
        downloadRecordingPath="Screen_Recording_Demo"
        downloadRecordingType="mp4"
        emailToSupport="pro301@empal.com"
      ></ScreenRecording>
    </div>
  )
}

export default Home