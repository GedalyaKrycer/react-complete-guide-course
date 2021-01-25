import React, { useEffect, useCallback, useReducer } from 'react';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';

const ingredientReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...state, action.ingredient];
    case 'DELETE':
      return state.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not get here!');
  }
}

const httpReducer = (state, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null };
    case 'RESPONSE':
      return { ...state, loading: false };
    case 'ERROR':
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      return { ...state, error: null };
    default:
      throw new Error('Should not get here!');
  }
}

function Ingredients() {
  // Takes in the reducer and an initial state
  // Gives you the state and a dispatch function
  const [userIngredients, dispatchIng] = useReducer(ingredientReducer, [])
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null })


  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://react-hooks-update-2f7d8-default-rtdb.firebaseio.com/ingredients.json').then(response => {
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

      // setUserIngredients(loadedIngredients);


    });
  }, [])

  const filteredIngredientsHandler = useCallback(filteredIngredient => {
    // setUserIngredients(filteredIngredient)
    dispatchIng({ type: 'SET', ingredients: filteredIngredient });
  }, [])

  const addIngredientHandler = (ingredient) => {

    dispatchHttp({ type: 'SEND' });

    fetch('https://react-hooks-update-2f7d8-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      dispatchHttp({ type: 'RESPONSE' });
      return response.json();
    }).then(responseData => {
      // setUserIngredients(prevIngredients => [
      //   ...prevIngredients, {
      //     id: responseData.name,
      //     ...ingredient
      //   }
      // ]);


      dispatchIng({ type: 'ADD', ingredient: { id: responseData.name, ...ingredient } })

    });

  }

  useEffect(() => {
    console.log("Render Ingredients", userIngredients);
  }, [userIngredients])

  const removeItemHandler = (id) => {
    dispatchHttp({ type: 'SEND' });
    fetch(`https://react-hooks-update-2f7d8-default-rtdb.firebaseio.com/ingredients/${id}.json`, {
      method: 'DELETE'
    }).then(response => {
      dispatchHttp({ type: 'RESPONSE' });
      // setUserIngredients(prevIngredients => prevIngredients.filter(
      //   (ingredient) => ingredient.id !== id
      // ))
      dispatchIng({ type: 'DELETE', id: id })
    }).catch(error => {
      dispatchHttp({ type: 'ERROR', errorMessage: error.message });
    })

  }

  const clearErrorHandler = () => {
    dispatchHttp({ type: 'CLEAR' });
  }

  return (
    <div className="App">

      {httpState.error && <ErrorModal onClose={clearErrorHandler}>{httpState.error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={httpState.loading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeItemHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
