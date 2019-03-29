const utils = {}

const delayms = 4
const componentName = "_UTILS"
const version = 0.1

utils.componentInfo = {
  componentName,
  version:version,
  msg: [`Component ${componentName} - v${version}, is a living thing`],
  production:!(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'),
}

utils.logDev = (...args) => {
  if(!utils.componentInfo.production) {
    console.log(...args)
  }
}

utils.logProd = (...args) => {
  if(utils.componentInfo.production) {
    console.log(...args)
  }
}

utils.livingThing = (componentName, version) => {
  return `Component ${componentName} - v${version}, is a living thing`
}

utils.log = (...args) => { console.log(...args) }

export default utils
