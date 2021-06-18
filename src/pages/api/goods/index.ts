import { NextApiRequest, NextApiResponse } from 'next';
import mock from '../../../../mock_up/goods.json';
import mockRateDesc from '../../../../mock_up/goods-rate-desc.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { sort } = req.query;

  res.status(200).json(sort === 'rate-desc' ? mockRateDesc : mock);
}
