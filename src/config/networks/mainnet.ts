import PolisLogo from 'src/config/assets/token_polis.svg'
import {
  EnvironmentSettings,
  ETHEREUM_LAYER,
  ETHEREUM_NETWORK,
  SHORT_NAME,
  FEATURES,
  NetworkConfig,
  WALLETS,
} from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'https://safe-client.gnosis.io/v1',
  txServiceUrl: 'https://safe-transaction.xdai.gnosis.io/api/v1',
  gasPrice: 1e9,
  rpcServiceUrl: 'https://rpc-tracing.polis.tech',
  safeAppsRpcServiceUrl: 'https://rpc-tracing.polis.tech',
  networkExplorerName: 'Blockscout',
  networkExplorerUrl: 'https://explorer.polis.tech',
  networkExplorerApiUrl: 'https://explorer.polis.tech/api',
}

const Polis: NetworkConfig = {
  environment: {
    test: baseConfig,
    dev: baseConfig,
    staging: baseConfig,
    production: baseConfig,
  },
  network: {
    id: ETHEREUM_NETWORK.MAINNET,
    shortName: SHORT_NAME.MAINNET,
    backgroundColor: '#48A8A6',
    textColor: '#ffffff',
    label: 'Polis',
    ethereumLayer: ETHEREUM_LAYER.L2,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Polis',
      symbol: 'POLIS',
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
    WALLETS.KEYSTONE,
  ],
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP],
}

export default Polis