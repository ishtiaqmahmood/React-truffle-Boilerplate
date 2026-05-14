# React-Truffle Boilerplate

A modern, professional boilerplate for building Ethereum Decentralized Applications (DApps) using **React 18** and **Truffle**.

## 🚀 Features

- **React 18**: Utilizing the latest features like `createRoot`.
- **Functional Components**: Modern React best practices using Hooks.
- **Truffle Framework**: For smart contract development, testing, and deployment.
- **Web3.js v4**: Latest version of Web3 for Ethereum interaction.
- **Bootstrap 4**: Ready-to-use styling for your DApp.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- [Truffle](https://www.trufflesuite.com/truffle) (`npm install -g truffle`)
- [Ganache](https://www.trufflesuite.com/ganache) (for a local blockchain)
- [MetaMask](https://metamask.io/) browser extension

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd react-truffle-boilerplate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🏗️ Development

### 1. Smart Contracts

- Contracts are located in `src/contracts/`.
- Migrations are located in `migrations/`.

**Compile contracts:**
```bash
truffle compile
```

**Deploy to local blockchain (Ganache):**
```bash
truffle migrate
```

### 2. Frontend

**Start the React development server:**
```bash
npm start
```
The application will be available at `http://localhost:3000`.

## 🧪 Testing

**Run Truffle tests:**
```bash
truffle test
```

**Run React tests:**
```bash
npm test
```

## 📁 Project Structure

```text
├── migrations/         # Truffle migration files
├── public/             # Static assets
├── src/
│   ├── abis/           # Compiled Smart Contract ABIs
│   ├── components/     # React components
│   ├── contracts/      # Solidity smart contracts
│   ├── index.js        # React entry point
│   └── serviceWorker.js
├── truffle-config.js   # Truffle configuration
└── package.json        # Dependencies and scripts
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
