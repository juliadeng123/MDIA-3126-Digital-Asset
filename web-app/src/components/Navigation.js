import Link from "next/link";

export default async function Navigation() {


    return (
        <nav className='p-3'>
            <header>
                <h2 className='text-2xl mb-3'>Navigation</h2>
            </header>

            <ul className='mb-2'>
                <li>
                    <Link href={"/map"}>Maps</Link>
                </li>
                <li>
                    <Link href={"/api"}>APIs</Link>
                </li>
                <li>
                    <Link href={"/memories"}>Memories</Link>
                </li>
                {(
                    <li>
                        <Link href={"/login"}>Login</Link>
                    </li>
                )}
            </ul>

        </nav>
    );
}
