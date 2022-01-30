import Head from 'next/head'

import Header from '../../../components/functionMethod/foodApp/header'

const Filters = () => {
    return (
        <div>
            <div>
                <Head>
                    <title>Filter Settings</title>
                    <meata name='Filter Settings' />
                </Head>
            </div>
            <div>
                <Header />
            </div>
            <div>
                <h2> Filter Settings </h2>
            </div>
            
        </div>
    )
}

export default Filters