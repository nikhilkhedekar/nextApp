import Link from 'next/link'

const Nav = () => {
    return(
        <nav>
            <Link href='/' > Home </Link>
            <Link href='/functionMethod/nextFirebase' > - Home | Next Firebase Home - </Link>
            <Link href='/functionMethod/nextFirebase/contactUsPage' > Contact Us </Link>
        </nav>
    )
}

export default Nav