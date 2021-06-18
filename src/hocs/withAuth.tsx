import { useRouter } from 'next/router';
import React, { ComponentType, useEffect } from 'react';

interface Props {
  isLogin: boolean;
}

export function withAuth<T extends Props>(InputCompo: ComponentType<T>) {
  function OutputComponent({ isLogin, ...props }: Props) {
    const router = useRouter();

    useEffect(() => {
      window.console.log(`로그인여부: ${isLogin}`);
      if (!isLogin) {
        router.push('/login');
      }
    }, [router, isLogin]);

    if (!isLogin) {
      return <div>test</div>;
    }

    return <InputCompo {...(props as T)} />;
  }
  return OutputComponent;
}
