import Container from "../common/Container";
import FilterBox from "../common/FilterBox";
import List from "../common/List";
import SearchBox from "../common/SearchBox";
import SectionTitle from "../common/SectionTitle";
import Titlle from "../common/Title";
import WelcomeText from "../common/WelcomeText";

function Locations() {
    return (
        <section className="">
            <div className="bg-[#f4f4f5] pt-[32px] pb-[23px]">
                <Container className="max-w-[1300px] flex flex-col md:flex-row md:justify-between items-start">
                    <div className="pb-2">
                        <WelcomeText className="text-[14px] md:text-[16px]">
                            Incidents - DR-4699 March 2023 Severe Storms
                        </WelcomeText>
                        <div className="flex items-center gap-1 lg:gap-[15px]">
                            <img
                                className="lg:size-[25px] mt-2"
                                src="/img/StromIcon.png"
                                alt=""
                            />
                            <SectionTitle className="md:text-[20px]">
                                DR-4699 March 2023 Severe Storms
                            </SectionTitle>
                        </div>
                    </div>
                    <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-1 lg:gap-[14px] md:justify-end items-center">
                        <SearchBox />
                        <FilterBox />
                        <div className="flex justify-center items-center bg-primary w-full md:w-auto md:px-[10px] lg:px-[25px] h-[42px] rounded-[6px] gap-[2px] gap-0 lg:gap-1">
                            <img className="size-4" src="/img/PlusIcon.png" />
                            <button className="text-[12px] text-[#FAFAFA] font-bold">
                                New Incidents
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* ====================== */}
            <Container className="max-w-[1300px] pt-10 flex flex-col lg:flex-row justify-between gap-[94px]">
                <div className=" basis-1/2">
                    <div className="flex flex-col gap-[45px]">
                        <div className="flex items-start gap-[10px]">
                            <img
                                className="size-[37px] pt-1"
                                src="/img/LocationIcon.png"
                            />
                            <div>
                                <p className="text-[14px] leading-[22px] text-[#687280]">
                                    Location
                                </p>
                                <h2 className="text-[20px] font-bold leading-[29px] text-[#09090B]">
                                    Tulare County, Los Angles, CA 23415
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-start gap-[10px]">
                            <img
                                className="size-[37px] pt-1"
                                src="/img/ApproximateIcon.png"
                            />
                            <div>
                                <p className="text-[14px] leading-[22px] text-[#687280]">
                                    Approx. Cost:
                                </p>
                                <h2 className="text-[20px] font-bold leading-[29px] text-[#09090B]">
                                    $60,607,456.00
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[1px]  bg-[#e4e4e7] my-10"></div>

                    {/* ============Description================ */}
                    <div className="">
                        <Titlle>Description</Titlle>
                        <p className="text-[16px] leading-[22px] text-accent">
                            Lorem ipsum dolar sit general sac mascho werhoLorem
                            ipsum dolar sit general sac mascho werhoLorem ipsum
                            dolar sit general sac mascho werhoLorem ipsum dolar
                            sit general sac mascho werhoLorem ipsum dolar sit
                            general sac mascho werhoLorem ipsum dolar sit
                            general sac mascho werho
                        </p>
                    </div>

                    <div className="w-full h-[1px]  bg-[#e4e4e7] my-10"></div>

                    {/* ==============Locations=============== */}
                    <div>
                        <Titlle>Locations</Titlle>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[17.5px]">
                            {locationCardInfo.map(
                                ({
                                    img,
                                    incidentImg,
                                    title,
                                    subtitle,
                                    amount,
                                }) => (
                                    <div className="relative w-full ">
                                        <img
                                            className="rounded-[7px] w-full w-full lg:w-[214px]"
                                            src={img}
                                        />
                                        <div className="pt-[14px]">
                                            <h2 className="text[-14px] leading-[21px] text-secondary font-bold">
                                                {title}
                                            </h2>
                                            <p className="text-[12px] leading-[21px] text-accent">
                                                {subtitle}
                                            </p>
                                            <p className="text[-14px] leading-[21px] text-secondary font-bold">
                                                {amount}
                                            </p>
                                        </div>
                                        <img
                                            className="w-[125px] lg:w-[67px] h-[45.2px] lg:h-[25.2px] absolute top-[20px] lg:top-[7px] right-[20px] lg:right-[7px]"
                                            src={incidentImg}
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="w-full h-[1px]  bg-[#e4e4e7] my-10"></div>

                    {/* ============Activities================== */}
                    <div>
                        <div className="flex justify-between items-center">
                            <Titlle>Activities</Titlle>
                            <p className="text-[14px] text-secondary underline">
                                Sell all
                            </p>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <List title={"Activity Name"} />
                            <List title={"Activity Name"} />
                        </div>
                    </div>

                    <div className="w-full h-[1px]  bg-[#e4e4e7] my-10"></div>

                    {/* ============Documents================== */}
                    <div className="mb-0 lg:mb-[170px]">
                        <div className="flex justify-between items-center">
                            <Titlle>Documents</Titlle>
                            <p className="text-[14px] text-secondary underline">
                                Sell all
                            </p>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <List title={"Document Name"} />
                            <List title={"Document name"} />
                        </div>
                    </div>
                </div>

                {/* ============Right side================ */}
                <div className="basis-1/2">
                    <p className="text-[14px] lg:ms-[57px] text-secondary">
                        Incident Map
                    </p>
                    <img
                        className="w-full lg:w-[526px] lg:h-[503px] lg:ms-auto py-5"
                        src="/img/Map.png"
                        alt=""
                    />
                    <p className="text-[14px] lg:ms-[57px] text-secondary">
                        Start 19.1232, -118.233 End 19.3245, -119.2323
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default Locations;

const locationCardInfo = [
    {
        img: "/img/LocatioinCardImg01.png",
        incidentImg: "/img/LocationIncident01.png",
        title: "Whitechapel Rd.",
        subtitle: "Tulare County,  Los Angles, CA 23415",
        amount: "$1,456,654.00",
    },
    {
        img: "/img/LocationCardImg02.png",
        incidentImg: "/img/LocationIncident01.png",
        title: "Whitechapel Rd.",
        subtitle: "Tulare County,  Los Angles, CA 23415",
        amount: "$1,456,654.00",
    },
    {
        img: "/img/LocatioinCardImg01.png",
        incidentImg: "/img/LocationIncident01.png",
        title: "Whitechapel Rd.",
        subtitle: "Tulare County,  Los Angles, CA 23415",
        amount: "$1,456,654.00",
    },
    {
        img: "/img/LocatioinCardImg01.png",
        incidentImg: "/img/LocationIncident01.png",
        title: "Whitechapel Rd.",
        subtitle: "Tulare County,  Los Angles, CA 23415",
        amount: "$1,456,654.00",
    },
    {
        img: "/img/LocatioinCardImg01.png",
        incidentImg: "/img/LocationIncident01.png",
        title: "Whitechapel Rd.",
        subtitle: "Tulare County,  Los Angles, CA 23415",
        amount: "$1,456,654.00",
    },
];
