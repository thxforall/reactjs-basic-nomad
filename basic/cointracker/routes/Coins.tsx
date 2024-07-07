import { useQuery } from '@tanstack/react-query';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoins } from './api';

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

const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.accentColor};
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface RouterState {
  state: {
    name: string;
  };
}

const Coins = () => {
  const { isLoading, data } = useQuery<ICoin[]>({
    queryKey: ['allCoins'],
    queryFn: fetchCoins,
    select: (data) => data.slice(0, 20),
  });
  // const [coinsArray, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  const { state } = useLocation() as RouterState;

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading ...</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
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
