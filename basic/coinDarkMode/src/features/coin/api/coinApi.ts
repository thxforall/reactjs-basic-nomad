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

const BASE_URL = `https://proxy.cors.sh/https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  try {
    return FetchErrorCoin;
  } catch (error) {
    return FetchErrorCoin;
  }
};

export const fetchCoinInfo = async (coinId: string) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
};

export const fetcCoinTickers = async (coinId: string) => {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
};
