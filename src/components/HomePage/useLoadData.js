import { useEffect, useState } from 'react';
import { getData } from 'Api/api';

export const useLoadData = () => {
  const [species, setSpecies] = useState([]);
  const [url, setUrl] = useState('https://swapi.dev/api/species/');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadSpecies = async () => {
      try {
        setIsLoading(true);
        const response = await getData(url);
        setSpecies((prevState) => [...response?.results, ...prevState]);
        if (response.next) {
          setUrl(response.next);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        // eslint-disable-next-line no-console
        console.log({ error });
      }
    };
    loadSpecies();
  }, [url]);

  return ({
    isLoading,
    species,
  });
};

export default useLoadData;
