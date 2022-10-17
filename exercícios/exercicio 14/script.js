function getTimeObject(timeString) {
    const timeArray = timeString.split(':')

    const hours = Number(timeArray[0])
    const minutes = Number(timeArray[1])
    const seconds = Number(timeArray[2])

    return {
        hours,
        minutes,
        seconds,
    }
}

console.log(getTimeObject('01:21:53'))
