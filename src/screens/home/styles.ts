import styled from 'styled-components';
// import background from './Background.png';

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('/images/Background.png');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    background-position: 25% 75%;
  }
`;

export const Card = styled.div`
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 800px;
  height: 400px;
  top: 312px;
  @media (max-width: 768px) {
    width: 300px;
    height: auto;
    flex-direction: column;
    top: 250px;
    padding-bottom: 30px;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
`;

export const SpaceshipImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-35%, 45%);
  @media (max-width: 768px) {
    width: 300px;
    transform: translate(20%, -75%);
  }
`;

export const SpaceshipImageNone = styled.img`
  display: none;
`;

SpaceshipImageNone;

export const CardBackground = styled.img`
  width: 50%;
  height: 100%;
  @media (max-width: 768px) {
    width: 300px;
    height: 188px;
  }
`;

export const Logo = styled.img`
  width: 322px;
  position: absolute;
  top: 74px;
  @media (max-width: 768px) {
    width: 180px;
    top: 60px;
  }
`;

export const Subtitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 30px;
  }
`;

export const BackButton = styled.span`
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  bottom: -100px;
  right: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const Input = styled.input`
  font-family: 'Lato', sans-serif;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: none;
  margin-bottom: 1rem;
  font-size: 14px;
  text-align: center;
  outline: none;
  @media (max-width: 768px) {
    width: 200px;
    margin-bottom: 0.4rem;
    font-size: 11px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background-color: #c53030;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #de1212;
  }
  > img {
    margin-right: 5px;
  }
`;
