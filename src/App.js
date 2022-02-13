import { ThemeProvider } from "styled-components";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./theme/global.js";
import FontStyle from "./base/fonts/fonts.js";
import StoreProduct from "./pages/storeProduct.js";
import StoreCart from "./pages/storeCart.js";
import Greetings from "./pages/storeGreetings.js";
import { theme } from "./theme/theme.js";
import Route from "./routing/Route.js";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <FontStyle />
            <GlobalStyles />

            <Route path="/">
                <StoreProduct></StoreProduct>
            </Route>
            <Route path="/cart">
                <StoreCart></StoreCart>
            </Route>
            <Route path="/greetings">
                <Greetings></Greetings>
            </Route>
        </ThemeProvider>
    );
}

export default App;
