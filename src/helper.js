
/* USAGE: 
 *
 * <script>
 *   const var1 = "red"
 *   const var2 = "blue"
 * </script>
 * 
 * <div style={styleVars({var1, var2})}></div>
 * 
 * <style>
 *  div {
 *    color: var(--var1);
 *    background-color: var(--var2)
 * }
 * </style>
 */

export function styleVars(vars) {
  return Object.entries(vars)
    .map(([key, value]) => "--" + key + ": " + value)
    .join("; ")
}

// generate a string for "border-radius".
// there are rules how these whould be distributed among neighbouring items
//
// group: a string to indicate a group the item belongs to, for the distribution algorithm
// preset: override a the values, will return same values as string
const borderRadiusStore = {} // store the last values
export function generateBorderRadiusString(group = "default", preset = {large: undefined, small: undefined}) {

  const deltaMinLarge = 20 // minimun difference
  const valuesLarge = [
    [20, 40, 20, 40],
    [20, 50, 20, 50],
    [20, 60, 20, 60],
    [20, 70, 20, 70],
    [30, 50, 30, 50],
    [30, 60, 30, 60],
    [30, 70, 30, 70],
    [40, 20, 40, 20],
    [40, 60, 40, 60],
    [40, 70, 40, 70],
    [50, 20, 50, 20],
    [50, 30, 50, 30],
    [60, 20, 60, 20],
    [60, 30, 60, 30],
    [60, 40, 60, 40],
    [70, 20, 70, 20],
    [70, 30, 70, 30],
    [70, 40, 70, 40]
  ]

  const deltaMinSmall = 10 // minimun difference
  const valuesSmall = [
    [15, 30, 15, 30],
    [15, 35, 15, 35],
    [15, 40, 15, 40],
    [20, 35, 20, 35],
    [20, 40, 20, 40],
    [25, 40, 25, 40],
    [30, 15, 15, 30],
    [35, 15, 25, 15],
    [35, 20, 25, 20],
    [40, 15, 40, 15],
    [40, 20, 40, 20],
    [40, 25, 40, 25],
  ]

  function generateString(values, deltaMin, group, preset) {
    let result = preset
    if (!result) {
      let candidates = values
      if (borderRadiusStore[group]) { // previous value exists
        candidates = values.filter( v => Math.abs(borderRadiusStore[group][0] - v[0]) >= deltaMin )
      }
      result = pickRandom(candidates)
    }
    borderRadiusStore[group] = result
    return result.map(v => v + "px").join(" ")
  }

  return {
    largeString: generateString(valuesLarge, deltaMinLarge, group, preset.large),
    smallString: generateString(valuesSmall, deltaMinSmall, group, preset.small),
  }
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}