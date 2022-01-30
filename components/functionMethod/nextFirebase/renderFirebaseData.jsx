import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import FoodContext from './context'

const RenderFirebaseData = (props) => {
    const router = useRouter();
    const foodCtx = useContext(FoodContext)
    console.log('food context', foodCtx)
    return (
        <div>
            <h3> {props.title} </h3>
            <div><img src={props.imageURL} width='200px' height='200px' /></div><br />
            <div>
                <span>Affordability: {props.affordability} </span><br />
                <span>Complexity: {props.complexity} </span><br />
            </div><br />
            <div>
                <button onClick={() => router.push(`/functionMethod/nextFirebase/${props.id}`)} >More Details</button>
            </div>
            {/**<span>Duration: {props.duaration + ' min'} </span><br />
            <div>Ingredients: {props.ingredients.map((ingredient, i) => (<ul key={i} > <li> {ingredient} </li> </ul>))} </div><br />
            <div>Steps: {props.steps.map((step, i) => (<ul key={i} > <li> {step} </li> </ul>))} </div> */}
        </div>
    )
}

export default RenderFirebaseData