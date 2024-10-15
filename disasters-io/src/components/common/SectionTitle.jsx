import React from "react";
import { cn } from "../../utilities/Index";

function SectionTitle({ children, className }) {
    return (
        <h1
            className={cn(
                "text-[22px] md:text-[26px] font-bold leading-[33.15px] pt-[6px]",
                className
            )}
        >
            {children}
        </h1>
    );
}

export default SectionTitle;
