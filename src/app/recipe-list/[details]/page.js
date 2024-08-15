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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">This is recipe details page</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          {getRecipeDetails?.image && (
            <img
              src={getRecipeDetails.image}
              alt={getRecipeDetails?.name}
              className="max-w-full h-auto rounded shadow-lg"
            />
          )}
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col justify-center">
          <p className="text-lg font-semibold mb-2">
            Meal Type: {getRecipeDetails?.mealType}
          </p>
          <div className="text-lg font-semibold mb-2">
            Cuisine: {getRecipeDetails?.cusine}
          </div>
          <div className="text-lg font-semibold">
            Ingredients:{" "}
            <ul className="list-disc list-inside">
              {getRecipeDetails?.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
