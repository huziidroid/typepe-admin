import React from 'react';

export const AppLogo = ({height = 200, width = 400}: {height?: number | string; width?: number | string}) => {
  return (
    <svg width={width} height={height} viewBox='0 0 166 75' fill='none' xmlns='http://www.w3.org/2000/svg' xlinkHref='http://www.w3.org/1999/xlink'>
      <path
        d='M87.2852 28.9375V46H85.0586V28.9375H87.2852ZM92.7695 28.9375V30.7891H79.5859V28.9375H92.7695ZM96.2734 28.9375L100.703 37.5039L105.145 28.9375H107.711L101.828 39.625V46H99.5664V39.625L93.6836 28.9375H96.2734ZM116.195 39.3086H111.637V37.4688H116.195C117.078 37.4688 117.793 37.3281 118.34 37.0469C118.887 36.7656 119.285 36.375 119.535 35.875C119.793 35.375 119.922 34.8047 119.922 34.1641C119.922 33.5781 119.793 33.0273 119.535 32.5117C119.285 31.9961 118.887 31.582 118.34 31.2695C117.793 30.9492 117.078 30.7891 116.195 30.7891H112.164V46H109.902V28.9375H116.195C117.484 28.9375 118.574 29.1602 119.465 29.6055C120.355 30.0508 121.031 30.668 121.492 31.457C121.953 32.2383 122.184 33.1328 122.184 34.1406C122.184 35.2344 121.953 36.168 121.492 36.9414C121.031 37.7148 120.355 38.3047 119.465 38.7109C118.574 39.1094 117.484 39.3086 116.195 39.3086ZM135.883 44.1602V46H126.848V44.1602H135.883ZM127.305 28.9375V46H125.043V28.9375H127.305ZM134.688 36.2734V38.1133H126.848V36.2734H134.688ZM135.766 28.9375V30.7891H126.848V28.9375H135.766ZM144.977 39.3086H140.418V37.4688H144.977C145.859 37.4688 146.574 37.3281 147.121 37.0469C147.668 36.7656 148.066 36.375 148.316 35.875C148.574 35.375 148.703 34.8047 148.703 34.1641C148.703 33.5781 148.574 33.0273 148.316 32.5117C148.066 31.9961 147.668 31.582 147.121 31.2695C146.574 30.9492 145.859 30.7891 144.977 30.7891H140.945V46H138.684V28.9375H144.977C146.266 28.9375 147.355 29.1602 148.246 29.6055C149.137 30.0508 149.812 30.668 150.273 31.457C150.734 32.2383 150.965 33.1328 150.965 34.1406C150.965 35.2344 150.734 36.168 150.273 36.9414C149.812 37.7148 149.137 38.3047 148.246 38.7109C147.355 39.1094 146.266 39.3086 144.977 39.3086ZM164.664 44.1602V46H155.629V44.1602H164.664ZM156.086 28.9375V46H153.824V28.9375H156.086ZM163.469 36.2734V38.1133H155.629V36.2734H163.469ZM164.547 28.9375V30.7891H155.629V28.9375H164.547Z'
        fill='black'
      />
      <rect width='75' height='75' fill='url(#pattern0)' />
      <defs>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_0_59' transform='scale(0.003125)' />
        </pattern>
        <image
          id='image0_0_59'
          width='320'
          height='320'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};
