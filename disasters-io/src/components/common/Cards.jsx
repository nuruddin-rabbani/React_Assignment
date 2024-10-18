import { DashboardCardInfo } from "../../data/data";
// import Container from "./Container";
// import WelcomeText from "./WelcomeText";
// import SectionTitle from "./SectionTitle";
// import SearchBox from "./SearchBox";
// import FilterBox from "./FilterBox";
function Cards({ handleNewIncident }) {
    return (
        <section>
            {/* <div className="bg-[#f4f4f5] pt-[32px] pb-[23px]">
                <Container className="max-w-[1268px] flex flex-col md:flex-row md:justify-between items-start">
                    <div className="pb-2">
                        <WelcomeText>Welcome back</WelcomeText>
                        <SectionTitle>Incidents</SectionTitle>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-[14px] md:justify-end">
                        <SearchBox />
                        <FilterBox />
                        <button
                            onClick={handleNewIncident}
                            className="bg-primary px-[25px] h-[42px] text-[12px] text-[#FAFAFA] rounded-[6px] font-bold"
                        >
                            New Incidents
                        </button>
                    </div>
                </Container>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-start gap-[25px] py-10">
                {DashboardCardInfo.map(
                    ({ img, title, subtitle, amount }, i) => (
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
                    )
                )}
            </div>
        </section>
    );
}

export default Cards;
