import React from "react";
import SectionTitle from "../common/SectionTitle";
import WelcomeText from "../common/WelcomeText";
import Container from "../common/Container";

function FinalStep({ onNextStep }) {
    return (
        <section>
            <Container className="max-w-[752px] pt-10">
                <SectionTitle className="text-[24px]">
                    Where’s the incident?
                </SectionTitle>
                <WelcomeText className="text-[14px] pt-3 pb-6 max-w-[518px]">
                    Enter a GPS, address. or pin point on the map. Try to be as
                    accurate as possible, or click:Jurisdiction Wide
                </WelcomeText>
                <img className="w-full h-[490px]" src="/img/Map.png" alt="" />
            </Container>
        </section>
    );
}

export default FinalStep;
