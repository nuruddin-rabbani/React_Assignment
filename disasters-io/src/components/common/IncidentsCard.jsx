import React from "react";

function IncidentsCard({ img, title }) {
    return (
        <button className="h-[69px] bg-[#e4e4e7] flex justify-center items-center rounded-[6px] gap-[7.5px]">
            <img className="size-6" src={img} alt="" />
            <h5>{title}</h5>
        </button>
    );
}

export default IncidentsCard;
