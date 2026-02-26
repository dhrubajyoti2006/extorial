import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { MainLayout } from "../../layouts/main";
import HomePage from "../../pages/home";
import AdminOverview from "../../pages/admin/overview";
import LearnerDashboard from "../../pages/learner/dashboard";
import KnowledgeCatalog from "../../pages/learner/catalog";
import MyCertificates from "../../pages/learner/certificates";
import CourseOverview from "../../pages/learner/course-overview";
import LearningPlayer from "../../pages/learner/player";
import MasteryInterface from "../../pages/learner/mastery";
import CourseCompletion from "../../pages/learner/completion";
import LoginPage from "../../pages/auth/login";

export function Router() {
  return useRoutes([
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      element: (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ),
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "admin",
          children: [{ path: "overview", element: <AdminOverview /> }],
        },
        {
          path: "learner",
          children: [
            { path: "dashboard", element: <LearnerDashboard /> },
            { path: "catalog", element: <KnowledgeCatalog /> },
            { path: "certificates", element: <MyCertificates /> },
            { path: "course/:id", element: <CourseOverview /> },
            { path: "player/:id", element: <LearningPlayer /> },
            { path: "mastery/:id", element: <MasteryInterface /> },
            { path: "completion/:id", element: <CourseCompletion /> },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);
}
