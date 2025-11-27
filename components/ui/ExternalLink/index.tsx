import { ArrowIcon } from '@/components/icons';

export default function ExternalLink(
    {
        title,
        url
    }: {
        title: string;
        url: string
    }
) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-display font-normal text-4xl text-foreground"
        >
            {title}
            <ArrowIcon />
        </a>
    );
}