function directionCalculation(endpoint, startpoint)
{

    let x1 = endpoint.lat;
    let y1 = endpoint.lng;
    let x2 = startpoint.lat;
    let y2 = startpoint.lng;

    var radians = Math.atan2((y1 - y2), (x1 - x2));
    var compassReading = radians * (180 / Math.PI);

    var coordNames = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    var coordIndex = Math.round(compassReading / 45);
    if (coordIndex < 0)
    {
        coordIndex = coordIndex + 8
    };

    return coordNames[coordIndex];
}
module.exports = directionCalculation;