import { firestore } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "METHOD NOT ALLOWED" });
  } else {
    const { uid } = req.body.params;
    const userHistoryRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(userHistoryRef);
    if (docSnap.exists()) {
      return res.status(200).json({ history: docSnap.data().historyv1 });
    } else {
      return res.status(200).json({ history: [] });
    }
  }
}
