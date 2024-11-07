"use client";
import { useEffect, useState } from "react";

const fetchMealIdeas = async (ingredient) => {
  const mealIdeasResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  const mealIdeas = await mealIdeasResponse.json();

  return mealIdeas.meals;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealsToSet = await fetchMealIdeas(ingredient);
    console.log(mealsToSet);
    setMeals(mealsToSet === null ? [] : mealsToSet);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h3>Meal ideas:</h3>
      {meals.map((item) => {
        return <p key={item.idMeal}>{item.strMeal}</p>;
      })}
    </div>
  );
}
