const getScrollColorHeaderBlack = () => {
  if (document.documentElement.scrollTop >= 300) {
    return true
  }
  else {
    return false
  }
}

export { getScrollColorHeaderBlack }