import cookies from 'browser-cookies'

const getCookiesAlertAccepted = () => {
  const cookiesUUID = cookies.get('_uuid')

  if (!cookiesUUID) {
    let allCookies = cookies.all()
    
    for (let cookieName in allCookies) {
      if (allCookies.hasOwnProperty(cookieName)) {
        cookies.erase(cookieName)
      }
    }
    
    return 0
  } else if (cookiesUUID === 'canceled') {
    let allCookies = cookies.all()
    
    for (let cookieName in allCookies) {
      if (cookieName !== '_uuid') {
        if (allCookies.hasOwnProperty(cookieName)) {
          cookies.erase(cookieName)
        }
      }
    }

    return -1
  } else {
    return 1
  }
}

export default getCookiesAlertAccepted