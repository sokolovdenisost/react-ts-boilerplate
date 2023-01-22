import { useCallback } from 'react'

import { useAppDispatch } from 'hooks/useAppDispatch'

export default (type: string) => {
  const dispatch = useAppDispatch()

  return useCallback(
    (payload = {}) => dispatch({ type, payload }),
    [dispatch, type]
  )
}
