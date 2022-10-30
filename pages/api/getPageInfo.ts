import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { PageInfo } from '../../typings';
import { sanityClient } from '../../sanity';

const pageInfo = groq`*[_type == "pageInfo"][0]`;

const url =
  'https://eq7abb07.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22pageInfo%22%5D%5B0%5D%0A';

type Data = {
  projects: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: PageInfo = await sanityClient.fetch(pageInfo);

  res.status(200).json({ projects });
}
