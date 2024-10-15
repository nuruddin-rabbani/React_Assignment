function SearchBox() {
    return (
        <div className="flex items-center border-[1px] gap-[5px] ps-[10px] py-[17px] border-[#eae4e7] rounded-[6px] w-full md:w-[190px] h-[42px] bg-white">
            <img className="w-[18px]" src="/img/SearchIcon.png" />
            <input
                className="w-full pe-[5px] border-none outline-none placeholder:text-[12px] placeholder:text-[#71717A] overflow-ellipsis"
                type="text"
                placeholder="Search incident"
            />
        </div>
    );
}

export default SearchBox;
