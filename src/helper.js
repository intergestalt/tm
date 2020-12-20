
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
}