import React, {useEffect, useState} from 'react'
import './DonateMainPage.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'

const DonateMainPage = () => {
  const [data, setData] = useState([])
  const backendUrl = 'http://195.189.226.95/api/v1/auction/' 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendUrl}`, {
          headers: {
            'accept': 'application/json',
          }
        })
        if (response.status === 200) {
          const data = response.data.sort((a, b) => a.id - b.id)
          console.log(data)
          setData(data)
        } else {
          console.error('Failed to fetch data from API')
        }
      } catch (error) {
        console.error('Error fetching data from API:', error)
      }
    }

    fetchData()
  }, [])


  return (
    <div className='wrapp'>
      <div className="donate-container d-flex">
        {data ? data.map((item) => (
          <React.Fragment key={item.id}>
            <Link to={`/donate/foundation/${item.id}`}>
              <div className="donate-page flex__column">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>
            </Link>
          </React.Fragment>
        )) : <Loader></Loader>}
      </div>
    </div>
  )
}

export default DonateMainPage
