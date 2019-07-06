import beer  from 'src/components/graphics/graphicFiles/beer01.svg'
import betty from 'src/components/graphics/graphicFiles/betty.svg'
import negrita from 'src/components/graphics/graphicFiles/negrita.svg'
import peliroja from 'src/components/graphics/graphicFiles/peliroja.svg'
import planta from 'src/components/graphics/graphicFiles/planta.svg'
import otway from 'src/components/graphics/graphicFiles/otway.svg'


const graphicList = [
  { name:'beer',     graphic: beer},
  { name:'betty',    graphic: betty},
  { name:'negrita',  graphic: negrita},
  { name:'peliroja', graphic: peliroja },
  { name:'planta',   graphic: planta },
  { name:'otway',    graphic: otway },
]

export const graphicByName = (graphicName) => {
  const res = graphicList.filter((item) => item.name === graphicName)
  if(res.length > 0)
    return res[0].graphic
  else
    return graphicList[graphicList.length - 1].graphic
}
