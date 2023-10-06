/* eslint-disable @typescript-eslint/no-explicit-any */
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import useConstant from 'use-constant';

export const useDebounce = (fn: (text: string) => void, wait = 500) => useConstant(() => AwesomeDebouncePromise(fn, wait, {onlyResolvesLast: true}));

import {useCallback, useState} from 'react';

export const useGetTableFilterParams = () => {
  const [searchText, setSearchText] = useState('');
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(0);

  const handlePageChange = useCallback((newPage: number) => setPage(newPage), []);
  const handlePageSizeChange = useCallback((newPageSize: number) => setPageSize(newPageSize), []);
  const onSearch = useCallback((searchQuery: string) => {
    setPage(0);
    setSearchText(searchQuery);
  }, []);

  return {searchText, pageSize, page, offset: pageSize * page, handlePageChange, handlePageSizeChange, onSearch};
};
