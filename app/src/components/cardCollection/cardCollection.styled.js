import styled from "styled-components";
import { Container } from "../../global";
//a styled div that contains card
export const ContainerCard = styled(Container)`
    ${Container}
    position: relative;
    margin: 0px 52px;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;
