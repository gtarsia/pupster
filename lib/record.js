import Recorder from './Recorder'

export default function record(page, event) {
  const recorder = new Recorder()
  function handler(...args) {
    recorder.record(...args)
  }
  page.on(event, handler)
  return recorder
}
