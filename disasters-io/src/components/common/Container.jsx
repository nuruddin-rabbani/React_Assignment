import { cn } from "../../utilities/Index";

function Container({ children, className }) {
    return (
        <div className={cn("w-full max-w-[1300px] mx-auto px-5", className)}>
            {children}
        </div>
    );
}

export default Container;
