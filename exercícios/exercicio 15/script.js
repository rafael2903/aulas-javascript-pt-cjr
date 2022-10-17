function getTimeObject(timeString) {
    const timeArray = timeString.split(':')
    const [hours, minutes, seconds] = timeArray

    return {
        hours: Number(hours),
        minutes: Number(minutes),
        seconds: Number(seconds)
    }
}

console.log(getTimeObject("01:21:53"))