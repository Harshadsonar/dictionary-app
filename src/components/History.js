import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
  // Get search history from Redux store
  const reduxHistory = useSelector((state) => state.history);

  // Get search history from local storage
  const localStorageHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

  // Combine both history arrays and deduplicate
  const combinedHistory = [...new Set([...reduxHistory, ...localStorageHistory])];

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {combinedHistory.map((word, index) => (
          <li key={index}>
            <Link to={`/word/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;