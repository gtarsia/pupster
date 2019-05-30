
export default function launch(p, args) {
  return p.launch({
    headless: false,
    ...args,
  })
}
