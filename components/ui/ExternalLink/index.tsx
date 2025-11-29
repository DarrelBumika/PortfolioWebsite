import { ArrowIcon } from '@/components/icons';
import classNames from "classnames";

export default function ExternalLink(
    {
        title,
        url,
        size
    }: {
        title: string;
        url: string,
        size?: "small" | "large";
    }
) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(
                "flex items-center gap-2 font-display font-normal text-foreground",
                {
                    "text-4xl ": size === "small" || !size,
                    "text-6xl": size === "large",
                }
            )}
        >
            {title}
            <ArrowIcon />
        </a>
    );
}