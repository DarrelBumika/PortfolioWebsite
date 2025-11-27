export function ArrowIcon(
    {
        size = 24,
        color = "#2A2A2A"
    } : {
        size?: number
        color?: string
    }
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width={size}
            height={size}
            fill="none">
                <path
                    d="M3 27L27 3M0 3H0 27V27 30"
                    stroke={color}
                    strokeWidth={size / 4}/>
        </svg>
    )
}

