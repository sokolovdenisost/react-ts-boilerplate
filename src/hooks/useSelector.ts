import { AppState } from 'store/index'

import { useAppSelector } from 'hooks/useAppSelector'

type FuncType<T> = (state: AppState) => T

export default <T>(func: FuncType<T>) =>
  useAppSelector((state: AppState) => func(state))
