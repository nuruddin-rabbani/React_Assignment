import { useState } from "react";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import Cards from "../common/Cards";

function Dashboard() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };
    return (
        <>
            <section>
                <SectionHeader title={"Dashboard"} btnName={"Cypher Ai"} />
                <Container className="max-w-[1300px]">
                        <Cards/>
                </Container>

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
                        <div className="fixed bottom-[70px] md:bottom-[90px] lg:bottom-[120px] right-[10px] md:right-[30px] bg-[#f4f4f5] shadow-lg rounded-[12px] max-w-[331px] md:w-[331px] overflow-hidden">
                            <h2 className="bg-primary text-white text-[14px] md:text-[18px] font-bold leading-[23px] px-[15px] py-[15px] md:py-[25px]">
                                Chat With Cypher
                            </h2>

                            <div className="space-y-[5px] md:space-y-[15px] pt-[8px] md:pt-[27px] pb-[8px] md:pb-[15px] px-[15px]">
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
                                className="fixed bottom-[16px] md:bottom-[35px] right-[10px] md:right-[29px]"
                            >
                                <img
                                    className="bg-white rounded-full size-[53px] lg:size-[80px] shadow-chatBtn-shadow"
                                    src="/img/CloseBtn.png"
                                    alt=""
                                />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Dashboard;
