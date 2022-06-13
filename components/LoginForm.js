

export default function LoginForm({ onLogin }) {


    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <form onSubmit={handleSubmit} className="relative justify-center w-full h-full max-w-screen-xl px-5 py-3 ml-auto mr-auto text-center border-4 border-solid rounded-lg top-56 bg-emerald-200 border-emerald-400">
            <fieldset autoComplete='off'>
                <legend>Log In</legend>
                <label htmlFor="username">Username</label>
                <input name="username" className="emerald-400"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="placeholder-gray-300 border border-2 border-emerald-200"/>
                <button>Log In</button>
            </fieldset>
        </form>
    );
}
