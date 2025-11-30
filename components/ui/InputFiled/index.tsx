import React from "react";
import classNames from "classnames";

interface InputFiledProps {
    value?: string;
    fullWidth?: boolean;
    type?: string;
    label?: string;
    labelDirection?: "row" | "column";
    placeholder?: string;
    onChange?: (e: string) => void;
    required?: boolean;
}

const InputFiled: React.FC<InputFiledProps> = (
    {
        value,
        fullWidth = false,
        type = "text",
        label,
        labelDirection = "row",
        placeholder,
        onChange = () => {},
        required = false,
    }
) => {
    return (
        <div
            className={classNames(
                "grid",
                {
                    "w-full": fullWidth,
                },
                {
                    "grid-cols-2 gap-4": labelDirection === "row",
                    "flex-col gap-1": labelDirection === "column"
                }
            )}
        >
            <label
                className={classNames(
                    "flex items-center font-display text-base text-foreground",
                    {
                        "justify-self-end": labelDirection === "row",
                    }
                )}
                htmlFor={label}>
                    {label}
                    {required && (
                        <span className="text-red-500">*</span>
                    )}
            </label>
            <input
                className="px-4 py-2 bg-background outine outline-1 outline-foreground rounded-lg font-sans font-normal text-2xl text-foreground"
                id={label}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                required={required}/>
        </div>
    )
}

export default InputFiled