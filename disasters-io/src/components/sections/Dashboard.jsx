import { useState } from "react";
import { DashboardCardInfo } from "../../data/data";
import Button from "../common/Button";
import Container from "../common/Container";
import FilterBox from "../common/FilterBox";
import SearchBox from "../common/SearchBox";
import SectionTitle from "../common/SectionTitle";
import WelcomeText from "../common/WelcomeText";

function Dashboard() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };
    return (
        <>
            <section className="bg-[#E4E4E7] pt-[32px] pb-[23px]">
                <Container className="max-w-[1268px] flex flex-col md:flex-row md:justify-between items-start">
                    <div className="">
                        <WelcomeText>Welcome back</WelcomeText>
                        <SectionTitle>Dashboard</SectionTitle>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-[14px] md:justify-end">
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
                                ({ img, title, subtitle, amount }, i) => (
                                    <div className="pb-[10px]" key={i}>
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

            {/*======================= ChatButton=================== */}
            <div>
                <div className="fixed bottom-[10px] md:bottom-[30px] right-[10px] md:right-[30px]">
                    <button
                        className="size-[50px] lg:size-[77px]"
                        onClick={toggleChat}
                    >
                        <img src="/img/ChatBtn.png" alt="Chat Button" />
                    </button>
                </div>
                {/*================= Chatbox======================= */}
                {isChatOpen && (
                    <div className="fixed bottom-[80px] right-[10px] md:right-[30px] bg-[#f4f4f5] shadow-lg rounded-[12px] max-w-[331px] md:w-[331px] overflow-hidden">
                        <h2 className="bg-primary text-white text-[14px] md:text-[18px] font-bold leading-[23px] px-[15px] py-[15px] md:py-[25px]">
                            Chat With Cypher
                        </h2>
                        <div className="space-y-[5px] md:space-y-[15px] pt-[8px] md:pt-[27px] pb-[8px] md:pb-[15px] px-[15px] relative">
                            <div className="max-w-[213px] ms-auto">
                                <p className="text-[10px] md:text-[12px] bg-[#3f3f46] text-white rounded-[7px] px-[8px] md:px-[13px] py-[10px] md:py-[15px] inline-block">
                                    Lorem ipsum dolar sit general sac mascho
                                    werho
                                </p>
                            </div>
                            <div className="max-w-[213px] me-auto">
                                <p className="text-[10px] md:text-[12px] bg-transparent text-accent border-[#e4e4e7]  border-[1px] rounded-[7px] px-[8px] md:px-[13px] py-[10px] md:py-[15px] inline-block">
                                    Lorem ipsum dolar sit general sac mascho
                                    werho
                                </p>
                            </div>
                            <div className="max-w-[213px] me-auto">
                                <p className="text-[12px] bg-transparent text-accent border-[1px] border-[#e4e4e7] rounded-[7px] px-[13px] py-[15px] inline-block">
                                    Lorem ipsum dolar sit general sac mascho
                                    werho
                                </p>
                            </div>
                            <div className="max-w-[213px] ms-auto">
                                <p className="text-[10px] md:text-[12px] bg-[#3f3f46] text-white rounded-[7px] px-[8px] md:px-[13px] py-[10px] md:py-[15px] inline-block">
                                    Lorem ipsum dolar sit general sac mascho
                                    werho
                                </p>
                            </div>
                            <input
                                className="w-full px-[10px] py-[12px] md:py-[17px] border border-[#e5e7eb] rounded-[6px] outline-none placeholder:text-[12px] bg-transparent"
                                type="text"
                                placeholder="Enter Your Question "
                            />
                            <div className="flex justify-between">
                                <div className="flex gap-[7px] items-center ">
                                    <img
                                        className="size-4 md:size-6"
                                        src="/img/AttachIcon01.png"
                                        alt=""
                                    />
                                    <img
                                        className="size-4 md:size-6"
                                        src="/img/AttachIcon02.png"
                                        alt=""
                                    />
                                    <img
                                        className="size-4 md:size-6"
                                        src="/img/AttachIcon03.png"
                                        alt=""
                                    />
                                </div>
                                <button className="text-[12px] md:text-[15px] bg-primary text-white rounded-full px-[25px] py-[5px] md:py-[11px]">
                                    Send
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="text-[20px] mt-4 px-4 py-2 bg-transparent text-white rounded absolute top-0 right-0"
                        >
                            &times;
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Dashboard;
