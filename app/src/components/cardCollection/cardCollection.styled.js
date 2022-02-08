import styled from "styled-components";
import { Container } from "../../global";
//a styled div that contains card
export const ContainerCard = styled(Container)`
    ${Container}
    position: relative;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: baseline;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;
