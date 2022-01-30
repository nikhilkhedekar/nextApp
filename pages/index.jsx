import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Home = () => {
    
    return(
        <div>
            <div>
            <Head>
                <title>Home</title>
                <meta name='Home' />
            </Head>
        </div>
        <div>
            <Header />

        </div>
        <h2>React App Home</h2>
        <div>
            <Footer />
        </div>
        </div>
        
    )
}

export default Home