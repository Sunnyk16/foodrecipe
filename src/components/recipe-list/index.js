import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function Recipelist({ recipelist }) {
  console.log(recipelist);

  return (
    <div>
      {/* <div>this is Recipelist compoonent</div> */}
      <div className="p-4 mx-auto lg:max-w-6xl md-max-w-4xl  sm:max-w-full">
        <h2 className="text-left font-bold mb-10 text-5xl capitalize">recipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipelist && recipelist.length > 0
            ? recipelist.map((recipe) => {
                return (
                  <Link href={'/recipe-list/${recipe.id}'}>
                    <Card className="transition-all
                     hover:scale-90 p-2 " key={recipe.id}>
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                            <img className="rounded-sm" src={recipe.image}/>
                        </div>
                      <CardHeader>
                        <CardTitle>{recipe.name}</CardTitle>
                      </CardHeader>
                      
                      <CardContent>
                        <CardDescription>{recipe.instructions}</CardDescription>
                      </CardContent>
                      {/* <CardFooter>
                        <p>{recipe.prepTimeMinutes}</p>
                      </CardFooter> */}
                    </Card>
                  </Link>
                );
              })
            : "no data found"}
        </div>
      </div>
    </div>
  );
}

export default Recipelist;
