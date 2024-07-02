import { useState } from "react";
import "./Login.css";

function Login({ setIsLogin, setShowLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailed, setLoginFailed] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 

    const handleLogin = async () => {
        setIsLoading(true); 

        try {
            const res = await fetch("https://fullstack-ecom-render.onrender.com/account/login/", {
                method: "POST",
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if (res.ok) {
                setIsLogin(true);
            } else {
                setLoginFailed(true);
            }
        } catch (error) {
            console.error("Login error:", error);
            setLoginFailed(true);
        } finally {
            setIsLoading(false); 
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    return (
        <>
            <div id="form-container">
                <h1 className="title">Login</h1>
                <div className="label">Username</div>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <div className="label">Password</div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="submit_s"
                    onClick={handleLogin}
                    disabled={isLoading} 
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
                <div className="label msg">
                    ◆ Don't have an account?{" "}
                    <a
                        className="heading"
                        onClick={() => setShowLogin(false)}
                        href="#"
                    >
                        Register
                    </a>
                    {loginFailed && <p className="error-msg">Login Failed! Invalid username or password.</p>}
                </div>
            </div>
        </>
    );
}

export default Login;
