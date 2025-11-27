import Image from 'next/image';

export default function IconButton(
    { icon, altText, onClick }:
    { icon: string; altText: string; onClick: () => void }
) {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer">
            <Image
                src={icon}
                alt={altText}
                className="h-6 w-6"
            />
        </button>
    );
}