import { Route, Routes } from 'react-router-dom'
import { routes } from 'components/Routers/routes'
import { IRouter } from 'components/Routers/types'

const Routers = () => {
  const mapRoutes = routes.map(({ path, component: Component }: IRouter) => (
    <Route key={path} path={path} element={<Component />} />
  ))

  return <Routes>{mapRoutes}</Routes>
}

export default Routers
