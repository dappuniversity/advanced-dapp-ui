import { useEffect, useState } from 'react';
import { ethers } from 'ethers'
import logo from './logo.png';
import './App.css';

function App() {
  const [account, setAccount] = useState('')

  const fetchAccount = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
  }

  useEffect(() => {
    new ethers.providers.Web3Provider(window.ethereum)

    window.ethereum.on('accountsChanged', () => {
      fetchAccount()
    })
  })

  const connect = () => {
    return(
      <div className="content mx-auto mt-5">
        <a
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo"/>
        </a>
        <h1 className= "mt-5">Please, connect your wallet</h1>
        <p>
          Please connect your wallet to see your supplies, borrowings, and open positions.
        </p>
        <button type="button" className="btn btn-primary" onClick={fetchAccount}>Connect</button>
      </div>
    )
  }

  const content = () => {
    return(
      <div className="content mx-auto mt-5">
        <a
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo"/>
        </a>
        <h1 className= "mt-5">Dapp University Starter Kit</h1>
        <p>
          Welcome to my awesome dapp!
        </p>
        <p>You are connected with the following account: {account}</p>
      </div>
    )
  }

  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 ms-3"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dapp University
        </a>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            {account ? content() : connect() }
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
