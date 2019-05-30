
export default function soonPromise(ms = 10000) {
  let resolve = null
  const promise = new Promise((innerResolve, reject) => {
    const timeoutID = setTimeout(() => {
      reject('rejected soonPromise')
      console.log('rejected')
    }, ms)
    resolve = (arg) => {
      innerResolve(arg)
      clearTimeout(timeoutID)
      console.log('resolve')
    }
  })
  return { promise, resolve }
}
