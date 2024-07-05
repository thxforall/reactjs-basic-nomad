import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 1rem;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CoinList = styled.ul``;

const CoinsItem = styled.li`
  background-color: ${(props) => props.theme.sectionColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 0.5rem;
  border-radius: 16px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.2);
  a {
    padding: 1rem;
    display: block;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.accentColor};
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const [coinsArray, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const endpoint = 'https://proxy.cors.sh/https://api.coinpaprika.com/v1/coins';

  useEffect(() => {
    (async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      setCoins(data.slice(0, 100));
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinList>
        {coinsArray.map((coin) => (
          <CoinsItem key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </CoinsItem>
        ))}
      </CoinList>
    </Container>
  );
};

export default Coins;
