import { DashboardCardInfo } from "../../data/data";

function Cards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-start gap-[25px] py-10">
            {DashboardCardInfo.map(({ img, title, subtitle, amount }, i) => (
                <div className="pb-[10px] relative" key={i}>
                    <img className="w-full" src={img} alt={name} />
                    <div className="pt-5">
                        <h1 className="font-bold leading-[30px] text-secondary">
                            {title}
                        </h1>
                        <p className="text-[14px] text-accent leading-[30px]">
                            {subtitle}
                        </p>
                        <p className="font-bold leading-[30px] text-secondary">
                            {amount}
                        </p>
                    </div>
                    <img
                        className="absolute top-[10px] right-[10px] w-[67px] md:w-[87px] h-[30px] md:h-[36px]"
                        src="/img/FloatBtn.png"
                        alt=""
                    />
                </div>
            ))}
        </div>
    );
}

export default Cards;
