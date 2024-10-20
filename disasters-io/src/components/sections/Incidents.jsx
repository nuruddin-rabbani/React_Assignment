import { useState } from "react";
import Cards from "../common/Cards";
import Container from "../common/Container";
import FilterBox from "../common/FilterBox";
import SearchBox from "../common/SearchBox";
import SectionTitle from "../common/SectionTitle";
import WelcomeText from "../common/WelcomeText";
import FinalStep from "./FinalStep";
import IncidentStep01 from "./IncidentStep01";
import IncidentStep02 from "./IncidentStep02";
import IncidentStep03 from "./IncidentStep03";

function Incidents() {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNewIncident = () => {
        setCurrentStep(1);
    };

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    return (
        <section>
            <div className="bg-[#f4f4f5] pt-[32px] pb-[23px]">
                <Container className="max-w-[1300px] flex flex-col md:flex-row md:justify-between items-start">
                    <div className="pb-2">
                        <WelcomeText>Welcome back</WelcomeText>
                        <SectionTitle>Incidents</SectionTitle>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-[14px] md:justify-end">
                        <SearchBox />
                        <FilterBox />
                        <div className="flex justify-center items-center bg-primary w-full md:w-auto md:px-[10px] lg:px-[25px] h-[42px] rounded-[6px] gap-[2px] lg:gap-1">
                            <img className="size-4" src="/img/PlusIcon.png" />
                            <button
                                onClick={handleNewIncident}
                                className="text-[12px] text-[#FAFAFA] font-bold"
                            >
                                New Incidents
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                {currentStep === 0 && <Cards />}
                {currentStep === 1 && (
                    <IncidentStep01 onNextStep={handleNextStep} />
                )}
                {currentStep === 2 && (
                    <IncidentStep02 onNextStep={handleNextStep} />
                )}
                {currentStep === 3 && (
                    <IncidentStep03 onNextStep={handleNextStep} />
                )}
                {currentStep === 4 && <FinalStep />}
            </Container>
        </section>
    );
}

export default Incidents;
