import { useRoutes, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout'; // Adjust path as needed
import Chat from './pages/Chat'; // Adjust path as needed
import Protocol from './pages/Protocol'; // Adjust path as needed

export default function AppRouter() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Chat />,
        },
        {
          path: 'chat',
          element: <Chat />, // Added to match Sidebar's isChatPage check
        },
        {
          path: 'protocol',
          element: <Protocol />,
        },
        {
          path: '*',
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);

  return routes;
}