import { DashboardCardInfo } from "../../data/data";
import Button from "../common/Button";
import Container from "../common/Container";
import FilterBox from "../common/FilterBox";
import SearchBox from "../common/SearchBox";
import SectionTitle from "../common/SectionTitle";
import WelcomeText from "../common/WelcomeText";

function Dashboard() {
    return (
        <>
            <section className="bg-[#E4E4E7] pt-[32px] pb-[23px]">
                <Container className="max-w-[1268px] flex flex-col md:flex-row justify-between items-start">
                    <div className="">
                        <WelcomeText>Welcome back</WelcomeText>
                        <SectionTitle>Dashboard</SectionTitle>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-[14px]">
                        <SearchBox className="" />
                        <FilterBox />
                        <Button className="">Cyber Ai</Button>
                    </div>
                </Container>
            </section>
            <section>
                <Container className="max-w-[1300px]">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-start gap-[25px] py-10">
                            {DashboardCardInfo.map(
                                ({ img, title, subtitle, amount }) => (
                                    <div className="pb-[10px]">
                                        <img
                                            className="w-full"
                                            src={img}
                                            alt={name}
                                        />
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
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Dashboard;
