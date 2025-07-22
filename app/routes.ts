import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('rapport-lancement', 'routes/FirstReport.tsx'),
    route('rapport-final', 'routes/FinalReport.tsx'),
] satisfies RouteConfig;

