// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST")
    return res.status(404).json({ msg: "Invalid Method" });

  console.log(req.body);
  res.status(200).json(req.body);
}
