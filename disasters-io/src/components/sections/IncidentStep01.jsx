import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const steps = [
    {
        label: "What type of incident?",
        description: "Choose the category that best describes the incident.",
        icon: "/img/IncidenIcon01.png",
    },
    {
        label: "Tell us about the incident?",
        description: "Let's connect the dots and see where to start.",
        icon: "/img/IncidenIcon02.png",
    },
    {
        label: "Where did the incident occur?",
        description: "Lorem ipsum dolar sit general sac mascho werho.",
        icon: "/img/IncidenIcon03.png",
    },
];


function IncidentStep01({ onNextStep }) {
    return (
        <section className="mt-[85px]">
            <Container className="flex flex-col items-center">
                <SectionTitle className="text-[26px] md:text-[32px] leading-10">
                    Let’s get started
                </SectionTitle>
                <p className="max-w-[468px] text-accent text-center text-[14px] pt-[14px]">
                    Lorem ipsum dolar sit general sac mascho werhoLorem ipsum
                    dolar sit general sac mascho werhoLorem ipsum dolar sit gene
                </p>{" "}
                <img
                    className="w-[609px] py-[33px]"
                    src="/img/Stepbar.png"
                    alt=""
                />
                <div className="flex flex-col md:flex-row gap-[35px] lg:gap-[55px]">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#f4f4f5] rounded-[10px] w-full lg:w-[235px] h-[269px] flex flex-col items-start justify-between cursor-pointer px-5 py-6"
                        >
                            <img
                                src={step.icon}
                                className="size-[44px] md:size-[54px]"
                            />
                            <div className="">
                                <h3 className="font-bold text-[20px] pb-[22px] leading-[29px]">
                                    {step.label}
                                </h3>
                                <p className="text-[14px] text-accent">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-[62px] lg:mt-[102px] mb-[45px]">
                    <button
                        onClick={onNextStep}
                        className="bg-primary px-[25px] h-[42px] text-[12px]  text-[#FAFAFA] rounded-[6px] font-bold"
                    >
                        Get Started
                    </button>
                </div>
            </Container>
        </section>
    );
}

export default IncidentStep01;
