import { useState } from 'react';
import * as Styles from './styles';
import Footer from '@/components/footer';
import PlanetDetails from '@/components/planetdetails';
import Image from 'next/image';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer, toast } from 'react-toastify';

async function fetchPlanetList(searchTerm: string): Promise<any> {
  return fetch(`https://swapi.dev/api/planets/?search=${searchTerm}`)
    .then((response) => response.json())
    .catch((err) => err);
}

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [planetData, setPlanetData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  if (typeof window !== 'undefined') {
    injectStyle();
  }

  const handleSearch = async () => {
    setError('');
    if (!searchTerm) {
      toast.dark('Preencher o nome do Planeta');
      return;
    }
    try {
      const response = await fetchPlanetList(searchTerm);
      if (response.results.length > 0) {
        setPlanetData(response.results[0]);
      } else {
        setPlanetData(null);
        toast.error('Planeta não encontrado');
      }
    } catch (error) {
      setError('An error occurred while fetching data');
    }
  };

  const clearPlanet = () => {
    setSearchTerm('');
    setPlanetData(null);
  };

  return (
    <Styles.AppContainer>
      <Styles.Logo src="/images/Logo.png" />
      <Styles.Card>
        <Styles.CardBackground src="/images/Card_Background.png" />
        {planetData ? (
          <Styles.SpaceshipImageNone src="/images/Spaceship.png" />
        ) : (
          <Styles.SpaceshipImage src="/images/Spaceship.png" />
        )}
        <Styles.CardDescription>
          <Styles.Subtitle>
            Discover all the information about planets of the Star Wars saga
          </Styles.Subtitle>
          <Styles.Input
            type="text"
            placeholder="Enter the name of the planet"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
          <Styles.Button onClick={handleSearch}>
            <Image
              src="/images/search.png"
              alt="Search"
              width={24}
              height={24}
            />
            <span>Search</span>
          </Styles.Button>
          {error ? <p>{error}</p> : null}
        </Styles.CardDescription>
        {planetData ? <PlanetDetails planet={planetData} /> : null}
        {planetData ? (
          <Styles.BackButton onClick={clearPlanet}>
            {'< Voltar'}
          </Styles.BackButton>
        ) : null}
      </Styles.Card>
      <ToastContainer />
      <Footer />
    </Styles.AppContainer>
  );
};

export default App;
