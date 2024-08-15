import Recipelist from "@/components/recipe-list";
async function fetchListOfRecipes() {
  try {
    const apirespons = await fetch("https://dummyjson.com/recipes");
    const data = await apirespons.json();
    return data?.recipes;
  } catch (error) {
    throw new Error(error);
    console.log(error);
  } 
}

async function Recipe() {
  const recipelist =await  fetchListOfRecipes();
//   console.log(recipelist);
  
  return (
    <div>
      <Recipelist recipelist={recipelist} />
    </div>
  );
}

export default Recipe;
