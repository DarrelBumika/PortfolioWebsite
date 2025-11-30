import React from "react";
import classNames from "classnames";

interface ButtonProps {
    label: string;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = (
    {
        label,
        fullWidth = false
    }
) => {
  return (
      <button
        className={classNames(
            "flex justify-center items-center px-8 py-4 bg-foreground rounded-lg font-display text-base text-background hover:cursor-pointer",
            {
                "w-full": fullWidth,
            }
        )}
      >
          {label}
      </button>
  )
}

export default Button