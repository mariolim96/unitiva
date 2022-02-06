import styled from "styled-components";
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
    h2,
    h6 {
        margin: 0 0 0 1px;
        color: ${(props) => props.theme.color.text1};
    }
    h6 {
        font-size: 0.65rem;
    }
    h2 {
        font-size: 1rem;
    }
`;
