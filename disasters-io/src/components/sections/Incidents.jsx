import { useState } from "react";
import Cards from "../common/Cards";
import Container from "../common/Container";
import FilterBox from "../common/FilterBox";
import SearchBox from "../common/SearchBox";
import SectionTitle from "../common/SectionTitle";
import WelcomeText from "../common/WelcomeText";
import { NewIncidentStep01 } from "../sections/NewIncidentStep01";

function Incidents() {
    const [newIncident, setNewIncidents] = useState(false); 

    const handleNewIncident = () => {
        setNewIncidents(true); 
    }

    return (
        <section>
            <div className="bg-[#E4E4E7] pt-[32px] pb-[23px]">
                <Container className="max-w-[1268px] flex flex-col md:flex-row md:justify-between items-start">
                    <div className="pb-2">
                        <WelcomeText>Welcome back</WelcomeText>
                        <SectionTitle>Incidents</SectionTitle>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-[14px] md:justify-end">
                        <SearchBox />
                        <FilterBox />
                        <button onClick={handleNewIncident} className="bg-primary px-[25px] h-[42px] text-[12px] text-[#FAFAFA] rounded-[6px] font-bold">
                            New Incidents
                        </button>
                    </div>
                </Container>
            </div>
            <Container>
                
            {newIncident ? <NewIncidentStep01/> : <Cards />}
            </Container>
        </section>
    );
}

export default Incidents;
