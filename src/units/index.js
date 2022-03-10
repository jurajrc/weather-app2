
// format time hh:mm AM/PM
export const sunn = (sec) => {
    const date = new Date(sec * 1000)
    const timestr = date.toLocaleTimeString(['en-US'], { hour: '2-digit', minute: '2-digit' })
    return timestr
}

/**
 * formating date day "Mon, 05"
 * @param {number} sec 
 * @returns string 
 */
export const dateDay = (sec) => {
  const date = new Date(sec * 1000)
    const timestr = date.toLocaleDateString(['en-US'], {  weekday: 'short', day: '2-digit' })
    const array = timestr.split(" ").reverse()
    const newString = `${array[0]}, ${array[1]}`
    return newString
}

// zmena čisla na string a nahradiť . za ,
export const replaceComma = (number, before, after) => number.toString().replace(before, after)

// prepočet m/s na km/h + zaokruhlenie
export const msTokmh = ms => Math.round((ms / 1000) * 3600)

// calculate dayTime  
export const dayTime = (sunset, sunrise) => {
  const hour = Math.floor((sunset - sunrise) / 60 / 60)
  const minute = Math.ceil(((sunset - sunrise) / 60) % 60)
  return `${hour}h ${minute}m`
}