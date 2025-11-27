import { LogoIconProps } from "@/types";

export function LogoIcon(
    {
        size = 16,
        className = "",
        color = "#2A2A2A"
    }: LogoIconProps
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 107 16"
            width={size * (107 / 16)}
            height={size}
            fill="none"
            className={className}
        >
            <title>{"Logo Icon"}</title>
            <path
                d="M0 0H9C13.4183 0 17 3.58172 17 8C17 12.4183 13.4183 16 9 16H0V0Z"
                fill={color}/>
            <path
                d="M19 16L19 8C19 3.58172 22.5817 7.97112e-07 27 6.03983e-07C31.4183 4.10854e-07 35 3.58172 35 8L35 16L19 16Z"
                fill={color}/>
            <path
                d="M47.4 10.4H47.8C50.6719 10.4 53 8.07188 53 5.2C53 2.32812 50.6719 0 47.8 0H37V10.4V16H53C53 12.9072 50.4928 10.4 47.4 10.4Z"
                fill={color}/>
            <path
                d="M65.4 10.4H65.8C68.6719 10.4 71 8.07188 71 5.2C71 2.32812 68.6719 0 65.8 0H55V10.4V16H71C71 12.9072 68.4928 10.4 65.4 10.4Z"
                fill={color}/>
            <path
                d="M89 0H73V5.6V10.4V16H89C89 12.9072 86.4928 10.4 83.4 10.4H82.6C83.9255 10.4 85 9.32548 85 8C85 6.67452 83.9255 5.6 82.6 5.6H83.4C86.4928 5.6 89 3.09279 89 0Z"
                fill={color}/>
            <path
                d="M98.9602 0H91V8C91 12.4183 94.5639 16 98.9602 16H107V5.6H98.9602V0Z"
                fill={color}/>
        </svg>
    );
}