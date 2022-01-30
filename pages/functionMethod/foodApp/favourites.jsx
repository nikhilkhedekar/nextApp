import Head from 'next/head'

import Header from '../../../components/functionMethod/foodApp/header'

const Favourites = () => {
    return (
            <div>
                <div>
                    <Head>
                        <title>Favourite Meals</title>
                        <meata name='Favourite Meal' />
                    </Head>
                </div>
                <div>
                    <Header />
                </div>
                <div>
                    <h2> Favourite Meal </h2>
                </div>
               
            </div>
    )
}

export default Favourites