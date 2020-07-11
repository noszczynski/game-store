const objectToArray = (obj) => {
  const arr = []
  Object.keys(obj).map(
    key => arr.push(obj[key])
  )
  return arr
}

export {objectToArray}
