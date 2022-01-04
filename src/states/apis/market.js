export const fetchMarketData = () => {
  return fetch(`https://api.coingecko.com/api/v3/coins/masq`)
    .then((response) => response.json())
    .then((response) => response.market_data)
    .then((response) => {
      const { market_cap, current_price, max_supply } = response;
      return {
        marketCap: market_cap.usd,
        currentPrice: current_price.usd,
        maxSupply: max_supply,
      };
    })
    .catch((e) => {
      console.error("fetching market data", e);
      return null;
    });
};
