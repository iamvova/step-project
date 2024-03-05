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
      <h2 className="headtext t__center">Lorem, ipsum dolor.</h2>
      <div className="wrapp">
          <div id="counter" className="numbers__counter flex__sb">
          {counters.map((counter, index) => (
            <div key={index} className={`counter-item counter-${index + 1}`}>
              <span className="counter">{counter}</span>
              <span className="counter-text">{`Проект ${index + 1}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;