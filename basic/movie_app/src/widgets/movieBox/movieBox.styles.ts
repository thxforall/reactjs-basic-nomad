import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MovieBoxWrapper = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const MovieImgBox = styled(motion.div)`
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadow.medium};
  img {
    border-radius: ${(props) => props.theme.size.radius.small};
  }
`;

export const MovieTitle = styled(motion.h4)`
  text-align: center;
  margin-top: 8px;
`;
