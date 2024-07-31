import Top from "./components/Top"
import { useEffect, useState } from "react"
import axios from "axios";



const App = () => {

  const [items, setItems] = useState([]);
  const [meals, setMeals] = useState("")


  const handleInput = (e) => {
    setMeals(e.target.value)
  }


  const submitBtn = () => {
    // console.log(items);


    if (items && meals) {
      let filteredMeals = items.filter((item) => {
        return (
          item.strMeal.toLowerCase().includes(meals.toLowerCase())
        );
      });

      setItems(filteredMeals);
    } else {
      setItems(items);
    }


  }

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=i")
      .then(res => {
        console.log(res.data);
        setItems(res.data.meals)
      }).catch((err) => {
        console.log(err);
      })
  }, [])





  return (
    <>

      <div className="bg-white w-2/3 mx-auto mt-10 mb-0 py-5
                 rounded-xl shadow-lg shadow-gray-500/50 ...">

        <Top />


        <div className="relative w-full">
          <input type="search" onChange={handleInput}
            className=" block mx-auto border border-yellow-600 px-10 
             mt-5 rounded-full py-2 ps-4 mb-5 w-44 md:w-96"
            id="input_search" placeholder="Search" />
        </div>
        <div>
          <button type="submit" id="icon-btn"
            className="block mx-auto mt-3  text-white cursor-pointer ...
             px-2 py-2 rounded-xl text-xl font-bold
              bg-yellow-600 md:px-3 md:py-2" >
            <i className="fa-solid fa-magnifying-glass"
              onClick={submitBtn}
            >submit</i>

          </button>

        </div>
        <div id="search-result">
          <h5 className="text-center text-3xl font-extrabold my-5 
                       opacity-75 mb-20">Your Search Results:</h5>
        </div>

        <main className="mt-3">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            id="result-display">

            {items.map(({ strMeal, strMealThumb, idMeal, strYoutube, strSource }) => {
              return (
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg
              shadow-lg shadow-gray-500/50 ... "  key={idMeal}>
                  <img src={strMealThumb} className="w-60 h-40" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight
             text-gray-900 dark:text-white text-center">
                      {strMeal}  </h5>
                  </div>
                  <div className=" flex justify-start ms-1 space-x-4 mb-4 me-1">
                    <a className=" bg-yellow-600 py-1 px-3 text-white text-md rounded-md cursor-pointer font-bold"
                      href={strYoutube} target="_blank">Watch video</a>
                    <a href={strSource} target="_blank"
                      className="bg-yellow-600 py-1 px-2 text-white text-md rounded-md cursor-pointer font-bold">
                      Get Source</a>
                  </div>
                </div>
              )
            })}

          </div>
        </main>
      </div>
    </>
  )
}

export default App



