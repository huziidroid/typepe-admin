/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {forwardRef} from 'react';
import {IMaskInput} from 'react-imask';

type CustomMaskProp = {
  onChange: (...event: any[]) => void; // any is passed here since the type is dynamic here
  mask?: string;
};
const CustomMask = (props: CustomMaskProp | any, ref: React.Ref<any>) => {
  const {onChange, mask = '', ...rest} = props;
  return <IMaskInput mask={mask} inputRef={ref} onAccept={(_, inputMask) => onChange(inputMask.unmaskedValue)} overwrite {...rest} />;
};

export default forwardRef(CustomMask);
