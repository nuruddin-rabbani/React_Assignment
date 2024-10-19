import React from "react";
import { cn } from "../../utilities/Index";
function IncidentsCard({ img, title }) {
    return (
        <button className="w-full lg:w-[180px] h-[50px] lg:h-[70px] bg-[#e4e4e7] flex justify-start ps-2.5 items-center rounded-[6px] gap-[7.5px]">
            <img className="size-6" src={img} alt="" />
            <h5 className="text-[14px]">{title}</h5>
        </button>
    );
}

export default IncidentsCard;
