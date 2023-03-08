import { NextApiRequest, NextApiResponse } from "next";
import { prismicClient } from "../../../lib/prismic";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tweets = await prismicClient.getAllByType("tweet");

  res.status(200).json(tweets);
}
