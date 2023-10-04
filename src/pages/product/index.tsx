import {PaginatedTable, withDrawer} from '@/components';
import React from 'react';

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
  return (
    <PaginatedTable<TPaperDraftingProduct>
      data={DummyData}
      headers={['ID', 'Title', 'Number of Parties', 'Details']}
      columns={['id', 'title', 'numberOfParties', 'showDetails']}
      searchBarProps={{onSearch: () => {}}}
      title='Drafting Products'
      toolbarButtonProps={{title: 'Add'}}
      cellAttrs={{
        id: {type: 'text'},
        title: {type: 'text'},
        numberOfParties: {type: 'text'},
        showDetails: {type: 'button', callback: () => {}},
      }}
    />
  );
};

export default withDrawer(ProductsPage);
