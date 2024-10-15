function FilterBox() {
    return (
        <div className="flex items-center border-[1px] gap-[2px] ps-[10px] border-[#eae4e7] rounded-[6px] w-[148px] h-[42px] bg-white py-[17px]">
            <p className="text-[12px] text-[#a1a1aa]">Sort By:</p>

            <select className="text-[12px] border-none outline-none px-[3px] appearance-none text-[#71717A]">
                <option className="px-[3px]">Date modified</option>
                <option className="px-[3px]">Name</option>
                <option className="px-[3px]">Time</option>
            </select>
        </div>
    );
}

export default FilterBox;
