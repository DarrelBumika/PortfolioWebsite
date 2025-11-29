import {ReactNode} from "react";

interface TimelineItemProps {
    content: ReactNode;
}

interface TimelineProps {
    data: TimelineItemProps[]
    gap?: number;
}

export type {
    TimelineProps,
    TimelineItemProps
}