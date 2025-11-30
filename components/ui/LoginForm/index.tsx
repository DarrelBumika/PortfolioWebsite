import InputFiled from "@/components/ui/InputFiled";
import Button from "@/components/ui/Button";
import React from "react";

interface LoginFormProps {
    onSubmit?: (credentials: { username: string, password: string}) => Promise<never>
}

const LoginForm: React.FC<LoginFormProps> = (
    {
        onSubmit
    }
) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            const response = await onSubmit({ username, password });
            if (response) {
                setError(true);
            }
        }
    }
    return (
        <div className="flex justify-center items-center gap-16">
            <h1 className="w-2xl flex font-display text-foreground text-8xl text-end">
                YOU ‘BOUT TO ENTER VEEEERY RESTRICTED AREA
            </h1>
            <form
                title="login-form"
                className="w-md flex flex-col gap-3 p-4"
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between items-end">
                    <h2 className="flex font-display text-6xl ">LOGIN</h2>
                    {error && (
                        <p className="font-sans font-semibold text-red-500 leading-4 text-right">
                            Incorrect <br/>
                            Username or Password
                        </p>
                    )}
                </div>
                <InputFiled
                    value={username}
                    label="USERNAME"
                    labelDirection="column"
                    placeholder="Enter your username"
                    onChange={setUsername}
                    required
                />
                <InputFiled
                    value={password}
                    type="password"
                    label="PASSWORD"
                    labelDirection="column"
                    placeholder="Enter your password"
                    onChange={setPassword}
                    required
                />
                <Button
                    label="LOGIN"
                    fullWidth
                />
            </form>
        </div>
    )
}

export default LoginForm;