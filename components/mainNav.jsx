import Link from 'next/link'

const MainNav = () => {
    return(
        <nav>
            <Link href='/' > Home </Link><br />
            <Link href='/functionMethod/foodApp' > Function Food App </Link><br />
            <Link href='/classMethod/classList' > Class List </Link><br />
            <Link href='/functionMethod/nextFirebase' > Next Firebase </Link>
        </nav>
    )
}

export default MainNav