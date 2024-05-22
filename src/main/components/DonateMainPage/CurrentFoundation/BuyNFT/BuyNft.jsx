import React, {useState} from 'react'
import './BuyNft.scss'
import Web3 from 'web3';
import Loader from '../../../Loader/Loader'

const BuyNft = ({details}) => {

  const [amount, setAmount] = useState('');
  const [targetAddress, setTargetAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!details) {
    return <Loader></Loader>
  }

  // await window.ethereum.request({
  //   method: 'wallet_addEthereumChain',
  //   params: [{
  //     chainId: '0x539', // 1337 в десятковій системі
  //     chainName: 'charity',
  //     nativeCurrency: {
  //       name: 'Choken',
  //       symbol: 'CKN',
  //       decimals: 10,
  //     },
  //     rpcUrls: ['http://195.189.226.95:8545']
  //   }],
  // })

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!window.ethereum) {
      alert('Please install MetaMask!')
      return
    }
  
    const web3 = new Web3(window.ethereum)
  
    try {
      const tokenPriceInEther = 4722.36690287
      const valueInWei = web3.utils.toWei(((amount / tokenPriceInEther)/2.38489143).toString(), 'ether')

      const transactionParameters = {
        to: details.wallet,
        from: localStorage.getItem('address'),
        value: valueInWei
      };
  
      setIsLoading(true);
      await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      })
      setIsLoading(false)
      console.log(('Transaction sent successfully!'))
    } catch (error) {
      console.log(('Failed to send transaction. See console for details.'))
    }
  }

  return (
    <div className="wrapp">
      <div className='buy-container'>
        <div className="buy-container__img"><img src={details.image} alt="11" /></div>
        <div className="buy-content">
            <h2 className="buy-name">{details.name}</h2>
            <p className="buy-description">{details.description}</p>
              <div className="progress-container">
                <div className="progress-labels">
                  <span>{details.collected}</span>
                  <span>{details.goal}</span>
                </div>
                <div className="progress-bar">
                  <progress value={details.collected} max={details.goal}></progress>
                </div>
              </div>
            <div className='buy-btns'>
              <form onSubmit={handleSubmit} >
                <input type="text" placeholder={details.min_price+" ETH"} value={amount} onChange={handleAmountChange} required />
                <button className='buy-donate__btn' type="submit" disabled={isLoading}>Здійснити транзакцію</button>
                <br />
                {isLoading ? 'Processing...' : 'Send'}
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BuyNft
