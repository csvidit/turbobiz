import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
    if(req.method == "GET")
    {
        
    }
    else if(req.method == "POST")
    {

    }
    else
    {
        return res.status(405).end();
    }
}