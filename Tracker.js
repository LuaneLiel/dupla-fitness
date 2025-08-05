import React, { useState } from 'react';

export default function Tracker() {
  const [points, setPoints] = useState({ Luane: 0, Junior: 0 });

  const addPoints = (person, amount) => {
    setPoints(prev => ({ ...prev, [person]: prev[person] + amount }));
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Dupla Fitness 💪💖</h1>
      <div>
        <h2>Luane: {points.Luane} pts</h2>
        <h2>Junior: {points.Junior} pts</h2>
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => addPoints('Luane', 1)}>+1 Luane</button>
        <button onClick={() => addPoints('Junior', 1)} style={{ marginLeft: 10 }}>+1 Junior</button>
      </div>
    </div>
  );
}