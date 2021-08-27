import PolisLogo from 'src/config/assets/token_polis.svg'

import {
  EnvironmentSettings,
  ETHEREUM_LAYER,
  ETHEREUM_NETWORK,
  FEATURES,
  NetworkConfig,
  WALLETS,
} from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'https://safe-client.gnosis.io/v1',
  txServiceUrl: 'https://safe-transaction.xdai.gnosis.io/api/v1',
  safeUrl: 'https://safe.polis.tech/app',
  gasPrice: 1e9,
  rpcServiceUrl: 'https://sparta-rpc.polis.tech/',
  safeAppsRpcServiceUrl: 'https://sparta-rpc.polis.tech/',
  networkExplorerName: 'Blockscout',
  networkExplorerUrl: 'https://sparta-explorer.polis.tech',
  networkExplorerApiUrl: 'https://sparta-explorer.polis.tech/api',
}

const Sparta: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
    },
    production: {
      ...baseConfig,
    },
  },
  network: {
    id: ETHEREUM_NETWORK.SPARTA,
    backgroundColor: '#48A8A6',
    textColor: '#ffffff',
    label: 'Sparta',
    isTestNet: true,
    ethereumLayer: ETHEREUM_LAYER.L2,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'tPOLIS',
      symbol: 'tPOLIS',
      decimals: 18,
      logoUri: PolisLogo,
    },
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.LEDGER,
    WALLETS.COINBASE,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
  ],
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP],
}

export default Sparta
