import { useMediaQuery } from "react-responsive";

const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });