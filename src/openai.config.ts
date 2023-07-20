import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-nordNWYO5e6xgHHfk8i0etUv",
    apiKey: process.env.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);