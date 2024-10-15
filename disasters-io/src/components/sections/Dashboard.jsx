import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import WelcomeText from "../common/WelcomeText";
import SearchBox from "../common/SearchBox";
import FilterBox from "../common/FilterBox";
import Button from "../common/Button";
import { DashboardCardInfo } from "../../data/data";

function Dashboard() {
    return (
        <>
            <section className="bg-[#E4E4E7] pt-[32px] pb-[23px]">
                <Container className="max-w-[1268px] flex justify-between items-center">
                    <div className="">
                        <WelcomeText>Welcome back</WelcomeText>
                        <SectionTitle>Dashboard</SectionTitle>
                    </div>
                    <div className="flex gap-[14px]">
                        <SearchBox />
                        <FilterBox />
                        <Button>Cyber Ai</Button>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div>
                        <div className="grid grid-cols-4 items-start gap-[25px] py-10">
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
