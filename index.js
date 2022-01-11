function romanToInt(s) {
  const map = new Map()
  map.set('I', 1)
  map.set('V', 5)
  map.set('X', 10)
  map.set('L', 50)
  map.set('C', 100)
  map.set('D', 500)
  map.set('M', 1000)

  if (s.length < 1) return 0
  let sum = map.get(s[s.length - 1])
  for (let index = s.length - 2; index >= 0; index--) {
    const t1 = map.get(s[index])
    const t0 = map.get(s[index + 1])
    sum = t1 < t0 ? sum - t1 : sum + t1
  }
  return sum
}

export default romanToInt
