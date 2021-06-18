import { useEffect, useState } from 'react';
import { getNav } from '../api/getNav';
import { NavSchema } from '../schemas/nav.schema';

export const useNavService = () => {
  const [naviItems, setNaviItems] = useState<Array<NavSchema>>();

  useEffect(() => {
    async function updateNav() {
      const response = await getNav();
      setNaviItems(response.data);
    }

    updateNav();
  }, []);

  return {
    naviItems,
  };
};
