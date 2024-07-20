import { motion } from 'framer-motion';
import styled from 'styled-components';

export const bannerVar = {};

export const BannerWrapper = styled(motion.div)<{ bgPhoto: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 50%,
      rgba(20, 20, 20, 1) 100%
    ),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 5rem;
  margin-bottom: 18px;
`;

export const Overview = styled.p`
  width: 40%;
  font-size: 1.2rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
