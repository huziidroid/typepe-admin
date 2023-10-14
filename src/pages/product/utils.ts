import {TProductFormSchema} from '@/types';

export type TDraftingProductFormDefaultValues = {
  title: string;
  numberOfParties: number;
  productPrice: number;
  productForm: TProductFormSchema;
  productFile: File;
  formFields: string[];
};

export const FormDefaultValues: Partial<TDraftingProductFormDefaultValues> = {
  title: '',
  numberOfParties: 1,
  productForm: {},
  formFields: [],
};
