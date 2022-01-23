import React, { useEffect , useState } from "react";
import Recipe from "./Recipe";
import './App.css';

function App() {
  const APP_ID    ='db9b639c';
  const APP_KEY   = 'aa21139fdd7b320815993f80ac920558';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]
  );

  const getRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    setSearch('');
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };  
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);

  };  

  return (
    <div className="App">
      <h1>Welcome to Recipe</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-buttom" type="submit">
        Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map( (recipe, index) => (
        <Recipe 
          key={index} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} 
          cuisine={recipe.recipe.cuisineType}
          ingredients={recipe.recipe.ingredients} />
      ))}
      </div>
    </div>
  );
}

export default App;
