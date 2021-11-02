import React, { useState, useEffect } from 'react';
import Accordion from '../components4/Accordion';
import axios from 'axios';
import './Search.css';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // // SOLUTION - 1
  // useEffect(() => {
  //   const searchQuery = async () => {
  //     const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term,
  //       },
  //     });
  //     setResults(data.query.search);
  //   };

  //   const timer = setTimeout(function () {
  //     if (term) searchQuery();
  //   }, 750);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [term]);

  // ------------------------------------------------------------------ //

  // // SOLUTION - 2
  useEffect(() => {
    const timer = setTimeout(function () {
      setDebouncedTerm(term);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [term]);

  useEffect(() => {
    const searchQuery = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };

    if (debouncedTerm) searchQuery();
  }, [debouncedTerm]);

  const handleChange = (ev) => setTerm(ev.target.value);

  return (
    <div>
      <div className="search-bar">
        <label>Search</label>
        <input type="text" value={term} onChange={handleChange} />
      </div>
      <div className="search-results">
        <Accordion items={results} dataFrom="searchApp" />
      </div>
    </div>
  );
};

export default Search;
