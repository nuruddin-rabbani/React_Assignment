import WelcomeText from "./WelcomeText";
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import Button from "./Button";
import FilterBox from "./FilterBox"
import SearchBox from "./SearchBox"

function SectionHeader({ title}) {
    return (
        <div className="bg-[#f4f4f5] pt-[32px] pb-[23px]">
            <Container className="max-w-[1268px] flex flex-col md:flex-row md:justify-between items-start">
                <div className="pb-2">
                    <WelcomeText>Welcome back</WelcomeText>
                    <SectionTitle className="w-full">{title}</SectionTitle>
                </div>
                <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-[14px] md:justify-end">
                    <SearchBox />
                    <FilterBox />
                    <Button>Cyber Ai</Button>
                </div>
            </Container>
        </div>
    );
}

export default SectionHeader;
