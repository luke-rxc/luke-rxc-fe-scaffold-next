import { useState } from 'react';

export const useFilter = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpenFilter = () => {
    setOpen(true);
  };

  const onCloseFilter = () => {
    setOpen(false);
  };

  return { open, onOpenFilter, onCloseFilter };
};
