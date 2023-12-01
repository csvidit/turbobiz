import { firestore } from "@/firebase.config";
import { openai } from "@/openai.config";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

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
    const { category, categoryId, country, isRemote, businessSize, uid } =
      req.body.params;
    await openai.chat.completions
      .create({
        messages: [
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
            } I want you to format your answer as a JSON object in this format: {name: Suggested name of the business, description: A short description of the business, domains: An array of possible domain names
            }`,
          },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
      })
      .then(
        async (completion) => {
          const rawResponse = completion.choices[0].message.content!;
          rawResponse.trim();
          const responseData: OpenAiResponse = JSON.parse(rawResponse);
          if (responseData != undefined) {
            const currTime = new Date().getTime();
            const userInfoRef = doc(firestore, "users", uid);
            const docSnap = await getDoc(userInfoRef);
            const historyJson = {
              version: 1,
              category: categoryId,
              country: country,
              isRemote: isRemote,
              businessSize: businessSize,
              businessName: responseData.name,
              businessDescription: responseData.description,
              businessDomains: responseData.domains,
              createdTime: currTime,
            };
            if (docSnap.exists()) {
              const userHistoryUpdate = await updateDoc(userInfoRef, {
                historyv1: arrayUnion(historyJson),
              })
                .then((response) => {
                  res.status(200).json({
                    businessName: responseData.name,
                    businessDescription: responseData.description,
                    businessDomains: responseData.domains,
                  });
                  // setLoading(false);
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              const docData = { historyv1: [] };
              const setNewDoc = await setDoc(userInfoRef, docData).then(
                async (response) => {
                  const userHistoryUpdate = await updateDoc(userInfoRef, {
                    historyv1: arrayUnion(historyJson),
                  })
                    .then((response) => {
                      res.status(200).json({
                        businessName: responseData.name,
                        businessDescription: responseData.description,
                        businessDomains: responseData.domains,
                      });
                      // setLoading(false);
                    })
                    .catch((error) => console.log(error));
                }
              );
            }
          }
        }
      )
      .catch((error: string) => {
        console.log(error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      });
  }
}
