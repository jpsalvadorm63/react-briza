const oldBlack = "#444444"
const oldBlue = "#0000df"
const oldGreen = "#00AF00"
const oldRed = "#ff0000"
const oldOrange = "#FF8C00"
const oldGray = "#949494"

const paper = {
  backgroundImage: 'url("background.svg")',
    backgroundPosition: 'background',
    backgroundRepeat: 'no-repeat',
    minWidth: '160px',
    "@media (min-width: 300px)": { width:'40%', },
  "@media (min-width: 576px)": { width:'36%', },
  "@media (min-width: 768px)": { width:'26%', },
  "@media (min-width: 992px)": { width:'20%', },
  "@media (min-width: 1200px)": { width:'18%', },
  maxWidth: '216px',
    borderRadius: '4px 4px 0 0 ',
    margin: '4px 0 0 4px',
}

const optionBase = {
  margin: '0',
  padding: '0',
  height: '1.8rem !important',
  display: 'block',
  borderRadius: '0 !important',
}

const mainOption = {...optionBase,}

const mainOptionIconStyleBase = {
  marginLeft: '-8%',
  fontSize: '0.8rem',
  fontWeight: '300',
  display: 'block',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
}

const mainOptionLabelBase = {
  display: 'block',
  textAlign: 'left',
  fontSize: '0.8rem',
  textTransform: 'none',
  marginLeft: '10% !important',
  width: '90% !important',
}

const mainOptionLabel = {
  ...mainOptionLabelBase,
  fontWeight: '400',
  borderBottom: '1px solid transparent',
}

const sltdMainOptionLabel = {
  ...mainOptionLabelBase,
  fontWeight: '500',
  borderBottom: '1px solid silver',
}

const subOptionBase = {...optionBase,}

const subOption = {...subOptionBase,}

const iconStyleBase2 = {
  marginLeft: '-8%',
  fontSize: '0.8rem',
  fontWeight: '300',
  display:'block',
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
  transform: 'translateY(-50%)',
}

const subOptionLabelBase = {
  display: 'block',
  textAlign: 'left',
  marginLeft: '20%',
  fontSize: '0.7rem',
  width: '80% !important',
}

const userInfoGrid0 = {
  margin: '24px 0 0 0',
  width: '100%',
  justify: 'flex-start',
  alignItems: 'flex-start'
}

const userInfoAvatar = {
  boxShadow: '2px 2px 8px rgba(0,0,0,0.4)',
}

const userInfoName = { fontSize: '1rem',}

const userInfoRole = {
  fontSize: '0.7rem',
  fontWeight: '100',
}

const subOptionLabel = { ...subOptionLabelBase, fontWeight: '300', }

const sltdSubOptionLabel = { ...subOptionLabelBase, fontWeight: '500', }

export const styles = theme => (
  {
    // Drawer background
    paper,

    // Main options style
    mainOption,
    mainOptionLabel,
    sltdMainOptionLabel,

    // Sub-options styles
    subOption,
    subOptionLabel,
    sltdSubOptionLabel,

    // Icon styles
    iconStyleBlack: {...mainOptionIconStyleBase,color: `${oldBlack}`,},
    iconStyleGreen: {...mainOptionIconStyleBase,color: `${oldGreen}`,},
    iconStyleBlue: {...mainOptionIconStyleBase, color: `${oldBlue}`,},
    iconStyleRed: {...mainOptionIconStyleBase, color: `${oldRed}`,},
    iconStyleOrange: {...mainOptionIconStyleBase, color: `${oldOrange}`,},
    iconStyleGray: {...mainOptionIconStyleBase, color: `${oldGray}`,},
    sltdIconStyle: {...mainOptionIconStyleBase, color: 'black',},

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
    userInfoGrid0,
    userInfoAvatar,
    userInfoName,
    userInfoRole,
  }
)
