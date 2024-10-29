# TON Network Validator

A professional React application that implements TON Connect integration with mainnet validation and network switching capabilities.

## 🚀 Features

- Seamless TON wallet connection using `@tonconnect/ui-react`
- Automatic network validation (mainnet-only)
- Real-time connection status monitoring
- User-friendly network switch alerts
- Responsive and clean UI
- Memoized components for optimal performance

## 🛠 Tech Stack

- React 18+
- TypeScript
- TON Connect SDK
- Vite
- CSS Modules

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ton-network-validator.git
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Start the development server:

```bash
yarn dev
# or
npm run dev
```

## 🔧 Configuration

The application uses a manifest URL for TON Connect configuration. Update the `MANIFEST_URL` in `src/App.tsx` if needed:

```typescript
const CONSTANTS = {
  TESTNET_CHAIN_ID: '-3',
  MANIFEST_URL: 'your-manifest-url'
};
```

## 🔍 Usage

1. Launch the application
2. Click the TON Connect button to connect your wallet
3. The application will automatically validate the network:
   - If connected to mainnet: Connection proceeds normally
   - If connected to testnet: Connection is rejected with an alert

## 🏗 Project Structure

```
src/
├── components/
│   └── Alert.tsx       # Alert component for network warnings
├── App.tsx            # Main application logic
└── main.tsx          # Application entry point
```

## 🔐 Security

- Network validation ensures mainnet-only connections
- Automatic disconnection for non-compliant networks
- Type-safe implementation with TypeScript

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📫 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/your-username/ton-network-validator](https://github.com/your-username/ton-network-validator)

---
Made with ❤️ for the TON Community