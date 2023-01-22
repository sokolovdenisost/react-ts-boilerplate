import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { AppState } from 'store/index'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
