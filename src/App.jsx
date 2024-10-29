import React from 'react';
import {
  TonConnectButton,
  useTonConnect,
  TonConnectProvider,
} from '@tonconnect/ui-react';
import { Alert } from './components/Alert';

const MANIFEST_URL = 'https://your-app.com/tonconnect-manifest.json'; // Замените на ваш манифест

function App() {
  const [showNetworkError, setShowNetworkError] = React.useState(false);

  return (
    <TonConnectProvider
      manifestUrl={MANIFEST_URL}
      options={{
        networkPreference: {
          value: 'mainnet',
        },
      }}
    >
      <div className='app'>
        <h1>TON Network Check Example</h1>
        <WalletConnection setShowNetworkError={setShowNetworkError} />
        {showNetworkError && (
          <Alert
            message='Please switch to mainnet network!'
            onClose={() => setShowNetworkError(false)}
          />
        )}
      </div>
    </TonConnectProvider>
  );
}

function WalletConnection({ setShowNetworkError }) {
  const { network, wallet, disconnect } = useTonConnect();

  React.useEffect(() => {
    if (wallet && network !== 'mainnet') {
      setShowNetworkError(true);
      disconnect();
    }
  }, [wallet, network, disconnect, setShowNetworkError]);

  return (
    <div className='wallet-connection'>
      <TonConnectButton />
      {wallet && (
        <div className='wallet-info'>
          <p>Connected to: {network}</p>
          <p>Address: {wallet.account.address}</p>
        </div>
      )}
    </div>
  );
}

export default App;
