import styled from 'styled-components';
import { deviceMedia } from '../../../../../styles/helper';

export const ContainerInfos = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin: auto;
  max-width: 1200px;
  ${deviceMedia.tablet`
    grid-template-columns: 1fr;
  `}
`;
export const BoxInfos = styled.div`
  width: 90%;
  min-width: 288px;
  border: 1px solid ${props => props.theme.palette.white};
  border-radius: 20px;
  margin: 2rem 0;
  padding: 1rem;
  color: ${props => props.theme.palette.white};
  ${deviceMedia.phone`
    margin: 1rem;
  `}
`;
export const BoxTitle = styled.h2`
  text-align: center;
  font-weight: bold;
`;

export const BoxSubTitle = styled.div`
  text-align: center;
  margin: 2rem 0;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${props => props.theme.palette.red};
`;

export const ContainerLinks = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
`;
