import styled from 'styled-components';

// Styled Components
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  position: absolute;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  padding: 0px 24px;
  @media (max-width: 768px) {
    height: auto;
    width: 355px;
  }
`;

export const DivLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivNamePlanet = styled.div`
  width: 100%;
  margin-top: 21px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  margin-left: 11px;
  font-weight: 300;
  font-size: 14px;
  color: #000000;
  top: 65px;
  > span {
    font-size: 18px;
    font-weight: 900;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  > img {
    margin-right: 17px;
  }
  > span {
    font-weight: 400;
    margin-left: 3px;
  }
`;

export const BoxContainer = styled.div`
  margin-bottom: 26px;
  width: 100%;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const InfoItem = styled.div`
  text-align: center;
`;

export const InfoTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  margin: 10px 0 5px;
  font-size: 14px;
  font-weight: 700;
  color: #000;
`;

export const Subtitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  margin: 10px 0 18px;
  font-size: 14px;
  color: #000;
  > img {
    margin-right: 5px;
  }
`;

export const Residents = styled.div`
  background-color: #f1f1f1;
  padding: 14px 20px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  > span {
    font-size: 14px;
  }
`;

export const Divisor = styled.div`
  background-color: #909090;
  width: 100%;

  height: 1px;
`;

export const Films = styled.div`
  background-color: #f1f1f1;
  padding: 14px 20px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  > img {
    margin-right: 5px;
  }
  > span {
    font-size: 14px;
  }
`;

const FilmItem = styled.p`
  margin: 5px 0;
`;

const ResidentItem = styled.p`
  margin: 5px 0;
`;
