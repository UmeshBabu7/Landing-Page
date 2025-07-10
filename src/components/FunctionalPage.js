import React, { useState } from 'react';

const FunctionalPage = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://catfact.ninja/fact');
      const data = await res.json();
      setFact(data.fact);
    } catch {
      setFact('Failed to fetch fact.');
    }
    setLoading(false);
  };

  return (
    <section className="functional-page">
      <h2>Random Cat Fact</h2>
      <button onClick={fetchFact} disabled={loading}>
        {loading ? 'Loading...' : 'Get Cat Fact'}
      </button>
      {fact && <p className="cat-fact">{fact}</p>}
    </section>
  );
};

export default FunctionalPage; 