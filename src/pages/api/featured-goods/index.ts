import { NextApiRequest, NextApiResponse } from 'next';
import mock from '../../../../mock_up/featured-goods.json';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(mock);
}
