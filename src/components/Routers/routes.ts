import { IRouter } from 'components/Routers/types'
import Home from 'pages/Home'

export const routes: IRouter[] = [
  {
    path: '/',
    title: 'Главная',
    component: Home,
  },
]
