module.exports.isTrue = (a, b) =>
{
    if (a === b)
        return 'TRUE'
    else return 'FALSE'

}
module.exports.lowerHigher = (a, b) =>
{
    const difference = Math.abs(a - b);
    if (difference <= 1 && b > a)
        return 'HIGHER(CLOSE)'
    else if (difference <= 1 && b < a)
        return 'LOWER(CLOSE)'
    else if (b > a)
        return 'HIGHER'
    else if (b < a) return 'LOWER'
    else return 'PERFECT'
}