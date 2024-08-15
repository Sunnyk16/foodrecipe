// import RecipeDetailsItems from "@/components/recipe-details/index";

// async function fetchRecipeDetails(_currentRecipeId) {
//   try {
//     const apiresponse = await fetch(`https://dummyjson.com/recipes/${_currentRecipeId}`);
//     const data =await apiresponse.json();
//     return data;

//   } catch (error) {
//     throw new Error(error);
//   }

// }

// async function RecipeDetails({params}) {
//   const getRecipeDetails = await fetchRecipeDetails(params?.details);
//   console.log(getRecipeDetails);

//   return (
//     <div>
//       <RecipeDetailsItems getRecipeDetails={getRecipeDetails}/>
//       <h1>this is recipe details page</h1>
//       <p>{getRecipeDetails?.mealType}</p>
//       <div>
//         {getRecipeDetails?.cusine}
//       </div>
//       <div>
//         ingredients
//         {getRecipeDetails?.ingredients}
//       </div>
//     </div>
//   )
// }

// export default RecipeDetails
import RecipeDetailsItems from "@/components/recipe-details/index";

async function fetchRecipeDetails(_currentRecipeId) {
  try {
    const apiresponse = await fetch(
      `https://dummyjson.com/recipes/${_currentRecipeId}`
    );
    const data = await apiresponse.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function RecipeDetails({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  console.log(getRecipeDetails);

  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className="container mx-auto p-4 border-2 shadow-lg drop-shadow-lg border-emerald-400 hover:scale-105 transition-transform">
        <h1 className="md:text-6xl capitalize text-emerald-500 font-bold mb-4 text-center sm:text-4xl">
          {getRecipeDetails?.name}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Side - Image */}
          <div className="flex justify-center items-center">
            {getRecipeDetails?.image && (
              <img
                src={getRecipeDetails.image}
                alt={getRecipeDetails?.name}
                className="max-w-96 h-auto rounded-lg shadow-lg "
              />
            )}
          </div>

          {/* Right Side - Details */}
          <div className="flex flex-col justify-center">
            <p className="text-lg  font-semibold mb-2">
              <span className="text-emerald-400">Meal Type</span>: {getRecipeDetails?.mealType}
            </p>
            <div className="text-lg font-semibold mb-2">
              {/* Cuisine: {getRecipeDetails?.cusine} */}
            </div>
            <div className="text-lg font-semibold">
              <span className="text-emerald-400">Ingredients</span>:{" "}
              <ul className="list-disc list-inside">
                {getRecipeDetails?.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
