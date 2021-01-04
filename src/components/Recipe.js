import React from 'react'
import style from '../styles/recipe.module.css'

const Recipe = ({title, calories, image, ingredients})=> {
    return(
        <div className={style.recipe}>
            <h1>{ title }</h1>
            <p>{ calories.toFixed(2) }</p>
            <img className={style.image} src={image} alt=""/>
            <ol key={ingredients.id}>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe