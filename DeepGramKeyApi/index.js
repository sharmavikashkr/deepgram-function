const { Deepgram } = require('@deepgram/sdk');
const deepgram = new Deepgram(process.env.DG_KEY);

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function: Get Deepgram Key');
    const { key } = await deepgram.keys.create(process.env.DG_PROJECT_ID, 'temp badge key', ['usage:write'], { timeToLive: 10 });
    console.log(key);
    context.res = { body: key }
}
