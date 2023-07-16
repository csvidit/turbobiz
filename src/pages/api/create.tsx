import { openai } from "@/openai.config";
import { NextApiRequest, NextApiResponse } from "next";
import { ChatCompletionRequestMessage } from "openai";
import * as _ from "lodash";
import * as fs from "graceful-fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(405).end();
  } else {
    const { category, country, isRemote, businessSize } = req.body.params;
    const prompt: ChatCompletionRequestMessage[] = [
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
        } I want you to format your answer in three lines this format: \nSuggested name of the business\nDescription of the business\nA JavaScript array of possible domain names`,
      },
    ];
    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: prompt,
      })
      .then((completion) => {
        const response =
          completion.data.choices[0].message?.content?.split("\n");
        if (response != undefined) {
          // console.log(response[2]?.substring(response[2].indexOf(":") + 1));
          const businessName = response[0]
            ?.substring(response[0].indexOf(":") + 1)
            .replace(/"/g, "");
          const businessDescription = response[1]?.substring(
            response[1].indexOf(":") + 1
          );
          let businessDomainsString = response[2]?.substring(
            response[2].indexOf(":") + 1
          );
          businessDomainsString.replace(/[\[\]]/g, "");
          businessDomainsString = businessDomainsString
            .trim()
            .slice(1, -1)
            .replace(/'/g, "");
          const businessDomains = businessDomainsString.split(",");

          res.status(200).json({
            businessName: businessName,
            businessDescription: businessDescription,
            businessDomains: businessDomains,
          });
          return res.end();
        }
      }).catch((error) => {
        console.log(error);
        return res.status(500);
      })

    // businessDomainsString = businessDomainsString
    //   .replace(/[\[\]]/g, "")
    //   .trim();
    // const businessDomains = businessDomainsString
    //   .split(",")
    //   .map((item) => item.trim());
  }
}

// const businessDomainsString = JSON.stringify(response[2]?.substring(
//   response[2].indexOf(":") + 1
// ));
