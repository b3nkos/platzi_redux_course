const timerFormatter = seconds => {
  let minutesParse = parseInt(seconds/60, 10)
  let secondsParse = parseInt(seconds % 60, 10)

  const leftPad = number => {
    const pad = '00'
    return pad.substring(0, pad.length - number.length) + number
  }

  return `${leftPad(minutesParse.toString())} : ${leftPad(secondsParse.toString())}`
}

export default timerFormatter
