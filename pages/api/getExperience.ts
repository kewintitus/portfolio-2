import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { Experience } from '../../typings';
import { sanityClient } from '../../sanity';
import { useEffect } from 'react';

const experience = groq`*[_type=='experience']`;

type Data = {
  experiences: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Data = await sanityClient.fetch(
    groq`*[_type=='experience']`
  );

  console.log(experiences);
  res.status(200).json({ experiences });
}
