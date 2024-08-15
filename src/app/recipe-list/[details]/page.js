import RecipeDetailsItems from "@/components/recipe-details/page";

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiresponse = await fetch("https://dummyjson.com/recipes");
    const data =await apiresponse.json();
    return data
    
  } catch (error) {
    throw new Error(error)
  }

}

async function RecipeDetails({params}) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  return (
    <div>
      <RecipeDetailsItems getRecipeDetails={getRecipeDetails}/>
    </div>
  )
}

export default RecipeDetails