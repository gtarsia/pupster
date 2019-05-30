import soonPromise from './soon-promise'

export default function waitForLog(recorder, arg) {
  return recorder.until((log) => {
    return log.text() === arg
  })
}
