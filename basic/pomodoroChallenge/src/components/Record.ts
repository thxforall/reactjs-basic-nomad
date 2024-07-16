import styled from 'styled-components';
import { theme } from '../shared/styles/theme';

export const RecordContainer = styled.section`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  gap: 120px;
  font-size: 2rem;
`;

export const RecordBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const RecordRound = styled(RecordBox)`
  color: ${theme.color.headline};
`;

export const RecordRoundNumber = styled(RecordBox)`
  color: ${theme.color.paragraph};
  opacity: 0.6;
`;

export const RecordGoal = styled(RecordBox)`
  color: ${theme.color.headline};
`;
export const RecordGoalNumber = styled(RecordBox)`
  color: ${theme.color.paragraph};
  opacity: 0.6;
`;
