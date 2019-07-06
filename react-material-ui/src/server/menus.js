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
            {label: 'Add CPU', icon: 'cpu', colors: 'Red',},
            {label: 'Remove CPU', icon: 'remove', colors: 'Green',},
            {label: 'Usage',icon: 'usage', colors: 'Blue',}
          ]
        },
        {
          label: 'Memory',
          items : [
            {label: 'Add Memory', icon: 'memory', colors: 'Blue',},
            {label: 'Usage', icon: 'usage', colors: 'Green',}
          ]
        },
        {
          label: 'Storage',
          items : [
            {label: 'Add Storage', icon: 'storage', colors: 'Orange',},
            {label: 'Usage', icon: 'usage', colors: 'Blue',},
          ]
        },
        {
          label: 'Network',
          items : [
            {label: 'Add Network', icon: 'network', colors: 'Green',},
            {label: 'Usage', icon: 'networkUsage', colors: 'Red',},
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
            {label: 'Add Memory', icon: 'memory', colors: 'Blue',},
            {label: 'Usage', icon: 'usage', colors: 'Green',}
          ]
        },
        {
          label: 'Storage',
          items : [
            {label: 'Add Storage', icon: 'storage', colors: 'Orange',},
            {label: 'Usage', icon: 'usage', colors: 'Blue',},
          ]
        },
        {
          label: 'Network',
          items : [
            {label: 'Add Network', icon: 'network', colors: 'Green',},
            {label: 'Usage', icon: 'networkUsage', colors: 'Red',},
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
            { label: 'CPU', icon: 'cpu', colors: 'Red', },
            { label: 'Memory', icon: 'memory', colors: 'Green', },
            { label: 'Storage', icon: 'storage', colors: 'Blue', },
            { label: 'Network', icon:'network', colors: 'Black', },
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
