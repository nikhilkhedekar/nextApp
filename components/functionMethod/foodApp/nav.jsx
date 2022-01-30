import Link from 'next/link'

const Nav = () => {
    return(
        <div>
            <Link href='/' > Home </Link>
            <Link href='/functionMethod/foodApp' > - Home | Meals Category - </Link>
            <Link href='/functionMethod/foodApp/favourites' >Favourites</Link>
            <Link href='/functionMethod/foodApp/filters' >Filter Settings</Link>
        </div>
    )
}


export default Nav
