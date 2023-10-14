import {useCallback, useState} from 'react';

import {PaginatedTable, withDrawer} from '@/components';
import AddProductModal from './components/AddProductModal';
import {TDraftingProductListItemWithAction} from '@/types';
import {useGetDraftingProducts} from '@/services';

const ProductsPage = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const {data = {draftingProducts: [], total: 0}, handlePageChange, handlePageSizeChange, onSearch, page, pageSize} = useGetDraftingProducts({showLoading: true});

  const openModal = useCallback(() => setShowAddProductModal(true), []);
  const closeModal = useCallback(() => setShowAddProductModal(false), []);

  return (
    <>
      <PaginatedTable<TDraftingProductListItemWithAction>
        data={data.draftingProducts}
        headers={['ID', 'Title', 'Number of Parties', 'Details']}
        columns={['productId', 'title', 'numberOfParties', 'action']}
        searchBarProps={{onSearch}}
        title='Drafting Products'
        toolbarButtonProps={{title: 'Add', onClick: openModal}}
        cellAttrs={{action: {type: 'button'}}}
        page={page}
        pageSize={pageSize}
        handlePageChange={handlePageChange}
        handlePageSizeChange={handlePageSizeChange}
        total={data.total}
      />
      {showAddProductModal && <AddProductModal isOpen={showAddProductModal} onClose={closeModal} />}
    </>
  );
};

export default withDrawer(ProductsPage);
