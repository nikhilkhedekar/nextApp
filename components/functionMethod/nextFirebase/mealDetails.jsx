import { useContext } from 'react'

import FoodContext from './context'

const MealDetails = () => {
    const foodCtx = useContext(FoodContext)
    console.log('foodCtx', foodCtx)
    return(
        <div>

        </div>
    )
}

export default MealDetails