import {
  TonConnectButton,
  useTonConnectUI,
  TonConnectUIProvider,
  type Wallet,
} from '@tonconnect/ui-react';
import { useState, useEffect, memo } from 'react';
import { Alert } from './components/Alert';

// Constants to avoid magic strings/numbers
const CONSTANTS = {
  TESTNET_CHAIN_ID: '-3',
  MANIFEST_URL:
    'https://raw.githubusercontent.com/veebull/ton-network-check/refs/heads/main/public/tonconnect-manifest.json',
} as const;

// Memoized Alert component to prevent unnecessary re-renders
const MemoizedAlert = memo(Alert);

/**
 * Main application component handling TON wallet connection and network validation
 * @returns React.ReactElement
 */
function App() {
  const [tonConnectUI] = useTonConnectUI();
  const [showNetworkAlert, setShowNetworkAlert] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Handles wallet status changes and enforces mainnet-only connections
     * @param wallet - Connected wallet instance or null
     */
    const handleStatusChange = async (wallet: Wallet | null): Promise<void> => {
      if (wallet?.account.chain === CONSTANTS.TESTNET_CHAIN_ID) {
        await tonConnectUI.disconnect();
        setShowNetworkAlert(true);
      } else {
        setShowNetworkAlert(false);
      }
    };

    const unsubscribe = tonConnectUI.onStatusChange(handleStatusChange);

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [tonConnectUI]);

  return (
    <div className='App' style={styles.container}>
      <h1 style={styles.title}>TON Network Validator</h1>
      <div style={styles.buttonContainer}>
        <TonConnectButton />
      </div>

      {showNetworkAlert && (
        <MemoizedAlert
          message='Connected to app failed. Please switch to TON mainnet to continue'
          onClose={() => setShowNetworkAlert(false)}
        />
      )}
    </div>
  );
}

// Extracted styles for better maintainability
const styles = {
  container: {
    maxHeight: '100vh',
    minWidth: '100vw',
  },
  title: {
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
    padding: '20px',
  },
} as const;

/**
 * Provider wrapper component for TON Connect integration
 * @returns React.ReactElement
 */
const AppWrapper = memo(() => (
  <TonConnectUIProvider manifestUrl={CONSTANTS.MANIFEST_URL}>
    <App />
  </TonConnectUIProvider>
));

export default AppWrapper;
