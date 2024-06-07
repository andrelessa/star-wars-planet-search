import styled from 'styled-components';

export const Footer = styled.div`
  background-color: #fff;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Text = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  margin-right: 60px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 85px;
  margin-left: 65px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Divisor = styled.div`
  background-color: #000000;
  width: 1px;
  height: 45px;
  @media (max-width: 768px) {
    display: none;
  }
`;
