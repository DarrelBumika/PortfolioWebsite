interface ProjectProps {
    title: string;
    year: number;
    techs: string[];
}
interface LogoIconProps {
    size?: number;
    className?: string;
    color?: string;
}
interface ExperienceProps {
    position: string;
    company: string;
    year: number;
    arrangement: string;
    type: string,
}

export type {
    ProjectProps,
    LogoIconProps,
    ExperienceProps
};