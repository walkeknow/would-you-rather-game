export const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('Current Action', action)
  const result = next(action)
  console.log('Current State', store.getState())
  console.groupEnd()
  return result
}
