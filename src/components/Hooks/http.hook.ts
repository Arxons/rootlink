import { useState, useCallback } from 'react';

import { IUseHttp, IRespData } from '../interfaces';

const useHttp = (): IUseHttp => {
  const [isLoading, setIsLoading] = useState(false);

  const request = useCallback(async (url: string, method: string, body: BodyInit, headers: HeadersInit): Promise<IRespData> => {
    setIsLoading(true);

    try {
      const res: Response = await fetch(url, { method, body, headers });
      const data: IRespData = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Somethig wrong');
      }

      setIsLoading(false);

      return data;
    } catch (e: any) {
      setIsLoading(false);
      throw e;
    }
  }, []);

  return { isLoading, request };
};

export default useHttp;
