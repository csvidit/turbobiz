import { firestore } from "@/firebase.config";
import { openai } from "@/openai.config";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { ChatCompletionRequestMessage } from "openai";

type OpenAiResponse = {
  name: string;
  description: string;
  domains: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "METHOD NOT ALLOWED" });
  } else {
    const { category, country, isRemote, businessSize, uid } = req.body.params;
    const prompt: ChatCompletionRequestMessage[] = [
      {
        role: "system",
        content:
          "You are a smart, strategic, and innovative entrepreneur. You are looking to start a new business in the technology industry. You are looking for a business idea that is unique and innovative. You are looking for a business idea that is closely tailored for the local requirements, consumer psyche, culture, and market conditions of the country you are looking to start your business in. You are an expert in market analysis, and have impeccable entrepreneurial skills. You are also aware of international and national market trends and climate up until your knowledge cutoff date, and are able to make informed decisions based on them.",
      },
      {
        role: "user",
        content: `Give me only ONE unique and innovative ${
          businessSize == 0
            ? "small-sized"
            : businessSize == 1
            ? "medium-sized"
            : "large-sized"
        } business idea for the ${category} industry, closely tailored for the local requirements, consumer psyche, culture, and market conditions of ${country}. ${
          isRemote
            ? "It should be possible to operate this business completely remotely."
            : ""
        } I want you to format your answer as a JavaScript object in this format: {name: Suggested name of the business, description: A short description of the business, domains: An array of possible domain names
        }`,
      },
    ];
    await openai
      .createChatCompletion({
        model: "gpt-4",
        messages: prompt,
      })
      .then((completion) => {
        const rawResponse = completion.data.choices[0].message?.content!;
        rawResponse.trim();
        console.log(completion.data.choices[0].message?.content!);
        const response: OpenAiResponse = JSON.parse(rawResponse);
        if (response != undefined) {
          res.status(200).json({
            businessName: response.name,
            businessDescription: response.description,
            businessDomains: response.domains,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      });
  }
}
