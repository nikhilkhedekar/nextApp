import Head from 'next/head'

import Header from '../../../components/functionMethod/foodApp/header'
import { MEALS } from '../../../db/functionMethod/foodApp/DUMMY'
import RenderMealsCategory from '../../../components/functionMethod/foodApp/renderMealsCategory'

const MealsCategory = () => {
    const renderMealCategory = MEALS.map(meal => {
        return (
            <RenderMealsCategory key={meal.id}
            title={meal.title}
            affordability={meal.affordability}
            complexity={meal.complexity}
            ingredients={meal.ingredients}
            steps={meal.steps}
            />
        )
    })
    return(
        <div>
            <div>
                <Head>
                    <title>Home | Meals Category</title>
                    <meata name='Meals Category' />
                </Head>
            </div>
            <div>
                <Header />
            </div>
            <div>
                <h2> Meal Category </h2>
                <div> {renderMealCategory} </div>
            </div>
        </div>
    )
}

export default MealsCategory