import { ThemeProvider } from "styled-components";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./theme/global.js";
import FontStyle from "./base/fonts/fonts.js";
import StoreProduct from "./pages/storeProduct.js";
import StoreCart from "./pages/storeCart.js";
import { theme } from "./theme/theme.js";
import Route from "./routing/Route.js";

export function Hello() {
    return <div>hello</div>;
}

function App() {
    return (
        // <Router>
        <ThemeProvider theme={theme}>
            <FontStyle />
            <GlobalStyles />

            {/* <Switch> */}
            <Route path="/">
                <StoreProduct></StoreProduct>
            </Route>
            <Route path="/cart">
                <StoreCart></StoreCart>
            </Route>
            {/* </Switch> */}
        </ThemeProvider>
        // </Router>
    );
}

export default App;
