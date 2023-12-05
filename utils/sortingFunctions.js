module.exports.sortDesc = (a, b) =>
{
    if (a.score < b.score)
    {
        return 1;
    }
    if (a.score > b.score)
    {
        return -1;
    }

    // names must be equal
    return 0;
}
module.exports.sortAsc = (a, b) =>
{
    if (a.score < b.score)
    {
        return -1;
    }
    if (a.score > b.score)
    {
        return 1;
    }

    // names must be equal
    return 0;
}