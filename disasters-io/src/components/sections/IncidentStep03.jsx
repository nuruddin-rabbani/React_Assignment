import SectionTitle from "../common/SectionTitle";
import WelcomeText from "../common/WelcomeText";
import Container from "../common/Container";

function IncidentStep03({ onNextStep }) {
    return (
        <section>
            <Container className="max-w-full md:max-w-[752px] pt-10">
                <SectionTitle className="text-[18px] md:text-[24px]">
                    Let’s give the incident a title?
                </SectionTitle>
                <WelcomeText className="text-[14px] pt-3 pb-6">
                    Make a title that will easily identify the incidents
                </WelcomeText>
                <input
                    className="bg-[#f4f4f5] w-full rounded-[6px] px-[10px] py-2.5 lg:py-5"
                    type="text"
                    placeholder="Add title here"
                />
                <SectionTitle className="text-[18px] md:text-[24px] pt-[25px]">
                    Describe what happened during the incident?
                </SectionTitle>
                <WelcomeText className="text-[14px] pt-3 pb-6">
                    Share some information about the incident. The when, where,
                    how.
                </WelcomeText>
                <textarea
                    className="bg-[#f4f4f5] w-full h-[127px] rounded-[6px] px-[10px] py-2.5 lg:py-5 resize-none"
                    type="text"
                    placeholder="Type Here"
                />

                <div className="w-full text-center ">
                    <button
                        onClick={onNextStep}
                        className="bg-primary text-[14px] md:text-[16px] px-[25px] py-[12px] lg:py-[15px] text-white rounded-[10px] font-bold mt-10 mb-20"
                    >
                        Next Step
                    </button>
                </div>
            </Container>
        </section>
    );
}

export default IncidentStep03;
