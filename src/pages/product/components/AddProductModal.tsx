import {useCallback} from 'react';
import {Button, Paper, Stack, Typography} from '@mui/material';
import {When} from 'react-if';
import {FormProvider, useForm} from 'react-hook-form';

import {StyledModal} from '../styles';
import {FileInput, InputFormField, MultiSelectorInput} from '@/components';
import {ProductUtils} from '@/utils';
import {useAddDraftingProduct} from '@/services';
import {FormDefaultValues, TDraftingProductFormDefaultValues} from '../utils';

interface IAddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddProductModal = (props: IAddProductModalProps) => {
  const {isOpen, onClose} = props;

  const methods = useForm<TDraftingProductFormDefaultValues>({defaultValues: FormDefaultValues, mode: 'onChange'});
  const {mutate} = useAddDraftingProduct({showLoading: true});

  const {numberOfParties, productForm, formFields} = methods.watch();

  const onFileSelect = useCallback((file: File) => ProductUtils.getFileContent(file, fileds => methods.setValue('formFields', fileds)), []);

  const onModalClose = useCallback(() => {
    onClose();
    methods.reset(FormDefaultValues);
  }, []);

  const onChange = useCallback((key: string, value: string[]) => {
    const prevSchema = methods.getValues('productForm');
    methods.setValue('productForm', {...prevSchema, [key]: value});
  }, []);

  const onSubmit = (data: TDraftingProductFormDefaultValues) => {
    mutate(
      {title: data.title, discountPercentage: 0, numberOfParties: +data.numberOfParties, productFile: data.productFile, productForm: data.productForm, productPrice: +data.productPrice},
      {onSuccess: onClose},
    );
  };

  return (
    <StyledModal open={isOpen} onClose={onModalClose}>
      <Paper sx={{m: 4, p: 3, width: '40%', height: '80%', overflow: 'scroll'}}>
        <Typography variant='h5' mb={4}>
          Create Drafting Product
        </Typography>

        {/* Form */}
        <FormProvider {...methods}>
          <Stack>
            <InputFormField name='title' label='Title' placeholder='Product Title' />
            <InputFormField name='productPrice' label='Product Price' type='number' placeholder='Enter product price' />
            <InputFormField name='numberOfParties' label='No. of parties' type='number' placeholder='Enter number of parties' />

            <Stack spacing={3}>
              <FileInput name='productFile' label='Select Document' handleOnChange={onFileSelect} disabled={numberOfParties <= 0} />

              <When condition={formFields.length > 0}>
                {Array.from({length: numberOfParties}).map((_, index) => {
                  const key = `Party ${index + 1}`;

                  return (
                    <MultiSelectorInput
                      key={index.toString()}
                      label={key}
                      placeholder={`Select fields to be filled by party ${index + 1}`}
                      // data={fields.filter(field => !Object.values(productForm).flat().includes(field))}
                      data={formFields}
                      selectedValues={productForm[key] || []}
                      onChange={val => onChange(key, val)}
                    />
                  );
                })}
              </When>

              <Button variant='contained' onClick={methods.handleSubmit(onSubmit)}>
                Create
              </Button>
            </Stack>
          </Stack>
        </FormProvider>
      </Paper>
    </StyledModal>
  );
};

export default AddProductModal;
