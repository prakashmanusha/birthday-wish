import React, { useState, useEffect, useRef } from 'react';
import './StoryPage.css';

const photos = [
  {
    src: `${process.env.PUBLIC_URL}/1.JPG`,
    caption: "I know you're angry with me right now...",
    sub: "But before you close this, just give me a chance. Scroll down slowly and let me remind you of something beautiful...",
    emoji: "🥺",
    tag: "Where It All Began"
  },
  {
    src: `${process.env.PUBLIC_URL}/2.JPG`,
    caption: "Remember this day? Just two people, no worries...",
    sub: "We didn't know back then that this simple moment would become one of my most precious memories. Your smile that day... I still remember it clearly.",
    emoji: "😊",
    tag: "The Good Old Days"
  },
  {
    src: `${process.env.PUBLIC_URL}/3.JPG`,
    caption: "We were always the crazy ones!",
    sub: "Nobody else would do the things we did together. From winning toys to laughing until our stomachs hurt - you made every boring day an adventure. That's your superpower, Piumi.",
    emoji: "🤪",
    tag: "Partners In Crime"
  },
  {
    src: `${process.env.PUBLIC_URL}/4.JPG`,
    caption: "Those dinner dates we'll never forget...",
    sub: "Late night conversations about life, dreams, and everything in between. You always listened, always understood. Not everyone finds a friend like that. I was lucky enough to find you.",
    emoji: "🌙",
    tag: "Midnight Memories"
  },
  {
    src: `${process.env.PUBLIC_URL}/5.JPG`,
    caption: "Every adventure was better with you",
    sub: "Whether we were exploring new places or just walking around doing nothing - it didn't matter where we went. What mattered was that we were together. You turned every trip into a story.",
    emoji: "✈️",
    tag: "Adventures Together"
  },
  {
    src: `${process.env.PUBLIC_URL}/6.JPG`,
    caption: "And then you went and made everyone proud...",
    sub: "Watching you in that red gown, standing tall and confident - I felt so proud it almost hurt. You worked so hard for this, and you absolutely deserved every bit of it.",
    emoji: "🎓",
    tag: "Proud Moment"
  },
  {
    src: `${process.env.PUBLIC_URL}/7.JPG`,
    caption: "Your graduation - the day I was proudest of you",
    sub: "Standing next to you on that day meant the world to me. You've come so far, achieved so much. This wasn't just your achievement - it was proof that hard work and a beautiful soul always win.",
    emoji: "🏆",
    tag: "Achievement Unlocked"
  },
  {
    src: `${process.env.PUBLIC_URL}/IMG_9254.jpg`,
    caption: "Look at you... absolutely stunning",
    sub: "This photo says everything. Confident, beautiful, unstoppable. This is the Piumi I know - someone who lights up every room, every photo, every life she touches. The world is better because you're in it.",
    emoji: "👑",
    tag: "Queen Energy"
  },
];

function Petal({ style }) {
  return <div className="sp-petal" style={style} />;
}

