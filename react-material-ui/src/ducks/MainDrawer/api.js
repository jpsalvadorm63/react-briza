// import {
//   componentSignal,
//   normalizeDrawerContent,
//   selectDrawerOption
// } from "src/common/api"
// const drawerContent0 = {
//   heather: {},
//   footer: {},
//   options : [
//     {
//       label: 'System',
//       items : [
//         { label: 'CPU', icon: 'cpu', colors: 'Red', },
//         { label: 'Memory', icon: 'memory', colors: 'Green', },
//         { label: 'Storage', icon: 'storage', colors: 'Blue', },
//         { label: 'Network', icon:'network', colors: 'Black', },
//       ]
//     },
//   ]
// }
//
// const drawerContent1 = {
//   header : {
//     userInfo: {
//       name: 'J Salvador',
//       role: 'Developer',
//     }
//   },
//   footer: {},
//   options : [
//     {
//       label: 'CPU',
//       items : [
//         {label: 'Add CPU', icon: 'cpu', colors: 'Red',},
//         {label: 'Remove CPU', icon: 'remove', colors: 'Green',},
//         {label: 'Usage',icon: 'usage', colors: 'Blue',}
//       ]
//     },
//     {
//       label: 'Memory',
//       items : [
//         {label: 'Add Memory', icon: 'memory', colors: 'Blue',},
//         {label: 'Usage', icon: 'usage', colors: 'Green',}
//       ]
//     },
//     {
//       label: 'Storage',
//       items : [
//         {label: 'Add Storage', icon: 'storage', colors: 'Orange',},
//         {label: 'Usage', icon: 'usage', colors: 'Blue',},
//       ]
//     },
//     {
//       label: 'Network',
//       items : [
//         {label: 'Add Network', icon: 'network', colors: 'Green',},
//         {label: 'Usage', icon: 'networkUsage', colors: 'Red',},
//       ]
//     },
//   ]
// }
//
// const API = {}; //const _this = API
//
// API.fetchComponentSignal = componentSignal
//
// API.fetchDrawerContent = (mode) => {
//   if(mode === 'mode1')
//     return normalizeDrawerContent(drawerContent1)
//   else
//     return normalizeDrawerContent(drawerContent0)
// }
//
// API.fetchSelectDrawerOption = (drawerContent, id, parentId) => {
//   return selectDrawerOption(drawerContent, id, parentId)
// }
// export default API
