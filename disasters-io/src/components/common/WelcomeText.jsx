import React from "react";
import { cn } from "../../utilities/Index";

function WelcomeText({ children, className }) {
    return (
        <p
            className={cn(
                "font-[12px] text-accent leading-[15.3px]",
                className
            )}
        >
            {children}
        </p>
    );
}

export default WelcomeText;
