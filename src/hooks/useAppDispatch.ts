import { useDispatch } from 'react-redux'

import { AppDispatch } from 'store/index'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
