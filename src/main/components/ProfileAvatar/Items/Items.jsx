import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from 'axios';
import nftExp1 from '../../../../constants/images/nft-exp1.jpg'
import nftExp2 from '../../../../constants/images/nft-exp2.jpg'
import nftExp3 from '../../../../constants/images/nft-exp3.jpg'
import nftExp4 from '../../../../constants/images/nft-exp4.jpg'
import nftExp5 from '../../../../constants/images/nft-exp5.jpg'
import './Items.scss'

const Items = () => {

  const [nfts, setNfts] = useState([])

  // useEffect(() => {
  //   const fetchNFTs = async () => {
  //     if (window.ethereum) {
  //       const web3 = new Web3(window.ethereum)
  //       try {
  //         await window.ethereum.request({ method: 'eth_requestAccounts' })
  //         const accounts = await web3.eth.getAccounts()
          
  //         const chainId = await web3.eth.getChainId()
  //         if (chainId !== 4) {
  //           console.error('Please switch to the Rinkeby test network in MetaMask.')
  //           return
  //         }

  //         const response = await axios.get(``, {
  //           headers: {
  //             'X-API-Key': 'YOUR_MORALIS_API_KEY',
  //             'Content-Type': 'application/json'
  //           }
  //         })

  //         setNfts(response.data.result)
  //       } catch (error) {
  //         console.error('Error fetching NFTs:', error)
  //       }
  //     } else {
  //       console.error('Please install MetaMask!')
  //     }
  //   }

  //   // fetchNFTs()
  // }, [])

  return (
    <div className='wrapp'>
      <div className="items-container">
        
        {nfts.map((nft, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{nft.name || 'Unnamed NFT'}</h3>
            <img src={nft.image_url || 'https://via.placeholder.com/150'} alt={nft.name} style={{ width: '150px', height: '150px' }} />
            <p>Token ID: {nft.token_id}</p>
          </div>
        ))}

        <div className="item-block">
            <img src={nftExp1} alt="111" />
        </div>
        <div className="item-block">
            <img src={nftExp2} alt="111" />
        </div>
        <div className="item-block">
            <img src={nftExp3} alt="111" />
        </div>
        <div className="item-block">
            <img src={nftExp4} alt="111" />
        </div>
        <div className="item-block">
            <img src={nftExp5} alt="111" />
        </div>
      </div>
    </div>
  )
}

export default Items
