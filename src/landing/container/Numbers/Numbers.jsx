import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Numbers.scss';
import Loader from '../../../main/components/Loader/Loader';

const Numbers = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isInView, setIsInView] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('http://195.189.226.95/api/v1/statistic/')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        setError(error)
      })
  }, [])
  const startCounting = () => {
    setIsInView(true)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.11 }
    );

    observer.observe(document.getElementById('counter'));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isInView) {
      const targetCounters = [data.closed_auctions, data.money_collected, data.gifted_nfts, data.users];
      timer = setInterval(() => {
        setCounters((prevCounters) => {
          return prevCounters.map((counter, index) => {
            const step = Math.ceil(targetCounters[index] / 25);
            return counter + step > targetCounters[index]
              ? targetCounters[index]
              : counter + step;
          });
        });
      }, 100);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isInView, data]);

  return (
    <div className="numbers__container" id='statistic'>
      <h2 className="headtext t__center">Статистика</h2>
      (data &&
        <div className="wrapp">
            <div id="counter" className="numbers__counter flex__sb">
              <div className={`counter-item counter-1`}>
                <span className="counter">{data.closed_auctions}</span>
                <span className="counter-text">{`Закрито зборів`}</span>
            </div>
            <div className={`counter-item counter-2}`}>
              <span className="counter">{data.money_collected}</span>
              <span className="counter-text">{`Зібрано коштів`}</span>
            </div>
            <div className={`counter-item counter-3`}>
              <span className="counter">{data.gifted_nfts}</span>
              <span className="counter-text">{`Виграно NFT`}</span>
            </div>
            <div className={`counter-item counter-4}`}>
              <span className="counter">{data.users}</span>
              <span className="counter-text">{`Користувачі`}</span>
            </div>
          </div>
        )
      </div>
    </div>
  );
};

export default Numbers;