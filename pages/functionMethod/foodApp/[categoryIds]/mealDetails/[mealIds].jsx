import { useRouter } from "next/router"

const MealDetails = () => {
    const router = useRouter();
    const categoryId = router.query.categoryIds;
    const mealId = router.query.mealIds;
    return(
        <div>
            <h1> Category ID : {categoryId} </h1>
            <h1> Meal ID : {mealId} </h1>
        </div>
    )
}

export default MealDetails