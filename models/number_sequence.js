const numberSequenceModel = {
    randomNumber: null,
    userInput: null,
    score: 0,
    correctAnswers: 0,
    sequenceLength: 2,

    generateRandomSequence: function ()
    {
        const min = Math.pow(10, this.sequenceLength - 1);
        const max = Math.pow(10, this.sequenceLength) - 1;
        this.randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    },

    setInput: function (input)
    {
        this.userInput = input;
    },

    checkInput: function ()
    {
        return this.userInput == this.randomNumber.toString();
    },

    increaseSequenceLength: function ()
    {
        this.sequenceLength++;
    }
};

module.exports = numberSequenceModel;
