import moment from "moment/moment";

const API = {}

const delayms = 4

API.fetchComponentSignal = (componentName, version, number) => {
  const msg = `${moment(new Date()).format('YYYY-MM-DD hh:mm')}: ${componentName}, v${version} - ${number}`
  const length = (msg.length < 44)?44:(msg.length+8)
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(msg + ' ' + '.'.repeat(length - msg.length))
    }, delayms)
  })
}

export default API
