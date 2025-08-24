'use client';
import Script from 'next/script';
import { publicPath } from '@/lib/publicPath';

export default function TemplateScripts() {
  // Kolejność z dołu index.html:
  const js = [
    publicPath('/template/file/assets/js/jquery-3-7-1.min.js'),
    publicPath('/template/file/assets/js/bootstrap.min.js'),
    publicPath('/template/file/assets/js/fontawesome.js'),
    publicPath('/template/file/assets/js/mobile-menu.js'),
    publicPath('/template/file/assets/js/jquery.magnific-popup.js'),
    publicPath('/template/file/assets/js/owl.carousel.min.js'),
    publicPath('/template/file/assets/js/jquery.countup.js'),
    publicPath('/template/file/assets/js/slick-slider.js'),
    publicPath('/template/file/assets/js/jquery.nice-select.js'),
    publicPath('/template/file/assets/js/gsap.min.js'),
    publicPath('/template/file/assets/js/apexcharts.js'),
    publicPath('/template/file/assets/js/ScrollTrigger.min.js'),
    publicPath('/template/file/assets/js/Splitetext.js'),
    publicPath('/template/file/assets/js/text-animation.js'),
    publicPath('/template/file/assets/js/switchmode.js'),
    publicPath('/template/file/assets/js/aos.js'),
    publicPath('/template/file/assets/js/SmoothScroll.js'),
    publicPath('/template/file/assets/js/swiper.js'),
    publicPath('/template/file/assets/js/jquery.lineProgressbar.js'),
    publicPath('/template/file/assets/js/tilt.jquery.js'),
    publicPath('/template/file/assets/js/chart.js'),
    publicPath('/template/file/assets/js/animation.js'),
    publicPath('/template/file/assets/js/main.js'),
  ];

  return (
    <>
      {js.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" />
      ))}
    </>
  );
}
