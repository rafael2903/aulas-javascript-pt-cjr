function getTimeString(seconds) {
    const hours = Math.trunc(seconds / 3600)
    const minutes = Math.trunc((seconds % 3600) / 60)
    seconds = seconds - hours * 3600 - minutes * 60

    const formattedHours = String(hours).padStart(2, '0')
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}

console.log(getTimeString(4913))
