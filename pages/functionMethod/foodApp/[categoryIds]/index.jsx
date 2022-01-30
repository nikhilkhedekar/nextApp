import { useRouter } from 'next/router'
 
const CategoryMealDetails = () => {
    const router = useRouter()
    const categoryId = router.query.categoryIds;
    return(
        <div>
            <h1> Category ID : {categoryId} </h1>
        </div>
    )
}

export default CategoryMealDetails