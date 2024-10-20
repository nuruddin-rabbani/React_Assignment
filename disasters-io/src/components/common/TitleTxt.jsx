import { cn } from "../../utilities/Index";

function TitleTxt({ children, className }) {
    return (
        <h3
            className={cn(
                "text-[14px] font-bold leading-[22px] pb-[15px]",
                className
            )}
        >
            {children}
        </h3>
    );
}

export default TitleTxt;
