import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const CoinsItem = styled.li`
  background-color: ${(props) => props.theme.sectionColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 0.5rem;
  border-radius: 16px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.2);
  a {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const FetchErrorCoin = [
  {
    id: 'btc-bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'eth-ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'hex-hex',
    name: 'HEX',
    symbol: 'HEX',
    rank: 3,
    is_new: false,
    is_active: true,
    type: 'token',
  },
];

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

  interface RouterState {
    state: {
      name: string;
    };
  }

  const { state } = useLocation() as RouterState;

  const proxyCoinFetch =
    'https://proxy.cors.sh/https://api.coinpaprika.com/v1/coins';

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(proxyCoinFetch);
        const data = await response.json();
        setLoading(false);
        setCoins(data.slice(0, 100));
      } catch (error) {
        setLoading(false);
        setCoins(FetchErrorCoin);
      }
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {loading ? (
        <Loader>Loading ...</Loader>
      ) : (
        <CoinList>
          {coinsArray.map((coin) => (
            <CoinsItem key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.id }}>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  alt={`${coin.id}`}
                />
                {coin.name} &rarr;
              </Link>
            </CoinsItem>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
