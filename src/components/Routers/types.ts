export interface IRouter {
  path: string
  title: string
  component: () => JSX.Element
}
