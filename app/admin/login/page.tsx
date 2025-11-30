'use client'

import { useRouter } from "next/navigation";
import LoginForm from "@/components/ui/LoginForm";

const LoginPage = () => {
    const router = useRouter();
    const handleLogin = async (credentials: {username: string, password: string}) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...credentials
                }),
            });

            if (response.ok) {
                router.push('/admin/dashboard');
            }
            return response.json();
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <LoginForm onSubmit={handleLogin} />
        </div>
    )
}

export default LoginPage