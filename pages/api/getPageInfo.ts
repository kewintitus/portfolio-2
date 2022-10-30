import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { PageInfo } from '../../typings';
import { sanityClient } from '../../sanity';

const pageInfo = groq`*[_type == "pageInfo"][0]`;

type Data = {
  page: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const page: PageInfo = await sanityClient.fetch(pageInfo);

  res.status(200).json({ page });
}
