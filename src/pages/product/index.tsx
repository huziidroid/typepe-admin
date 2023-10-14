import {PaginatedTable, withDrawer} from '@/components';
import React, {useCallback, useState} from 'react';
import AddProductModal from './components/AddProductModal';

type TPaperDraftingProduct = {
  id: string;
  title: string;
  numberOfParties: number;
  showDetails: string;
};

const DummyData: TPaperDraftingProduct[] = [
  {
    id: 'DP-34232',
    numberOfParties: 2,
    showDetails: 'View',
    title: 'Rent Agreement',
  },
  {
    id: 'DP-34232',
    numberOfParties: 2,
    showDetails: 'View',
    title: 'Rent Agreement',
  },
  {
    id: 'DP-34232',
    numberOfParties: 2,
    showDetails: 'View',
    title: 'Rent Agreement',
  },
  {
    id: 'DP-34232',
    numberOfParties: 2,
    showDetails: 'View',
    title: 'Rent Agreement',
  },
  {
    id: 'DP-34232',
    numberOfParties: 2,
    showDetails: 'View',
    title: 'Rent Agreement',
  },
  {
    id: 'DP-34232',
    numberOfParties: 2,
    showDetails: 'View',
    title: 'Rent Agreement',
  },
  {
    id: 'DP-34232',
    numberOfParties: 2,
    showDetails: 'View',
    title: 'Rent Agreement',
  },
];

const ProductsPage = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const openModal = useCallback(() => setShowAddProductModal(true), []);
  const closeModal = useCallback(() => setShowAddProductModal(false), []);

  return (
    <>
      <PaginatedTable<TPaperDraftingProduct>
        data={DummyData}
        headers={['ID', 'Title', 'Number of Parties', 'Details']}
        columns={['id', 'title', 'numberOfParties', 'showDetails']}
        searchBarProps={{onSearch: () => {}}}
        title='Drafting Products'
        toolbarButtonProps={{title: 'Add', onClick: openModal}}
        cellAttrs={{
          id: {type: 'text'},
          title: {type: 'text'},
          numberOfParties: {type: 'text'},
          showDetails: {type: 'button', callback: () => {}},
        }}
      />
      {showAddProductModal && <AddProductModal isOpen={showAddProductModal} onClose={closeModal} />}
    </>
  );
};

export default withDrawer(ProductsPage);
