import React, { useEffect as useLayoutEffect, useState } from "react";

interface RouteProps {
    path: string
    Component: React.FC
}

const Route = ({ path, Component }: RouteProps) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useLayoutEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("navigate", onLocationChange);
        window.addEventListener("popstate", onLocationChange);

        return () => {
            window.removeEventListener("navigate", onLocationChange)
            window.removeEventListener("popstate", onLocationChange)
        }
    }, []);
    return currentPath === path ? <Component /> : null;
};

export default Route;