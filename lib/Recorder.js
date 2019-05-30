import EventEmitter from 'events'
import soonPromise from './soon-promise'

export default class Recorder extends EventEmitter {
  constructor() {
    super()
    this.recordings = []
  }

  record(...args) {
    this.recordings.push(args)
    this.emit('record')
  }

  popUntil(condition) {
    while (this.recordings.length > 0) {
      const recording = this.recordings.shift()
      if (condition(...recording)) {
        return recording
      }
    }
    return null
  }

  until(condition) {
    const { promise, resolve } = soonPromise()
    const fn = () => {
      const recording = this.popUntil(condition)
      if (recording) {
        resolve(...recording)
      }
    }
    fn()
    this.on('record', fn)
    return promise
  }
}
