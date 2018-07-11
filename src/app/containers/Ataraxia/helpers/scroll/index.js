const getScrollColorHeaderBlack = () => {
  if (document.documentElement.scrollTop >= 300) {
    return true
  }
  else {
    return false
  }
}

const getScrollColorNetworksBlack = () => {
  if (document.documentElement.scrollTop >= 725) {
    return true
  } 
  else {
    return false
  }
}

export { getScrollColorHeaderBlack, getScrollColorNetworksBlack }