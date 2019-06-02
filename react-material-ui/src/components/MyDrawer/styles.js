const oldBlack = "#444444"
const oldBlue = "#0000df"
const oldGreen = "#00AF00"
const oldRed = "#ff0000"
const oldOrange = "#FF8C00"
const oldGray = "#949494"

const mainOptionBase = {
  margin: '0',
  padding: '8px 0 0 0',
  fontSize: '0.8rem',
  textTransform: 'none',
  borderRadius: '0',
}

const subOptionBase = {
  margin: '0',
  padding: '0',
  fontSize: '0.8rem',
  textTransform: 'none',
  borderRadius: '0',
}

const mainOptionLabelBase = {
  display: 'block',
  textAlign: 'left',
  marginLeft: '24px',
}

const subOptionLabelBase = {
  display: 'block',
  textAlign: 'left',
  marginLeft: '48px',
}

const iconStyleBase = {
  marginLeft: '-16px',
  fontSize: '0.6rem',
  fontWeight: '300',
  display:'inline-block',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-25%)',
}

const iconStyleBase2 = {
  marginLeft: '-24px',
  fontSize: '0.7rem',
  fontWeight: '300',
  display:'inline-block',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
}

const iconStyleBase3 = {
  position: 'absolute',
  marginLeft: '8px',
  fontSize: '1rem',
  fontWeight: '600',
  display:'inline-block',
  top: '50%',
  transform: 'translateY(-45%)',
}

export const styles = theme => (
  {
    // Drawer background
    paper: {
      backgroundImage: 'url("background.svg")',
      backgroundPosition: 'background',
      backgroundRepeat: 'no-repeat',
      minWidth: '160px',
      "@media (min-width: 300px)": {
        width:'40%',
      },
      "@media (min-width: 576px)": {
        width:'36%',
      },
      "@media (min-width: 768px)": {
        width:'26%',
      },
      "@media (min-width: 992px)": {
        width:'20%',
      },
      "@media (min-width: 1200px)": {
        width:'18%',
      },
      maxWidth: '216px',
      borderRadius: '4px 4px 0 0 ',
      margin: '4px 0 0 4px',
    },

    // Main options style
    mainOption: {
      ...mainOptionBase,
      fontWeight: '400',
    },
    sltdMainOption: {
      ...mainOptionBase,
      fontWeight: '500',
    },
    mainOptionLabel: {
      ...mainOptionLabelBase,
      borderBottom: '1px solid transparent',
    },
    sltdMainOptionLabel: {
      ...mainOptionLabelBase,
      borderBottom: '1px solid silver',
    },

    // Sub-options styles
    subOption: {
      ...subOptionBase,
      fontWeight: '300',
    },
    sltdSubOption: {
      ...subOptionBase,
      fontWeight: '400',
    },
    subOptionlabel: {
      ...subOptionLabelBase
    },

    // Icon styles
    iconStyleBlack: {...iconStyleBase,color: `${oldBlack}`,},
    iconStyleGreen: {...iconStyleBase,color: `${oldGreen}`,},
    iconStyleBlue: {...iconStyleBase, color: `${oldBlue}`,},
    iconStyleRed: {...iconStyleBase, color: `${oldRed}`,},
    iconStyleOrange: {...iconStyleBase, color: `${oldOrange}`,},
    iconStyleGray: {...iconStyleBase, color: `${oldGray}`,},
    sltdIconStyle: {...iconStyleBase, color: 'black',},

    iconStyle2Black: {...iconStyleBase2,color: `${oldBlack}`,},
    iconStyle2Green: {...iconStyleBase2,color: `${oldGreen}`,},
    iconStyle2Blue: {...iconStyleBase2, color: `${oldBlue}`,},
    iconStyle2Red: {...iconStyleBase2, color: `${oldRed}`,},
    iconStyle2Orange: {...iconStyleBase2, color: `${oldOrange}`,},
    iconStyle2Gray: {...iconStyleBase2, color: `${oldGray}`,},
    sltdIconStyle2: {...iconStyleBase2, color: 'black',},

    iconStyle3Black: {...iconStyleBase3,color: `${oldBlack}`,},
    iconStyle3Green: {...iconStyleBase3,color: `${oldGreen}`,},
    iconStyle3Blue: {...iconStyleBase3, color: `${oldBlue}`,},
    iconStyle3Red: {...iconStyleBase3, color: `${oldRed}`,},
    iconStyle3Orange: {...iconStyleBase3, color: `${oldOrange}`,},
    iconStyle3Gray: {...iconStyleBase3, color: `${oldGray}`,},
    sltdIconStyle3: {...iconStyleBase3, color: 'black',},

    //userInfo styles
    userInfoGrid0: {
      margin: '24px 0 0 0',
      width: '100%',
      justify: 'flex-start',
      alignItems: 'flex-start'
    },
    userInfoAvatar: {
      boxShadow: '2px 2px 8px rgba(0,0,0,0.4)',
    },
    userInfoName: {
      fontSize: '1rem',
    },
    userInfoRole: {
      fontSize: '0.7rem',
      fontWeight: '100',
    },
  }
)

// const oldDrawer = 'rgb(40,40, 40)'
// const webkitDrawer = '-webkit-linear-gradient(45deg, rgba(40,40,40,1) 0%,rgba(14,14,14,1) 100%)'
// const linearDrawer = 'linear-gradient(45deg, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%)'
// const filterDrawer = 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=0 )'
// background: `${linearDrawer}, ${webkitDrawer}, ${oldDrawer}`,
