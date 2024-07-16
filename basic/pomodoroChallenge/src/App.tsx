import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/styles/theme';
import GlobalStyle from './shared/styles/GlobalStyle';

import Header from './components/Header';
import Wrapper from './components/Wrapper';
import {
  Colone,
  TimerColoneContainer,
  TimerContainer,
  TimerMinute,
  TimerSecond,
  timerVariant,
} from './components/Timer';
import { Button, ButtonContainer } from './components/Button';
import {
  RecordBox,
  RecordContainer,
  RecordGoal,
  RecordGoalNumber,
  RecordRound,
  RecordRoundNumber,
} from './components/Record';
import { useEffect, useState } from 'react';

const TIMER_DURATION = 25 * 60 * 1000;
const INTERVAL = 1000;

const App = () => {
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isPaused, setIsPaused] = useState(true);

  const [recordMinutes, setRecordMinutes] = useState(0);

  useEffect(() => {
    let timer: number;

    if (!isPaused) {
      timer = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= INTERVAL) {
            clearInterval(timer);
            setRecordMinutes((prev) => prev + 1);
            setIsPaused(true);
            return TIMER_DURATION;
          }
          return prevTime - INTERVAL;
        });
      }, INTERVAL);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    '0'
  );
  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const resetTimer = () => {
    setTimeLeft(TIMER_DURATION);
    setIsPaused(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Header>POMODORO</Header>
          <TimerContainer>
            <AnimatePresence mode="wait">
              <TimerMinute
                key={minutes}
                variants={timerVariant}
                initial="initial"
                animate="visible"
                exit="exit"
              >
                {minutes}
              </TimerMinute>
            </AnimatePresence>
            <TimerColoneContainer>
              <Colone />
              <Colone />
            </TimerColoneContainer>
            <AnimatePresence mode="wait">
              <TimerSecond
                key={seconds}
                variants={timerVariant}
                initial="initial"
                animate="visible"
                exit="exit"
              >
                {seconds}
              </TimerSecond>
            </AnimatePresence>
          </TimerContainer>
          <ButtonContainer>
            <Button
              onClick={togglePause}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPaused ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </Button>
          </ButtonContainer>
          <RecordContainer>
            <RecordBox>
              <RecordRoundNumber>{recordMinutes}/4</RecordRoundNumber>
              <RecordRound>Round</RecordRound>
            </RecordBox>
            <RecordBox>
              <RecordGoalNumber>0/12</RecordGoalNumber>
              <RecordGoal>Goal</RecordGoal>
            </RecordBox>
          </RecordContainer>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
