import React from "react";
import style from "./recipe.module.css";


function Recipe({title, calories,image, cuisine, ingredients}) {
    return (
        <div className={style.recipe}>
        <h1>{title}</h1>
        <p>{calories}</p>
        <ol>
            {ingredients.map((ingredient, index) =>(
                <li key={index} >{ingredient.text}</li>
            ))}
        </ol>
        <p>cuisine : {cuisine}</p>
        <img className={style.image} alt={title} src={image} />
        </div>
    );  

}

export default Recipe;