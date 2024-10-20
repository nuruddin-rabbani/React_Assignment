import { cn } from "../../utilities/Index";

function Button({ children, className }) {
    return (
        <button
            className={cn(
                "bg-primary md:px-[15px] lg:px-[25px] h-[42px] text-[12px] text-[#FAFAFA] rounded-[6px] font-bold",
                className
            )}
        >
            {children}
        </button>
    );
}

export default Button;
