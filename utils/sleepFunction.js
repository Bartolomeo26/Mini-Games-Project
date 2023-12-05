module.exports.sleepFunction = (time) =>
{
    return new Promise((resolve) => setTimeout(resolve, time));
}