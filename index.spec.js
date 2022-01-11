import romanToInt from './index.js'

describe('tests', () => {
  it('III is equals to 3', () => {
    const result = romanToInt('III')
    expect(result).toEqual(3)
  })

  it('LVIII is equals to 3', () => {
    const result = romanToInt('LVIII')
    expect(result).toEqual(58)
  })

  it('LVIII is equals to 3', () => {
    const result = romanToInt('MCMXCIV')
    expect(result).toEqual(1994)
  })
})
