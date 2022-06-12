export default (symbolsNum, str) => {
  if(str.length <= symbolsNum) return str
  return str.slice(0, symbolsNum).trim() + '...'
}
