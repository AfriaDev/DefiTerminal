const pairs = [
  {
    name: 'WETHDAI',
    description: 'Wrapped Ethereum Version 9 Over Dai StableCoin',
    stableToken: 'DAI',
    tradingToken: 'WETH'
  },
  {
    name: 'WETHUSDC',
    description: 'Wrapped Ethereum Version 9 Over USD-Coin StableCoin',
    stableToken: 'USDC',
    tradingToken: 'WETH'
  },
  {
    name: 'WBNBBUSDC',
    description: 'Wrapped Binance Coin Over Binance Pegged USD Coin',
    stableToken: 'BUSDC',
    tradingToken: 'WBNB'
  },
  {
    name: 'WBNBBUSD',
    description: 'Wrapped Binance Coin Over Binance Pegged USD',
    stableToken: 'BUSD',
    tradingToken: 'WBNB'
  }
];

const exchanges = [
  {
    name: 'Uniswap',
    description: 'Uniswap Decentralized Exchange'
  },
  {
    name: 'Kyber',
    description: 'Kyber Decentralized Exchange'
  },
  {
    name: 'Sushiswap',
    description: 'Sushiswap Decentralized Exchange'
  },
  {
    name: 'Pancakeswap',
    description: 'Pancakeswap Decentralized Exchange'
  },
  {
    name: 'Bakeryswap',
    description: 'Bakeryswap Decentralized Exchange'
  }
];

const networks = [
  {
    name: 'Mainnet',
    description: 'The Main Network'
  },
  {
    name: 'Kovan',
    description: 'The Ethereum Kovan Test Network'
  },
  {
    name: 'Ropsten',
    description: 'The Ethereum Ropsten Test Network'
  },
  {
    name: 'Local',
    description: 'Local Test Network'
  }
]

exports.pairs = pairs.map(function(pair) {
  return {
    name: pair.name,
    stableToken: pair.stableToken,
    tradingToken: pair.tradingToken
  };
});

exports.exchanges = exchanges.map(function (exchange) {
  return exchange.name;
});

exports.networks = networks.map(function (network) {
  return network.name;
})
