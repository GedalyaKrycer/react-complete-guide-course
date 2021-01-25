import React, { useState, useEffect, useRef } from 'react';
import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enterFilter, setEnterFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {

      // Debounce effect 
      if (enterFilter === inputRef.current.value) {
        const query = enterFilter.length === 0
          ? ''
          : `?orderBy="title"&equalTo="${enterFilter}"`;

        fetch('https://react-hooks-update-2f7d8-default-rtdb.firebaseio.com/ingredients.json' + query)
          .then(response => {
            return response.json();
          }).then(responseData => {
            const loadedIngredients = [];

            for (const key in responseData) {
              loadedIngredients.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount
              })
            }

            onLoadIngredients(loadedIngredients);
          })
      }

    }, 500)

    return () => {
      clearTimeout(timer);
    }


  }, [enterFilter, onLoadIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enterFilter}
            onChange={event => setEnterFilter(event.target.value)}
            ref={inputRef}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
