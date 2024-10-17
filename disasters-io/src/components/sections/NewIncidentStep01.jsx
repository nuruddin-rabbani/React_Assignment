import React, { useState } from "react";
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

export const NewIncidentStep01 = ({ onGetStarted }) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (index) => {
        setActiveStep(index);
    };

    return (
        <section className="mt-[35px]">
            <Container className="flex flex-col items-center">
                <SectionTitle className="text-[26px] md:text-[32px] leading-10">
                    Let’s get started
                </SectionTitle>
                <p className="max-w-[468px] text-accent text-center text-[14px] pt-[14px]">
                    Lorem ipsum dolar sit general sac mascho werhoLorem ipsum
                    dolar sit general sac mascho werhoLorem ipsum dolar sit gene
                </p>
                <img
                    className="w-[609px] py-[33px]"
                    src="/img/Stepbar.png"
                    alt=""
                />
                <div className="flex flex-col md:flex-row gap-[35px] lg:gap-[55px]">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#E4E4E7] rounded-[10px] w-full lg:w-[235px] h-[269px] flex flex-col items-start justify-between cursor-pointer px-5 py-6"
                            onClick={() => handleStepClick(index)}
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
                <div className="text-center mt-[72px] lg:mt-[102px]">
                    <button
                        className="bg-primary px-[25px] h-[42px] text-[12px]  text-[#FAFAFA] rounded-[6px] font-bold"
                        onClick={onGetStarted}
                    >
                        Get Started
                    </button>
                </div>
            </Container>
        </section>
    );
};

const App = () => {
    const [showStepper, setShowStepper] = useState(true);

    const handleGetStarted = () => {
        setShowStepper(false);
    };

    return (
        <div>
            {showStepper ? (
                <StepperComponent onGetStarted={handleGetStarted} />
            ) : (
                <div className="max-w-md mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">
                        Welcome to the next page
                    </h1>
                    <p className="text-lg">
                        You have successfully completed the steps!
                    </p>
                </div>
            )}
        </div>
    );
};

export default App;
