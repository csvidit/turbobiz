import { openai } from "@/openai.config";
import { NextApiRequest, NextApiResponse } from "next";
import { ChatCompletionRequestMessage } from "openai";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(405).end();
  } else {
    const { category } = req.body.params;
    const prompt: ChatCompletionRequestMessage[] = [
      {
        role: "user",
        content: `Give me only ONE business idea for the ${category} industry. I want you to format your answer in three lines this format: \nSuggested name of the business\nDescription of the business\nA JavaScript array of possible domain names`,
      },
    ];
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: prompt,
    });
    const response = completion.data.choices[0].message?.content?.split("\n");
    console.log(completion.data);
    if (response != undefined) {
      //   console.log(response[2]?.substring(response[2].indexOf(":") + 1));
      const businessName = response[0]?.substring(response[0].indexOf(":") + 1);
      const businessDescription = response[1]?.substring(
        response[1].indexOf(":") + 1
      );
      const businessDomains = response[2]?.substring(
        response[2].indexOf(":") + 1
      );
      return res.status(200).json({
        businessName: businessName,
        businessDescription: businessDescription,
        businessDomains: businessDomains,
      });
    }
  }
}
