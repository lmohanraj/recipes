import './App.css';


let recipes = [
  {name : "Roasted Vegetables", time:"60 minutes", url : "https://www.acouplecooks.com/wp-content/uploads/2019/11/Roasted-Vegetables-012-735x919.jpg"},
  {name : "Sauteed Vegetables", time:"30 minutes", url : "https://www.acouplecooks.com/wp-content/uploads/2020/10/Sauteed-Vegetables-005-735x919.jpg"},
  {name : "Stir Fry Vegetables", time:"45 minutes", url : "https://www.acouplecooks.com/wp-content/uploads/2020/01/Broccoli-Stir-Fry-011-735x1102.jpg"},
  {name : "Roasted Broccoli", time:"40 minutes", url : "https://www.acouplecooks.com/wp-content/uploads/2020/03/Roasted-Broccoli-004-735x919.jpg"}
]
function App() {
  return (
    <div className="App">

      <h1>Our Recipes</h1>
        <div className='container'>
        {recipes.map( (recipe) => {
          return(
            <div className='recipeContainer'>
              <div className='imageContainer'><img className='image' src={recipe.url} alt={recipe.name} /></div>
              <h3 className='name'>{recipe.name}</h3>
              <h5>Time: <span>{recipe.time}</span></h5>
            </div>
          );
        })}
        </div>
    </div>
  );
}

export default App;
