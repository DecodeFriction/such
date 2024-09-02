/** @jsx jsx */
import { jsx } from "theme-ui"
import { Player, ControlBar, BigPlayButton,  CurrentTimeDisplay, TimeDivider, ProgressControl, DurationDisplay, PosterImage} from 'video-react'
import './styles/video-react.css'


const Video = ({  }) => {

  return (
    <section sx={{ my: 5 }}>

    <Player width="100%"
        playsInline
        src="https://dl.dropboxusercontent.com/s/t5vrqzozqbown3w/JasonAndersonReel.mp4"
        poster="https://dl.dropboxusercontent.com/s/78fs6tltm5w42ym/film1.jpg"

      >
        <BigPlayButton position="center" />

        <ControlBar autoHide={true} disableDefaultControls={false} >


         <CurrentTimeDisplay disabled />
         <TimeDivider disabled />
         <ProgressControl />
         <DurationDisplay disabled />


        </ControlBar>
      </Player>

      <br/>

          <Player width="100%"
              playsInline
              src="https://dl.dropboxusercontent.com/s/czho3rp7ynjhuwi/SunValley.mov"
              poster="https://dl.dropboxusercontent.com/s/gpadc8whk4dthla/film3.jpg"

            >
              <BigPlayButton position="center" />

              <ControlBar autoHide={true} disableDefaultControls={false} >


               <CurrentTimeDisplay disabled />
               <TimeDivider disabled />
               <ProgressControl />
               <DurationDisplay disabled />


              </ControlBar>
            </Player>

            <br/>

              <Player width="100%"
                  playsInline
                  src="https://dl.dropboxusercontent.com/s/5g1rvs7n2zm9k02/WinterTimeEurope.mp4"
                  poster="https://dl.dropboxusercontent.com/s/3d61gun91c647gi/film2.jpg"
                >
                  <BigPlayButton position="center" />

                  <ControlBar autoHide={true} disableDefaultControls={false} >


                   <CurrentTimeDisplay disabled />
                   <TimeDivider disabled />
                   <ProgressControl />
                   <DurationDisplay disabled />


                  </ControlBar>
                </Player>

                <br/>

                  <Player width="100%"
                      playsInline
                      src="https://dl.dropboxusercontent.com/s/gy7itpfhoo8zmw1/NoBarriers2.mov"
                      poster="https://dl.dropboxusercontent.com/s/6evump50urfx3yw/film4.jpg"
                    >
                      <BigPlayButton position="center" />

                      <ControlBar autoHide={true} disableDefaultControls={false} >


                       <CurrentTimeDisplay disabled />
                       <TimeDivider disabled />
                       <ProgressControl />
                       <DurationDisplay disabled />


                      </ControlBar>
                    </Player>

                    <br/> 

                      <Player width="100%"
                          playsInline
                          src="https://dl.dropboxusercontent.com/s/gl0tbxjt1fpn6af/Ocean.mov"
                          poster="https://dl.dropboxusercontent.com/s/becmf13y0g57xw5/film5.jpg"
                        >
                          <BigPlayButton position="center" />

                          <ControlBar autoHide={true} disableDefaultControls={false} >


                           <CurrentTimeDisplay disabled />
                           <TimeDivider disabled />
                           <ProgressControl />
                           <DurationDisplay disabled />


                          </ControlBar>
                        </Player>

                    <br/>

                      <Player width="100%"
                          playsInline
                          src="https://dl.dropboxusercontent.com/s/t1bq7de185q1k36/OnitsukaWeb.mp4"
                          poster="https://dl.dropboxusercontent.com/s/ur66qjb1nutzjdl/film6.jpg"
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
