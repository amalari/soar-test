export const setupMocking = async () => {
  const { worker } = await import('./worker')

  return worker.start()
}