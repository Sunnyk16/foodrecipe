function RecipeDetailsItems({ getRecipeDetails }) {
    console.log(getRecipeDetails);
    
  return (
    <div>
      <div className="p-4 lg:max-w-6xl max-2xl mx-auto ">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            src=<img src={getRecipeDetails?.image} />
            
            name={getRecipeDetails?.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailsItems;
