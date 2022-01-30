import MealDetails from "../../../components/functionMethod/nextFirebase/mealDetails"

const MeaLDetailPage = () => {
    return(
        <div>
            <MealDetails />
        </div>
    )
}

export default MeaLDetailPage

// import { useContext } from 'react'
// import { useRouter } from 'next/router'

// import FoodContext from '../../../components/functionMethod/nextFirebase/context'

// const MealDetails = () => {
//     const foodCtx = useContext(FoodContext);
//     console.log('foodCtx', foodCtx)
//     const router = useRouter();
//     const availableMeals = foodCtx.foodList.filter(meal => meal.id === router.query.mealIds)
//     console.log('availaable meals', availableMeals)
//     return(
//         <div>
//             {/**
//              * <h1>Meal detail</h1>
//             <h3> {availableMeals.title} </h3>
//             <div><img src={availableMeals.imageURL} width='200px' height='200px' /></div><br />
//             <div>
//             <span>Affordability: {availableMeals.affordability} </span><br />
//             <span>Complexity: {availableMeals.complexity} </span><br />
//             </div><br />
//             <span>Duration: {availableMeals.duaration + ' min'} </span><br />
//             <div>Ingredients: {availableMeals.ingredients.map((ingredient, i) => (<ul key={i} > <li> {ingredient} </li> </ul>))} </div><br />
//             <div>Steps: {availableMeals.steps.map((step, i) => (<ul key={i} > <li> {step} </li> </ul>))} </div>  
//              */}
//         </div>
//     )
// }

// export default MealDetails