function PhotoSection({ photo, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`sp-photo-section ${visible ? 'visible' : ''} ${isLeft ? 'from-left' : 'from-right'}`}>
      {/* Background decoration */}
      <div className="sp-section-bg-deco">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="sp-bg-sparkle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}>&#10022;</span>
        ))}
        <div className="sp-deco-line left-line" />
        <div className="sp-deco-line right-line" />
      </div>

      <div className={`sp-photo-row ${isLeft ? 'img-left' : 'img-right'}`}>
        <div className="sp-photo-side">
          <div className="sp-photo-tag">{photo.tag}</div>
          <div className="sp-photo-frame">
            <img src={photo.src} alt={`Memory ${index + 1}`} className="sp-memory-photo" />
            <div className="sp-photo-overlay" />
            <div className="sp-photo-number">{index + 1}</div>
          </div>
          <div className="sp-photo-emoji">{photo.emoji}</div>
        </div>

        <div className="sp-photo-text">
          <div className="sp-text-deco-top">~ ~ ~</div>
          <p className="sp-caption">{photo.caption}</p>
          <div className="sp-divider">
            <span className="sp-divider-heart">&#10084;</span>
          </div>
          <p className="sp-sub">{photo.sub}</p>
          <div className="sp-text-hearts">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="sp-float-heart" style={{ animationDelay: `${i * 0.4}s` }}>&#10084;</span>
            ))}
          </div>
          <div className="sp-text-butterflies">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="sp-text-bf" style={{ animationDelay: `${i * 1.2}s` }}>🦋</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SorrySection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`sp-sorry ${visible ? 'visible' : ''}`}>
      <div className="sp-sorry-sparkles">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="sp-sorry-spark" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}>&#10022;</span>
        ))}
      </div>
      <div className="sp-sorry-content">
        <div className="sp-tears">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="sp-tear" style={{ animationDelay: `${i * 0.35}s`, left: `${8 + i * 13}%` }} />
          ))}
        </div>
        <div className="sp-sorry-emoji">😢</div>
        <h2 className="sp-sorry-title">I'm Sorry...</h2>
        <div className="sp-sorry-divider"><span>&#10084;</span></div>
        <p className="sp-sorry-text">
          I know I've made mistakes. I know sometimes I hurt you without even realizing it.
          But please know that you're one of the most important people in my life.
        </p>
        <p className="sp-sorry-text">
          Every time I think about losing this friendship, it scares me more than anything.
          You're someone who understood me when nobody else did.
        </p>
        <p className="sp-sorry-text">
          Our friendship means the world to me, and I never want to lose it.
          No matter what happens, no matter how angry you are - I'll always be here for you.
          Always. That's a promise.
        </p>
        <div className="sp-heart-repair">
          <span className="sp-heart-l">&#10084;</span>
          <span className="sp-heart-r">&#10084;</span>
        </div>
        <p className="sp-forgive-text">Can we go back to how we were? 🥺</p>
      </div>
    </div>
  );
}

function CakeSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`sp-cake-section ${visible ? 'visible' : ''}`}>
      <div className="sp-cake-sparkles">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="sp-cake-spark" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            fontSize: `${0.8 + Math.random() * 0.8}rem`,
          }}>&#10022;</span>
        ))}
      </div>

      <div className="sp-cake-emoji-top">🎂</div>
      <h2 className="sp-cake-title">Make a Wish!</h2>
      <p className="sp-cake-subtitle">Close your eyes and blow the candles...</p>

      <div className="sp-cake">
        <div className="sp-candle-row">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="sp-candle">
              <div className="sp-flame">
                <div className="sp-flame-inner" />
              </div>
              <div className="sp-candle-glow" />
            </div>
          ))}
        </div>
        <div className="sp-layer sp-layer-top">
          <div className="sp-drip sp-d1" />
          <div className="sp-drip sp-d2" />
          <div className="sp-drip sp-d3" />
          <div className="sp-drip sp-d4" />
          <div className="sp-drip sp-d5" />
          <div className="sp-cake-label">Happy Birthday Piumi</div>
        </div>
        <div className="sp-layer sp-layer-mid">
          <div className="sp-mid-deco">
            {[...Array(6)].map((_, i) => <span key={i} className="sp-star-deco">&#10022;</span>)}
          </div>
        </div>
        <div className="sp-layer sp-layer-bot">
          <div className="sp-dots">
            {[...Array(10)].map((_, i) => <span key={i} className="sp-dot" />)}
          </div>
        </div>
        <div className="sp-cake-base" />
      </div>

      <div className="sp-confetti-burst">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="sp-confetti" style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: ['#f8bbd0','#ce93d8','#b39ddb','#e1bee7','#f48fb1','#ba68c8'][i % 6],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            width: `${6 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 5}px`,
          }} />
        ))}
      </div>

      <div className="sp-final-wish">
        <div className="sp-wish-crown">👑</div>
        <p className="sp-wish-name">Dear Piumi,</p>
        <div className="sp-wish-divider"><span>&#10084; &#10084; &#10084;</span></div>
        <p className="sp-wish-body">
          On your special day, I want you to know how grateful I am to have you as my friend.
          You light up every room you walk into, and your smile can make anyone's day better.
          The world doesn't know how lucky it is to have someone like you.
        </p>
        <p className="sp-wish-body">
          I hope this new year of your life brings you everything you've ever dreamed of -
          all the love, success, and happiness you truly deserve. May every door open for you,
          may every dream come true, and may you always keep that beautiful smile.
        </p>
        <p className="sp-wish-body">
          No matter where life takes us, I'll always cherish every memory we've made together.
          You're not just a friend - you're family. You're the kind of person who makes
          this world a better place just by being in it.
        </p>
        <p className="sp-wish-body">
          Thank you for every laugh, every tear, every crazy adventure, every late night talk,
          and every moment of silence that felt comfortable because it was with you.
          I wouldn't trade our friendship for anything in this world.
        </p>
        <div className="sp-wish-emoji-row">
          <span>🎂</span><span>🎁</span><span>🎈</span><span>🦋</span><span>👑</span>
        </div>
        <p className="sp-wish-sign">
          Happy Birthday!<br />
          With all my love and respect,<br />
          <span className="sp-purple-heart">&#128156;</span>
        </p>
        <div className="sp-wish-bottom-hearts">
          {[...Array(7)].map((_, i) => (
            <span key={i} className="sp-wish-bh" style={{ animationDelay: `${i * 0.3}s` }}>&#10084;</span>
          ))}
        </div>
      </div>

      <div className="sp-final-butterflies">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="sp-final-bf" style={{
            animationDelay: `${i * 0.5}s`,
            left: `${3 + i * 8}%`,
            top: `${5 + (i % 4) * 22}%`,
            fontSize: `${1.2 + Math.random() * 1.2}rem`
          }}>🦋</span>
        ))}
      </div>
    </div>
  );
}

