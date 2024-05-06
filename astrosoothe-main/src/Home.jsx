import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './components/Home/TextBlock';
import './styles/Home.css'

function App() {

    return (
      <>
         <Parallax pages={2} style={{ top: '0', left: '0'}} className="animation">
          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation_layer parallax" id="backdrop"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-0.6}>
            <div className="animation_layer parallax" id="stars"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-0.5}>
            <div className="animation_layer parallax" id="moon"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.4}>
            <div className="animation_layer parallax" id="wave"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.8} factor={2} horizontal>
            <div className="animation_layer parallax" id="cloud-left"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-0.8} factor={2} horizontal>
            <div className="animation_layer parallax" id="cloud-right"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-1}>
            <div className="animation_layer parallax" id="welcome">
              <h1>Orbit Around Your <br/> Wellness Space</h1>
              <p>Navigate your journey towards soothing serenity.</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.6}>
            <div className="animation_layer parallax" id="foreground"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.25}>
            <TextBlock />
          </ParallaxLayer>

        </Parallax>
      </>
    )
  }

export default App