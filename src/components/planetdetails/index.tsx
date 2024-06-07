import React, { useEffect, useState } from 'react';
import * as Styles from './styles';
import axios from 'axios';
import Image from 'next/image';

interface PlanetDetailsProps {
  planet: any;
}

const PlanetDetails: React.FC<PlanetDetailsProps> = ({ planet }) => {
  const [films, setFilms] = useState<any[]>([]);
  const [residents, setResidents] = useState<any[]>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const filmRequests = planet.films.map((url: string) => axios.get(url));
      const filmResponses = await Promise.all(filmRequests);
      setFilms(filmResponses.map((response) => response.data));
    };

    const fetchResidents = async () => {
      const residentRequests = planet.residents.map((url: string) =>
        axios.get(url),
      );
      const residentResponses = await Promise.all(residentRequests);
      setResidents(residentResponses.map((response) => response.data));
    };

    fetchFilms();
    fetchResidents();
  }, [planet]);

  return (
    <Styles.CardContainer>
      <Styles.DivNamePlanet>
        <Styles.DivLeft>
          <Image
            src={`/images/${planet.name.toLowerCase()}.png`}
            alt="Search"
            width={83}
            height={83}
          />
          <Styles.Title>
            Planet: <br /> <span>{planet.name}</span>
          </Styles.Title>
        </Styles.DivLeft>
        <Styles.Info>
          <Styles.InfoTitle>
            <Styles.Item>
              <Image
                src="/images/icon_thermometer.png"
                alt="Search"
                width={15}
                height={15}
              />
              <p>Climate: </p>
              <span>{planet.climate}</span>
            </Styles.Item>
            <Styles.Item>
              <Image
                src="/images/icon_terrain.png"
                alt="Search"
                width={15}
                height={15}
              />
              <p>Terrain: </p>
              <span>{planet.terrain}</span>
            </Styles.Item>
            <Styles.Item>
              <Image
                src="/images/icon_audience.png"
                alt="Search"
                width={15}
                height={15}
              />
              <p>Population: </p>
              <span>{planet.population}</span>
            </Styles.Item>
          </Styles.InfoTitle>
        </Styles.Info>
      </Styles.DivNamePlanet>
      <Styles.BoxContainer>
        <Styles.Residents>
          <Styles.Subtitle>
            <Image
              src="/images/icon_people.png"
              alt="Search"
              width={15}
              height={15}
            />
            <span>Residents:</span>
            <Styles.Divisor />
          </Styles.Subtitle>
          {residents.map((resident) => (
            <span key={resident.url}>{resident.name},</span>
          ))}
        </Styles.Residents>
        <Styles.Films>
          <Styles.Subtitle>
            <Image
              src="/images/icon_people.png"
              alt="Search"
              width={15}
              height={15}
            />
            <span>Films: ({films.length})</span>
            <Styles.Divisor />
          </Styles.Subtitle>
          {films.map((film) => (
            <span key={film.url}>{film.title},</span>
          ))}
        </Styles.Films>
      </Styles.BoxContainer>
    </Styles.CardContainer>
  );
};

export default PlanetDetails;