function StoryPage() {
  const audioRef = useRef(null);

  const petals = Array.from({ length: 25 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${4 + Math.random() * 4}s`,
  }));

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="sp-app">
      <audio ref={audioRef} autoPlay loop>
        <source src="https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3" type="audio/mpeg" />
      </audio>

      <div className="sp-petals-bg">
        {petals.map((p, i) => <Petal key={i} style={p} />)}
      </div>

      {/* Hero */}
      <div className="sp-hero">
        <div className="sp-hero-sparkles">
          {[...Array(25)].map((_, i) => (
            <span key={i} className="sp-sparkle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}>&#10022;</span>
          ))}
        </div>
        <div className="sp-hero-butterflies">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="sp-hero-bf" style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              fontSize: `${1.5 + Math.random()}rem`
            }}>🦋</span>
          ))}
        </div>
        <h1 className="sp-hero-title">
          <span className="sp-hero-1">Hey Piumi...</span>
          <span className="sp-hero-2">I Have Something For You</span>
        </h1>
        <p className="sp-hero-sub">I know you're angry... but please, just scroll down slowly</p>
        <p className="sp-hero-sub2">Let me take you through our memories one more time...</p>
        <div className="sp-scroll-arrow"><span>&#8964;</span></div>
      </div>

      {/* Transition text */}
      <div className="sp-transition-text">
        <p>Our Story...</p>
        <div className="sp-transition-line" />
      </div>

      {/* Photos */}
      {photos.map((photo, i) => (
        <PhotoSection key={i} photo={photo} index={i} />
      ))}

      {/* Transition before sorry */}
      <div className="sp-transition-text">
        <p>And now... something from my heart</p>
        <div className="sp-transition-line" />
      </div>

      {/* Sorry */}
      <SorrySection />

      {/* Transition before cake */}
      <div className="sp-transition-text">
        <p>But today is YOUR day!</p>
        <div className="sp-transition-line" />
      </div>

      {/* Cake */}
      <CakeSection />

      <footer className="sp-footer">
        <p>Made with &#10084; just for you, Piumi</p>
        <div className="sp-footer-hearts">
          {[...Array(7)].map((_, i) => (
            <span key={i} className="sp-fh" style={{ animationDelay: `${i * 0.25}s` }}>&#10084;</span>
          ))}
        </div>
        <p className="sp-footer-small">Friends Forever - No Matter What</p>
      </footer>
    </div>
  );
}

export default StoryPage;
