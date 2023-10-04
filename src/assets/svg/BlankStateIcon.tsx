import {TSvgIconProps} from '@/types';

export const BlankStateIcon = ({height = 251, width = 251}: Omit<TSvgIconProps, 'color'>) => {
  return (
    <svg width={width} height={height} viewBox='0 0 251 251' fill='none' xmlns='http://www.w3.org/2000/svg' style={{alignSelf: 'center'}}>
      <circle cx='125.5' cy='125.5' r='125.5' fill='rgb(240, 240, 240)' />
      <rect x='50.4218' y='88.123' width='150.152' height='89.6067' rx='8' fill='#000000' />
      <path
        d='M130.408 122.393C130.408 120.899 130.919 119.64 131.942 118.617C133.004 117.634 134.302 117.142 135.836 117.142C137.409 117.142 138.707 117.634 139.73 118.617C140.792 119.64 141.323 120.899 141.323 122.393C141.323 123.888 140.792 125.127 139.73 126.11C138.707 127.133 137.409 127.644 135.836 127.644C134.302 127.644 133.004 127.133 131.942 126.11C130.919 125.127 130.408 123.888 130.408 122.393ZM111.292 122.393C111.292 120.899 111.803 119.64 112.826 118.617C113.888 117.634 115.186 117.142 116.72 117.142C118.293 117.142 119.591 117.634 120.614 118.617C121.676 119.64 122.207 120.899 122.207 122.393C122.207 123.888 121.676 125.127 120.614 126.11C119.591 127.133 118.293 127.644 116.72 127.644C115.186 127.644 113.888 127.133 112.826 126.11C111.803 125.127 111.292 123.888 111.292 122.393ZM101.439 139.492L103.681 134.064C107.536 136.267 111.567 137.86 115.776 138.843C120.024 139.826 124.233 140.318 128.402 140.318C132.611 140.318 136.819 139.826 141.028 138.843C145.276 137.86 149.308 136.267 153.123 134.064L155.365 139.492C151.314 141.97 147.105 143.878 142.739 145.215C138.373 146.592 133.594 147.28 128.402 147.28C123.21 147.28 118.431 146.592 114.065 145.215C109.699 143.878 105.49 141.97 101.439 139.492Z'
        fill='white'
      />
    </svg>
  );
};
