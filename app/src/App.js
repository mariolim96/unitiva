import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./global.js";
import FontStyle from "./assets/fonts/fonts.js";
import StoreProduct from "./pages/storeProduct.js";
import StoreCart from "./pages/storeCart.js";
const theme = {
    color: {
        body: "#F1F1F1",
        text: "#313131",
        text1: "#555555",
        text2: "#C16565",
        text3: "#6E6E6E",
        text4: "#595959",
        button: "#5F729D",
        buttonB: "#999999",
        buttonDisabled: "#999999",
        circle: "#B95151",
        border: "#C2C2C2",
        borderF: "#9B9B9B",
        card: "#FFFFFF",
        righth: "#848484",
    },
    text: {
        size: {
            tiny: "0.6rem",
            small: "0.7rem",
            hmedium: "0.8rem",
            medium: "1rem",
            large: "1.1rem",
            xlarge: "1.4rem",
            huge: "1.5rem",
            gigantic: "5,5rem",
        },
        font: {
            corporate: "corporate",
            corporateB: "corporateB",
        },
    },
};

function App() {
    // const { H1, H2, H6 } = Heading;
    return (
        <ThemeProvider theme={theme}>
            <FontStyle />
            <GlobalStyles />

            <Routes>
                <Route path="/signup" element={<StoreCart />}></Route>
                <Route path="/" element={<StoreProduct />} />
                {/* <Route path="/pricing" exact component={Pricing} /> */}
            </Routes>
        </ThemeProvider>
    );
}

export default App;
