/** @jsx jsx */
import { jsx } from "theme-ui"
import { Player, ControlBar, BigPlayButton,  CurrentTimeDisplay, TimeDivider, ProgressControl, DurationDisplay} from 'video-react'
import '../styles/video-react.css'


const Video = ({  }) => {

  return (
    <section sx={{ my: 5 }}>
    <Player width="100%"
          playsInline
          src="https://dl.dropboxusercontent.com/s/t5vrqzozqbown3w/JasonAndersonReel.mp4"
        > 
          <BigPlayButton position="center" />

          <ControlBar autoHide={true} disableDefaultControls={false} >


           <CurrentTimeDisplay disabled />
           <TimeDivider disabled />
           <ProgressControl />
           <DurationDisplay disabled />


          </ControlBar>
        </Player>
        </section>
  )
}

export default Video
