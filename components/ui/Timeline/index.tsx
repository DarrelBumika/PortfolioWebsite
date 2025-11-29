import classNames from "classnames";
import { TimelineProps } from "@/types/timeline";

const Timeline = (
    {
        data,
        gap
    }: TimelineProps
) => {
    return (
        <div
            className="flex flex-col"
        >
            { data.map((item, index) => (
                <div
                    key={index}
                    className="relative flex gap-4"
                >
                    {index !== data.length - 1 && (
                        <div className="absolute flex min-h-full w-4 justify-center translate-y-1/2">
                            <div className="min-h-full w-1 bg-foreground self-stretch"/>
                        </div>
                    )}
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 items-center">
                            <div className="w-4 h-4 bg-foreground rounded-full"/>
                            <div
                                className={classNames(
                                    "flex flex-col",
                                    {
                                        [`mb-${gap}`]: gap !== undefined
                                    }
                                )}
                            >
                                {item.content}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Timeline