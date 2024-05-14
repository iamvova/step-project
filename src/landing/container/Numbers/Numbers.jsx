import React, { useEffect, useState } from 'react';
import './Numbers.scss';

const Numbers = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isInView, setIsInView] = useState(false);

  const startCounting = () => {
    setIsInView(true);
  };

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
      const targetCounters = [100, 50, 75, 25];
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
  }, [isInView]);

  return (
    <div className="numbers__container">
      <h2 className="headtext t__center">Статистика</h2>
      <div className="wrapp">
          <div id="counter" className="numbers__counter flex__sb">
            <div className={`counter-item counter-1`}>
              <span className="counter">20</span>
              <span className="counter-text">{`Закрито зборів`}</span>
            </div>
            <div className={`counter-item counter-2}`}>
            <span className="counter">30</span>
            <span className="counter-text">{`Зібрано коштів`}</span>
          </div>
          <div className={`counter-item counter-3`}>
          <span className="counter">40</span>
          <span className="counter-text">{`Виграно NFT`}</span>
        </div>
        <div className={`counter-item counter-4}`}>
        <span className="counter">50</span>
        <span className="counter-text">{`Користувачі`}</span>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;