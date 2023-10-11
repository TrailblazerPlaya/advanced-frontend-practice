import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFound } from "pages/NotFound";
import { type RouteProps } from "react-router-dom";
export enum AppRouter {
    MAIN = "main",
    ABOUT = "about",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: "/",
    [AppRouter.ABOUT]: "/about",
    [AppRouter.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {
        path: RoutePath[AppRouter.MAIN],
        element: <MainPage />,
    },
    [AppRouter.ABOUT]: {
        path: RoutePath[AppRouter.ABOUT],
        element: <AboutPage />,
    },
    [AppRouter.NOT_FOUND]: {
        path: RoutePath[AppRouter.NOT_FOUND],
        element: <NotFound />,
    },
};
