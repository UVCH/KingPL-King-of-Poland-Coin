import React from 'react';
import { publicPath } from '@/lib/publicPath';

export default function TemplateHead() {
  // Kolejność z <head> w template/file/index.html
  const css = [
    publicPath('/template/file/assets/css/bootstrap.min.css'),
    publicPath('/template/file/assets/css/fontawesome.css'),
    publicPath('/template/file/assets/css/magnific-popup.css'),
    publicPath('/template/file/assets/css/nice-select.css'),
    publicPath('/template/file/assets/css/slick-slider.css'),
    publicPath('/template/file/assets/css/owl.carousel.min.css'),
    publicPath('/template/file/assets/css/aos.css'),
    // z index.html: zewnętrzny styl Swipera
    'https://unpkg.com/swiper/swiper-bundle.min.css',
    publicPath('/template/file/assets/css/mobile-menu.css'),
    publicPath('/template/file/assets/css/main.css'),
  ];

  return (
    <>
      {css.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <link rel="icon" href={publicPath('/template/file/assets/img/logo/titile1.png')} />
      <title>KingPL</title>
    </>
  );
}
