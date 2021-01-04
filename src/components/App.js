import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import '../styles/App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(()=>{
    try{
        getRecipes().then(r => console.log('Call was successful.'));
    }
    catch (e){
        console.log(e)
    }
  }, [query])

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits)
  }

  const updateSearch = event => {
      setSearch(event.target.value)
      setSearch('');
  }

  const getSearch = event => {
      event.preventDefault();
      setQuery(search);
  }

  return(
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">Search</button>
        </form>
        <div className="recipes">
            {recipes.map(recipe =>(
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
      </div>
  )
}

export default App;
