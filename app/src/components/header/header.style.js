import styled from "styled-components";
// a styled line with a shadow on top

export const Container = styled.div`
    max-width: 1168px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Break = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
    margin: 0;
    border-bottom: 2px groove rgba(178, 178, 178, 0.56);
`;

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
        font-size: 0.8rem;
    }
    h2 {
        font-size: 1.4rem;
    }
`;

export const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    font-stretch: expanded;
    color: ${(props) => props.theme.color.text};
    font-size: ${(props) => props.size || props.theme.text.size.Gicantic};
    margin-top: 64px;
    margin-bottom: 32px;
`;
