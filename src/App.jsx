import { useRoutes } from 'react-router-dom';
import routes from './routes.jsx';

export const App = () => {
  const element = useRoutes(routes)

  return (
    <>
       { element }
    </>
  )
}