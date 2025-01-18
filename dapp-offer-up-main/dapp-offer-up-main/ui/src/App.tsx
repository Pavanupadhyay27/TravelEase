import React from 'react';

const App: React.FC = () => {
  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({
          method: 'eth_requestAccounts',
        });
        alert(`Connected wallet: ${accounts[0]}`);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to connect your wallet.');
    }
  };

  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.title}>TravelEase</h1>
        <button style={styles.connectWalletButton} onClick={connectWallet}>
          Connect Wallet
        </button>
      </header>

      <div style={styles.hero}>
        <div>
          <h2 style={styles.heroTitle}>All Your Travel Needs in One Place</h2>
          <p style={styles.heroSubtitle}>Decentralized, Secure, and Transparent Travel Platform</p>
          <button style={styles.exploreButton}>Explore Now</button>
        </div>
      </div>

      <div style={styles.floatingBg} />
    </div>
  );
};

// Inline styles for simplicity (you can use CSS or styled-components as alternatives)
const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    background: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  title: {
    fontSize: '1.8rem',
    color: '#fff',
  },
  connectWalletButton: {
    background: '#ff7e5f',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  hero: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    color: '#fff',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  exploreButton: {
    background: '#6a11cb',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '50px',
    fontSize: '1.2rem',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  floatingBg: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1), rgba(0,0,0,0.2))',
    animation: 'float 20s infinite linear',
    zIndex: -2,
  },
};

// Define floating background animation in CSS
const styleElement = document.createElement('style');
styleElement.innerHTML = `
  @keyframes float {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
document.head.appendChild(styleElement);

export default App;
