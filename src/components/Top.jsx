import React from 'react'

const Top = () => {
    return (
        <>

            <h1 className="text-center text-3xl font-extrabold opacity-75 mb-4">Find Meals For Your Ingredients</h1>
            <p className="text-center text-lg font-semibold opacity-75">Real food doesn't have ingredients, real food is ingredients</p>
            <p className="text-center text-lg opacity-75 font-semibold">-Jamie Oliver</p>


        </>
    )
}

export default Top



/*

import { useEffect, useState } from "react";
import Top from "./components/Top"
// import Recipes from "./Recipe.json"
import Modal from "./components/Modal";



function App() {
  // console.log(Recipes);

  // const [recipeSearch, setRecipeSearch] = useState([])
  // const [values, setValues] = useState(Recipes);
  // const [open, setOpen] = useState(false)

  // const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=i";

  useEffect(() => {

    // const getRecipes = async () => {
    //   const response = await fetch(URL);
    //   const data = await response.json();
    //   console.log(data);

    //   if (data)
    //     // setValues(data?.meals);
    //     return;
    // }
    // getRecipes();

  }, [values]);

  const recipeInput = (event) => {
    setRecipeSearch(event.target.value)
  }

  const submitRecipe = () => {
    // console.log(recipeSearch);


    if (Recipes && recipeSearch) {
      let filteredRecipes = values.filter((value) => {
        return (
          value.strMeal.toLowerCase().includes(recipeSearch.toLowerCase())
        );
      });

      console.log(filteredRecipes);
      setValues(filteredRecipes);
    } else {
      setValues(Recipes);
    }
  }

  return (
    <>

      <div className="bg-white w-2/3 mx-auto mt-10 mb-0 py-5
                 rounded-xl shadow-lg shadow-gray-500/50 ...">

        <Top />


        <div className="relative w-full">
          <input type="search"
            className=" block mx-auto border border-yellow-600 px-10 
             mt-5 rounded-full py-2 ps-4 mb-5 w-44 md:w-96"
            id="input_search" placeholder="Search" onChange={recipeInput} />
        </div>
        <div>
          <button type="submit" id="icon-btn" onClick={submitRecipe}
            className="block mx-auto mt-3  text-white cursor-pointer ...
             px-2 py-2 rounded-xl text-xl font-bold
              bg-yellow-600 md:px-3 md:py-2" >
            <i className="fa-solid fa-magnifying-glass">submit</i>

          </button>

        </div>
        <div id="search-result">
          <h5 className="text-center text-3xl font-extrabold my-5 
                       opacity-75 mb-20">Your Search Results:</h5>
        </div>


        <main className="mt-3">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            id="result-display">
            {
              values && values.map((recipe) => {
                return (
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg
              shadow-lg shadow-gray-500/50 ... " key={recipe.idMeal}>
                    <img src={recipe.strMealThumb} className="w-60 h-40" />
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight
             text-gray-900 dark:text-white text-center">
                        {recipe.strMeal}</h5>
                    </div>
                    <div className="text-center">
                      <button type="button"
                        className="bg-yellow-600 py-2 px-4 text-white text-lg 
                font-bold rounded-xl mb-2 cursor-pointer ..."
                        onClick={() => setOpen(true)}>Get Recipe</button>
                    </div>
                  </div>
                )
              }
              )
            }
          </div>
        </main>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>

      </Modal>
    </>
  )
}

export default App




*/ 