

const cardsAnalyzer = (arr) => {
  let next
  let prev

  arr.map((el, i) => {
    if(!prev && el.image && arr[i + 1] && arr[i + 1].image) {
      prev = 'две крупные'
      return prev
    } else if (!el.image && arr[i + 1] && !arr[i + 1].image && prev !== 'две карточки') {
      prev = 'две мелкие карточки'
      return prev
    } else if (el.image && arr[i + 1] && arr[i + 1].image && prev === 'две карточки') {
      prev = 'карточка дивайдером'
      return prev
    }
  })

}
