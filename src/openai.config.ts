import { OpenAI } from "openai";
// const configuration = new Configuration({
//     organization: process.env.OPENAI_ORG,
//     apiKey: process.env.OPENAI_API_KEY,
// });
export const openai = new OpenAI({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_API_KEY,
});