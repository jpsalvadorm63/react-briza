import {componentSignal} from "src/common/api"

const API = {}

API.fetchComponentSignal = componentSignal

API.fetchBasicRoutes = () => ([
  {exact:true, path:'/'},
  {exact:false, path:'/home'},
  {exact:false, path:'/login'},
])

export default API
