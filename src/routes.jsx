import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { ProjectsPage } from "./pages/projects/ProyectsPage";

const routes = [
    { path: '/*', element: <DashboardPage/>},
    { path: '/projects', element: <ProjectsPage/> }
]

export default routes;