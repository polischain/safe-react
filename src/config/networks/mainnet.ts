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
  clientGatewayUrl: 'https://safe-client.polis.tech/v1',
  txServiceUrl: 'https://safe-txs.polis.tech/api/v1',
  safeUrl: 'https://safe.polis.tech',
  gasPrice: 1e9,
  rpcServiceUrl: 'https://rpc-tracing.polis.tech',
  safeAppsRpcServiceUrl: 'https://rpc-tracing.polis.tech',
  networkExplorerName: 'Blockscout',
  networkExplorerUrl: 'https://explorer.polis.tech',
  networkExplorerApiUrl: 'https://explorer.polis.tech/api',
}

const olympus: NetworkConfig = {
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
    id: ETHEREUM_NETWORK.MAINNET,
    backgroundColor: '#48A8A6',
    textColor: '#ffffff',
    label: 'Olympus',
    isTestNet: false,
    ethereumLayer: ETHEREUM_LAYER.L2,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Polis',
      symbol: 'POLIS',
      decimals: 18,
      logoUri: PolisLogo,
    },
  },
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP],
  disabledWallets: [WALLETS.LATTICE],
}

export default olympus
