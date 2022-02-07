import styled from "styled-components";
import { Container } from "../../global";
//a styled div that contains card
export const ContainerCard = styled(Container)`
    ${Container}
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;
