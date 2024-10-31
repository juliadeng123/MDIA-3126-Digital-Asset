import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Navigation() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    return (
        <nav className='p-3'>
            <header>
                <h2 className='text-2xl mb-3'>Navigation</h2>
                {data?.user && <p>Hello, {data.user.email}</p>}
            </header>

            <ul className='mb-2'>
                <li>
                    <Link href={"/map"}>Maps</Link>
                </li>
                <li>
                    <Link href={"/api"}>APIs</Link>
                </li>
                {!data?.user && (
                    <li>
                        <Link href={"/login"}>Login</Link>
                    </li>
                )}
            </ul>
            {data?.user && (
                <form action='/auth/signout' method='post'>
                    <button className='button block' type='submit'>
                        Sign out
                    </button>
                </form>
            )}
        </nav>
    );
}
