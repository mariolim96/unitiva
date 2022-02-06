import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./components/styles/global.js";
import StoreProduct from "./pages/storeProduct.js";

const theme = {
    color: {
        body: "#F1F1F1",
        text: "#313131",
        text1: "#555555",
        text2: "#C16565",
        text3: "#565656",
        button: "#5F729D",
        buttodDisabled: "#999999",
        last: "#B95151",
    },
    text: {
        size: {
            tiny: "0.6rem",
            small: "0.8rem",
            medium: "1rem",
            large: "1.2rem",
            huge: "1.5rem",
            gigantic: "2,5rem",
        },
        font: {
            family: "helvetica neue",
        },
    },
};

function App() {
    // const { H1, H2, H6 } = Heading;
    return (
        <ThemeProvider theme={theme}>
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
