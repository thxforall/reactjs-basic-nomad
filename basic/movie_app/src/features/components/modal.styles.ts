import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalWrapper = styled(motion.div)`
  width: 600px;
  height: 700px;
  background: ${(props) => props.theme.color.background};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const ModalOverlay = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImgSection = styled.div<{ imgPath: string }>`
  width: 100%;
  height: 50%;
  background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 50%,
      rgba(20, 20, 20, 1) 100%
    ),
    url(${(props) => props.imgPath}) no-repeat center center;
  background-size: cover;
  box-shadow: inset 0px 0px 8px 8px rgba(20, 20, 20, 1);
`;

export const ModalInfoSection = styled.div`
  margin-top: -100px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const ModalInfoTitle = styled.h1`
  font-size: 4rem;
`;

export const ModalInfoOverview = styled.p`
  font-size: 1.2rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 48px;
`;

export const ModalInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalInfoListItem = styled.li`
  padding: 0 16px;
`;
