function getTimeString(seconds) {
    const hours = Math.trunc(seconds / 3600)
    const minutes = Math.trunc((seconds % 3600) / 60)
    seconds = seconds - hours * 3600 - minutes * 60

    const formattedHours = String(hours).padStart(2, '0')
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}

function convertToTimeString(timeObject) {
    // equivalente a:
    // const hours = timeObject.hours
    // const minutes = timeObject.minutes
    // const seconds = timeObject.seconds
    const { hours, minutes, seconds } = timeObject

    const totalSeconds = hours * 3600 + minutes * 60 + seconds

    return getTimeString(totalSeconds)
}

console.log(
    convertToTimeString({
        hours: 1,
        minutes: 21,
        seconds: 53,
    })
)
