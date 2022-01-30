import axios from 'axios'
import { useEffect, useState, useContext } from 'react'

import RenderFirebaseData from './renderFirebaseData'
import FoodContext from './context'

//import { MEALS } from '../../../db/functionMethod/foodApp/DUMMY';

const GetFirebaseData = () => {
    
    const [data, setData] = useState()
    const [sharedData, setSharedData] = useState()
    useEffect( async () => {
        const response = await axios.get('https://react-fetch-req-default-rtdb.firebaseio.com/nextFirebase/-MmcL2GXDZtqoUlleN7T.json');
        console.log('mongodb response', response)
        const responseData = response.data;
        const getData = [];
        for(let key in responseData){
            getData.push({
                key: key,
                id: responseData[key].id,
                categoryIds: responseData[key].categoryIds,
                title: responseData[key].title,
                affordability: responseData[key].affordability,
                complexity: responseData[key].complexity,
                imageURL: responseData[key].imageURL,
                duaration: responseData[key].duaration,
                ingredients: responseData[key].ingredients,
                steps: responseData[key].steps,
                isGlutenFree: responseData[key].isGlutenFree,
                isVegan: responseData[key].isVegan,
                isVegetarian: responseData[key].isVegetarian,
                isLactosefree: responseData[key].isLactosefree,
            })
        }
        console.log('fetched data', getData)
        setSharedData(getData)
        const renderFirebaseData = getData.map((meal, i) => {
            return(
                <RenderFirebaseData key={i}
                mealKey={meal.key}
                id={meal.id}
                categoryIds={meal.categoryIds}
                title={meal.title}
                affordability={meal.affordability}
                complexity={meal.complexity}
                imageURL={meal.imageURL}
                duaration={meal.duaration}
                ingredients={meal.ingredients}
                steps={meal.steps}
                isGlutenFree={meal.isGlutenFree}
                isVegan={meal.isVegan}
                isVegetarian={meal.isVegetarian}
                isLactosefree={meal.isLactosefree}
                 />
            )
        })
        setData(renderFirebaseData)
    }, [])
    console.log('render data', data)
    return(
        <FoodContext.Provider value={{foodList: sharedData}} >
            {data}
        </FoodContext.Provider>
    )
}

export default GetFirebaseData

// const GetFirebaseData = () => {
//     const submitHandler = (e) => {
//         e.preventDefault();
//         const body = MEALS
//         const response = axios.post('https://react-fetch-req-default-rtdb.firebaseio.com/nextFirebase.json', body);
//         console.log(response)
//     }
//     return(
//         <div>
//             <form onSubmit={submitHandler} >
//                 <button>submit</button>
//             </form>
//         </div>
//     )
// }