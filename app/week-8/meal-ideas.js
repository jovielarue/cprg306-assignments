"use client";
import { useEffect, useState } from "react";

const fetchMealIdeas = async (ingredient) => {
  const mealIdeas = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );

  return mealIdeas;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState();

  const loadMealIdeas = () => {
    setMeals(fetchMealIdeas(ingredient));
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h3>Meal ideas:</h3>
      {meals.map((item) => {
        return <p key={item.idMeal}>item.strMeal</p>;
      })}
    </div>
  );
}
