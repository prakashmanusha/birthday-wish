import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ButterflyPage.css';

function Sparkle({ left, top, delay }) {
  return (
    <div className="bp-sparkle" style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${delay}s` }}>
      &#10022;
    </div>
  );
}

function Petal({ style }) {
  return <div className="bp-petal" style={style} />;
}

function MiniButterfly({ left, top, delay, size }) {
  return (
    <div className="bp-mini-butterfly" style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${delay}s`, fontSize: `${size}rem` }}>
      <span className="bp-mini-icon">🦋</span>
    </div>
  );
}

function ButterflyPage() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [assembled, setAssembled] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showClick, setShowClick] = useState(false);

  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  const petals = Array.from({ length: 15 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${4 + Math.random() * 4}s`,
  }));

  const miniButterflies = [
    { left: 5, top: 15, delay: 0.5, size: 2 },
    { left: 90, top: 20, delay: 1.2, size: 1.8 },
    { left: 10, top: 75, delay: 0.8, size: 1.5 },
    { left: 85, top: 70, delay: 1.5, size: 2.2 },
    { left: 50, top: 5, delay: 2, size: 1.6 },
    { left: 3, top: 45, delay: 2.5, size: 1.3 },
    { left: 93, top: 50, delay: 1.0, size: 1.9 },
  ];

  useEffect(() => {
    if (started) {
      setTimeout(() => setAssembled(true), 300);
      setTimeout(() => setShowText(true), 2800);
      setTimeout(() => setShowClick(true), 3800);
    }
  }, [started]);

  if (!started) {
    return (
      <div className="bp-app bp-start">
        <div className="bp-start-petals">
          {petals.slice(0, 8).map((p, i) => <Petal key={i} style={p} />)}
        </div>
        <div className="bp-gift" onClick={() => setStarted(true)}>
          <div className="bp-gift-lid">
            <div className="bp-gift-bow" />
          </div>
          <div className="bp-gift-body">
            <div className="bp-ribbon-v" />
            <div className="bp-ribbon-h" />
          </div>
          <p className="bp-tap">Tap to Open!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bp-app bp-celebration" onClick={() => { if (showClick) navigate('/story'); }}>
      <div className="bp-petals-bg">
        {petals.map((p, i) => <Petal key={i} style={p} />)}
      </div>

      {sparkles.map((s, i) => (
        <Sparkle key={i} left={s.left} top={s.top} delay={s.delay} />
      ))}

      {showText && miniButterflies.map((b, i) => (
        <MiniButterfly key={i} left={b.left} top={b.top} delay={b.delay} size={b.size} />
      ))}

      <div className="bp-center">
        {showText && (
          <h1 className="bp-title">
            <span className="bp-title-1">Happy</span>
            <span className="bp-title-2">Birthday!</span>
          </h1>
        )}

        {assembled && (
          <div className="bp-butterfly">
            <div className="bp-wing bp-wing-tl">
              <div className="bp-wing-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_9254.jpg)` }} />
            </div>
            <div className="bp-wing bp-wing-tr">
              <div className="bp-wing-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_9254.jpg)` }} />
            </div>
            <div className="bp-wing-sm bp-wing-bl">
              <div className="bp-wing-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_9254.jpg)` }} />
            </div>
            <div className="bp-wing-sm bp-wing-br">
              <div className="bp-wing-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_9254.jpg)` }} />
            </div>
            <div className="bp-body">
              <div className="bp-body-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_9254.jpg)` }} />
            </div>
            <div className="bp-ant bp-ant-l" />
            <div className="bp-ant bp-ant-r" />
          </div>
        )}

        {showClick && (
          <p className="bp-click-text">Tap anywhere to continue...</p>
        )}
      </div>
    </div>
  );
}

export default ButterflyPage;
