function getRange([start, stop]) {
    start = parseInt(start, 16);
    stop = parseInt(stop, 16);
    const codepoints = [];
    for (start; start <= stop; start++) {
        codepoints.push(start.toString(16).padStart(4, '0').toUpperCase())
    }
    return codepoints;
}

function getScriptRanges(ranges) {
    const codepoints = [];
    ranges.forEach(range => {
        if (typeof range === 'string') {
        codepoints.push(range);
        } else {
            codepoints.push(...getRange(range))
        }
    })
    return codepoints;
}

module.exports = { getRange, getScriptRanges }