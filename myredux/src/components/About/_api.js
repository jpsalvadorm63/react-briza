const API = {}

const delayms = 4
const ComponentName = "Widget"
const version = 0.1

API.componentInfo = {
  name: ComponentName,
  version:version,
  msg: [`Component ${ComponentName} - v${version}, Is a living Thing`]
};

API.fetchComponentSignal = () => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(API.componentInfo.msg[0])
    }, delayms)
  })
}

export default API
