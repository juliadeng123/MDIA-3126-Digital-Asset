import { login, signup } from "./actions";

export default function LoginPage() {
    const buttonClassName =
        "className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-purple-200 bg-black px-6 font-medium text-purple-200 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]'";

    return (
        <div className='p-4 bg-purple-200'>
            <form className='border-4 border-black p-4 text-center text-black'>
                <fieldset className='flex mb-2'>
                    <label className='mr-2' htmlFor='email'>
                        Email:
                    </label>
                    <input id='email' name='email' type='email' required />
                </fieldset>
                <fieldset className='flex mb-2'>
                    <label className='mr-2' htmlFor='password'>
                        Password:
                    </label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        required
                    />
                </fieldset>
                <fieldset className='flex'>
                    <button
                        className={`mr-2 ${buttonClassName}`}
                        formAction={login}
                    >
                        Log in
                    </button>
                    <button className={buttonClassName} formAction={signup}>
                        Sign up
                    </button>
                </fieldset>
            </form>
        </div>
    );
}
