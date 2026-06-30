import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BlurText from "./assets/BlurText";
import ButtonWrapper from './assets/ButtonWrapper';
import { FiPlus, FiMinus } from "react-icons/fi";
import BubbleText from './assets/BubbleText';

function App() {
  const [count, setCount] = useState(0);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const addValue = () => {
    setCount(count + 1);
  }

  const subtractValue = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center text-center container">
        <BlurText
          text="Welcome to the counter!!"
          delay={50}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="hero-title mb-8"
        // style={{ fontSize: '13rem' }}
        />
        {/* <RippleButton>
          Ripple Button
          <RippleButtonRipples />
        </RippleButton> */}
        <BubbleText num={count} />


        <div className="flex flex-row gap-2">
          <ButtonWrapper name="Add value" icon={FiPlus} onClick={addValue} count={count} />
          <ButtonWrapper name="Subtract value" icon={FiMinus} onClick={subtractValue} count={count} />

        </div>

      </div>
    </>
  )
}

export default App
