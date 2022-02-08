import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./global.js";
import StoreProduct from "./pages/storeProduct.js";
import FontStyle from "./assets/fonts/fonts.js";

const theme = {
    color: {
        body: "#F1F1F1",
        text: "#313131",
        text1: "#555555",
        text2: "#C16565",
        text3: "#6E6E6E",
        button: "#5F729D",
        buttonB: "#999999",
        buttonDisabled: "#999999",
        circle: "#B95151",
        border: "#C2C2C2",
        borderF: "#9B9B9B",
        card: "#FFFFFF",
    },
    text: {
        size: {
            tiny: "0.6rem",
            small: "0.7rem",
            medium: "1rem",
            large: "1.2rem",
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

            <StoreProduct></StoreProduct>
            {/* <Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/pricing" exact component={Pricing} />
			</Switch> */}
        </ThemeProvider>
    );
}

export default App;
