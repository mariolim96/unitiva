import React from "react";
import { A } from "./Link.styled";
const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, "", href);

        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    };

    return (
        <A onClick={onClick} className={className} href={href}>
            {children}
        </A>
    );
};

export default Link;
