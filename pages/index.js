import React from 'react'
import dynamic from "next/dynamic";
//import ScreenRecording from './components/ScreenRecording'
const ScreenRecording = dynamic(() => import('./components/ScreenRecording'))

//import RecordView from './components/RecordView';
const RecordView = dynamic(() => import('./components/RecordView'))

function Home() {
  return (
    <div className='content'>
      {/* <ScreenRecording
        screen={true}
        audio={false}
        video={false}
        downloadRecordingPath="Screen_Recording_Demo"
        downloadRecordingType="mp4"
        emailToSupport="pro301@empal.com"
      ></ScreenRecording> */}
      <RecordView />
    </div>
  )
}

export default Home