import { useParams } from 'react-router-dom';

const Coin = () => {
  const { coinId } = useParams<Record<string, string | undefined>>();
  if (!coinId) {
    return <h1>Wrong Coin Id!</h1>;
  }
  return <h1>Coin: {coinId}</h1>;
};

export default Coin;
