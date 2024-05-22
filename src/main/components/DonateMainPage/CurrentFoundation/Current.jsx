import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import './Current.scss'
import Menu from '../../Menu/Menu'
import BuyNft from './BuyNFT/BuyNft'

const Current = () => {
  const [details, setDetails] = useState(null);
  // const backendUrl = 'http://195.189.226.95/api/v1/auction/'

  const {id} = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://195.189.226.95/api/v1/auction/${id}/`)
        if (response.status === 200) {
          setDetails(response.data)
        } else {
          console.error('Failed to fetch details from API')
        }
      } catch (error) {
        console.error('Error fetching details from API:', error)
      }
    }

    fetchDetails()
  }, [id])

  return (
    <div>
      <Menu address={'0xf5BCC4873E5ecEB550f00dc03790907D8eEF9109'} menu={'Profile'}/>
      <BuyNft details={details} />
    </div>
  )
}

export default Current


