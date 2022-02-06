import styled from "styled-components";

//a centered h1 element

export const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.theme.color.text1};
    font-size: ${(props) => props.size || props.theme.text.size.Gicantic};
    margin-top: 40px;
    margin-bottom: 40px;
`;

// const H2 = styled.h2`
//     color: ${(props) => props.theme.colors.black || "#222"};
//     font-size: ${(props) => props.theme.fontSizes.Gicantic || "1.8rem"};
//     text-align: ${(props) => props.align || "center"};
//     font-weight: ${(props) => props.weight || "bold"};
//     margin-top: 40px;
//     margin-bottom: 40px;
// `;

// const H3 = styled.h3`
//     color: ${(props) => props.theme.colors.black || "#222"};
//     font-size: ${(props) => props.theme.fontSizes.Gicantic || "1.8rem"};
//     text-align: ${(props) => props.align || "center"};
//     font-weight: ${(props) => props.weight || "bold"};
//     font-size: ${(props) => props.theme.fontSizes.medium || "1.8rem"};
//     margin-top: 40px;
//     margin-bottom: 40px;
//     font-weight: bold;
// `;

// const H4 = styled.h4`
//     color: ${(props) => props.theme.colors.black || "#222"};
//     font-size: ${(props) => props.theme.fontSizes.Gicantic || "1.8rem"};
//     text-align: ${(props) => props.align || "center"};
//     font-weight: ${(props) => props.weight || "bold"};
//     margin-top: 40px;
//     margin-bottom: 40px;
// `;
// const H5 = styled.h5`
//     color: ${(props) => props.theme.colors.black || "#222"};
//     font-size: ${(props) => props.theme.fontSizes.Gicantic || "1.8rem"};
//     text-align: ${(props) => props.align || "center"};
//     font-weight: ${(props) => props.weight || "bold"};
//     margin-top: 40px;
//     margin-bottom: 40px;
// `;

// const H6 = styled.h6`
//     color: ${(props) => props.theme.colors.black || "#222"};
//     font-size: ${(props) => props.theme.fontSizes.Gicantic || "1.8rem"};
//     text-align: ${(props) => props.align || "center"};
//     font-weight: ${(props) => props.weight || "bold"};
//     margin-top: 40px;
//     margin-bottom: 40px;
//     font-weight: bold;
// `;
// export const Heading = {
//     H1,
//     H2,
//     H3,
//     H4,
//     H5,
//     H6,
// };
