const RenderMealsCategory = (props) => {
    return(
        <div>
            <h3> {props.title} </h3>
            <span>Affordability: {props.affordability} </span>
            <span>Complexity: {props.complexity} </span>
            <div>Ingredients: {props.ingredients.map((ingredient, i) => ( <ul key={i} > <li> {ingredient} </li> </ul> ))} </div>
            <li>Steps: {props.steps.map((step, i) => ( <ul key={i} > <li> {step} </li> </ul> ))}</li>
        </div>
    )
}

export default RenderMealsCategory 