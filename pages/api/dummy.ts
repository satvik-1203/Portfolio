import { NextApiRequest, NextApiResponse } from "next/types";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  res.status(200).send("success");
}
