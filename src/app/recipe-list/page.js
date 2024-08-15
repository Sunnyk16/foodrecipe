import Recipelist from '@/components/recipe-list'
async function fetchListOfRecipes(){
    try {
        const apirespons = await fetch('https://dummyjson.com/recipes');
        const data =await  apirespons.json();
        return  data.?recipies

 
        
    } catch (error) {
        throw new Error(error)
        console.log(error);
        
    }
}

async function Recipe() {
  return (
    <div>
        <Recipelist/>
    </div>
  )
}

export default Recipe