import Link from 'next/link'

function HomePage() {
    return (
        <>
            <h1>The News Page</h1>
            <ul>
                <li><Link href='/'>Home Page</Link></li>
                <li>Link 2</li>
            </ul>
        </>
    )
}

export default HomePage