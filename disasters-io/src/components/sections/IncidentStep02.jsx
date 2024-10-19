import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import IncidentsCard from "../common/IncidentsCard";

import React from "react";

function IncidentStep02({ onNextStep }) {
    return (
        <section className="mt-[35px]">
            <Container className="max-w-[800px] ">
                <SectionTitle className="self-start text-[24px] md:text-[32px] font-bold leading-10 mb-[25px]">
                    Which of these best describes the incident?
                </SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <IncidentsCard
                        img={"/img/Avalanche.png"}
                        title={"Avalanche"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/Biological.png"}
                        title={"Biological"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/Blizzard.png"}
                        title={"Blizzard"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/ColdFreezing.png"}
                        title={"Cold/Freezing"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/Drought.png"}
                        title={"Drought"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/Earthquake.png"}
                        title={"Earthquake"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/Flooding.png"}
                        title={"Flooding"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/HeatWave.png"}
                        title={"Heat Wave"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/Hail.png"}
                        title={"Hail"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/Lightning.png"}
                        title={"Lightning"}
                    />
                    <IncidentsCard
                        className={"bg-primary"}
                        img={"/img/incidentImg/ManMade.png"}
                        title={"Man Made"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/Mudslide.png"}
                        title={"Mudslide"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/SevereStorm.png"}
                        title={"Severe Storm"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/StrongWind.png"}
                        title={"Strong Wind"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/Tornado.png"}
                        title={"Tornado"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/Tsunami.png"}
                        title={"Tsunami"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/VolcanicEruption.png"}
                        title={"Volcanic Eruption"}
                    />
                    <IncidentsCard
                        img={"/img/incidentImg/Wildfire.png"}
                        title={"Wildfire"}
                    />
                </div>

                <button onClick={onNextStep}>Click Me</button>
            </Container>
        </section>
    );
}

export default IncidentStep02;
