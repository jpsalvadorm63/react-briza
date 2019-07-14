export const API = {} //; const _this = API

const menusTable = [
  {
    role: '501',
    menu: {
      header : { userInfo: {name: '', role: '', photo: '', }},
      footer: {},
      options : [
        {
          label: 'CPU',
          items : [
            {label: 'Add CPU', icon: 'cpu', color: 'red',},
            {label: 'Remove CPU', icon: 'remove', color: 'green',},
            {label: 'Usage',icon: 'usage', color: 'blue',}
          ]
        },
        {
          label: 'Memory',
          items : [
            {label: 'Add Memory', icon: 'memory', color: 'blue',},
            {label: 'Usage', icon: 'usage', color: 'green',}
          ]
        },
        {
          label: 'Storage',
          items : [
            {label: 'Add Storage', icon: 'storage', color: 'orange',},
            {label: 'Usage', icon: 'usage', color: 'blue',},
          ]
        },
        {
          label: 'Network',
          items : [
            {label: 'Add Network', icon: 'network', color: 'green',},
            {label: 'Usage', icon: 'networkUsage', color: 'red',},
          ]
        },
      ]
    }
  },
  {
    role: '502',
    menu: {
      header : { userInfo: {name: '', role: '', photo: '', }},
      footer: {},
      options : [
        {
          label: 'Memory',
          items : [
            {label: 'Add Memory', icon: 'memory', color: 'blue',},
            {label: 'Usage', icon: 'usage', color: 'green',}
          ]
        },
        {
          label: 'Storage',
          items : [
            {label: 'Add Storage', icon: 'storage', color: 'orange',},
            {label: 'Usage', icon: 'usage', color: 'blue',},
          ]
        },
        {
          label: 'Network',
          items : [
            {label: 'Add Network', icon: 'network', color: 'green',},
            {label: 'Usage', icon: 'networkUsage', color: 'red',},
          ]
        },
      ]
    }
  },
  {
    role: '505',
    menu: {
      header : { userInfo: {name: '', role: '', photo: '', }},
      footer: {},
      options : [
        {
          label: 'System',
          items : [
            { label: 'CPU', icon: 'cpu', color: 'red', },
            { label: 'Memory', icon: 'memory', color: 'green', },
            { label: 'Storage', icon: 'storage', color: 'blue', },
            { label: 'Network', icon:'network', color: 'black', },
          ]
        },
      ]
    }
  },
]

API.getMenuByRoleId = (roleId) => {
  const menus = menusTable.filter((item) => item.role === roleId)
  return menus.length === 1 ?
    {roleMenu: {...menus[0].menu}} :
    {roleMenu: null}
}
