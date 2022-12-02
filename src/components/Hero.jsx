import { Stack } from 'react-bootstrap';
import { services } from '../config';
import BtnService from './atoms/BtnService';

function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="cardHero card border-0">
          <h2>Your Food</h2>
          <h2>
            Your <span>Choice</span>{' '}
          </h2>
          <p> Save Your Health with Your Food Choice</p>
        </div>
        <img className="img-fluid " src="/images/Hero.png" alt="" />
      </div>
      <Stack className="d-flex mt-5 flex-wrap flex-row justify-content-around gap-3">
        {services.map((btn, i) => (
          <BtnService
            key={i}
            text1={btn.text1}
            text2={btn.text2}
            icon={btn.icon}
          />
        ))}
      </Stack>
    </div>
  );
}

export default Hero;
