export default (obj) => Object.keys(obj).reduce((acc, key) => {
  if(Boolean(obj[key])) {
    acc[key] = obj[key]
  }
  return acc
}, {})
