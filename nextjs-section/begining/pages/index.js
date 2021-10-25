import Link from "next/link";

function HomePage() {
    return (
        <>
            <h1>Home Page</h1>
            <Link href='/news'>News Page</Link>
        </>
    )
}

export default HomePage