import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost() {
    return (
    <Layout>
    <Head>
        <title>First Post</title>
    </Head>
    <h1>linda coisa linda</h1>
    <h2>
        <Link href='/'>Back to home</Link>
        <br/>
        <Link href='/'><a>Back to home</a></Link>
    </h2>
    </Layout>
    )
}