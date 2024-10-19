
function List({title}) {
    return (
        <div className="flex items-center bg-[#f4f4f5] px-[10px] py-[15px] rounded-[10px] gap-[17px]">
            <img
                className="size-[78px] rounded-[10px]"
                src="/img/LocatioinCardImg01.png"
            />
            <div>
                <h3 className="font-bold text-secondary">{title}</h3>
                <div>
                    <span className="text-[14px] text-accent">
                        Location name
                    </span>
                    <span></span>
                    <span className="text-[14px] text-accent">
                        16.12212, -122.1424
                    </span>
                    <p className="font-bold text-secondary">$1,456,654.00</p>
                </div>
            </div>
        </div>
    );
}

export default List; 