import React from "react";

interface LinkProps {
    to: string
    children: JSX.Element | string
}

const Link = ({ to, children }: LinkProps) => {
    const onClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        // stop from reloading
        event.preventDefault();
        window.history.pushState({}, "", to);

        // trigger a navigation event
        const navigationEvent = new PopStateEvent("navigate");
        window.dispatchEvent(navigationEvent);
    };
    return (
        <a href={to} onClick={onClickHandler}>
            {children}
        </a>
    );
};

export default Link;