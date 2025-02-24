import { useState } from 'react';
import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  // Reset error before validation

        if (!email || !password) {
            setError("Both fields are required!");
            return;
        }

        // Redirect to dashboard if both fields are filled
        router.push('/dashboard');  // Redirect to Dashboard page
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftPanel}>
                <h1>Welcome Back!</h1>
                <p>Login to continue your journey.</p>
            </div>
            <div className={styles.rightPanel}>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input 
                        type="email" 
                        placeholder="name@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className={styles.options}>
                        <label>
                            <input type="checkbox" id="remember" />
                            Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    {error && <div className={styles.error}>{error}</div>}
                    <button type="submit" className={styles.loginBtn}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
