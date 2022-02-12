import styled from "styled-components";
import { Container } from "../../theme/global";
//a styled div that contains card
export const ContainerCard = styled(Container)`
    ${Container}
    position: relative;
    margin: 0px 52px;
    /* margin-bottom: 96px; */
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    height: 80%;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;
