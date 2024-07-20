import { motion, useAnimate } from 'framer-motion';
import './styles.css';
import { useEffect, useRef } from 'react';

export default function TextSpinnerLoader() {
  const text = 'MOVIES TO MOVE YOU, ACTION!';
  const characters = text.split('');

  const radius = 80;
  const fontSize = '18px';
  const letterSpacing = 12.5;

  const [scope, animate] = useAnimate();
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const animateLoader = async () => {
      const letterAnimation: any[] = [];

      characters.forEach((_, i) => {
        letterAnimation.push([
          letterRefs.current[i],
          { opacity: 0 },
          {
            duration: 0.3,
            at: i === 0 ? '+0.8' : '-0.28',
            transition: { ease: 'linear' },
          },
        ]);
      });
      characters.forEach((_, i) => {
        letterAnimation.push([
          letterRefs.current[i],
          { opacity: 1 },
          {
            duration: 0.3,
            at: i === 0 ? '+0.8' : '-0.28',
            transition: { ease: 'linear' },
          },
        ]);
      });
      await animate(letterAnimation, {
        repeat: Infinity,
      });
      await animate(
        scope.current,
        { rotate: 360 },
        { duration: 4, ease: 'linear', repeat: Infinity }
      );
    };
    animateLoader();
  }, [animate, characters, scope]);

  return (
    <motion.div ref={scope} className="circle" style={{ width: radius * 2 }}>
      <p aria-label={text} />
      <p aria-hidden="true" className="text">
        {characters.map((ch, i) => (
          <motion.span
            key={i}
            ref={(el) => (letterRefs.current[i] = el)}
            className={`letter letter-${i}`}
            style={{
              transformOrigin: `0 ${radius}px`,
              transform: `rotate(${i * letterSpacing}deg)`,
              fontSize,
            }}
          >
            {ch}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
