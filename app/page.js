const html = `
<header id="top"><nav><a class="brand" href="#top"><img src="/logo.png" alt="خونه پیسو - Pissoo House" height="52"></a><a href="#about">درباره ما</a><a href="#gallery">گالری</a><a href="#shop">فروشگاه</a><a href="#places">جاذبه‌ها</a><a href="#tours">تورها</a><a href="#map">موقعیت</a></nav></header>
<div class="hero">
  <div class="slides" aria-hidden="true">
    <div class="slide" style="background-image:url(/hero/hero-1.jpg);animation-delay:0s"></div>
    <div class="slide" style="background-image:url(/hero/hero-2.jpg);animation-delay:7s"></div>
    <div class="slide" style="background-image:url(/hero/hero-3.jpg);animation-delay:14s"></div>
    <div class="slide" style="background-image:url(/hero/hero-4.jpg);animation-delay:21s"></div>
  </div>
  <div class="hero-content">
    <div class="hero-logo"><img src="/logo.png" alt="لوگوی خونه بومگردی پیسو"></div>
    <h1>خونه بومگردی پیسو</h1>
    <p>خانه ساحلی بوشهر؛ جایی برای آرامش، دریا و آشنایی با دلفین‌های کوهان‌دار خلیج فارس</p>
    <div class="hero-actions"><a class="btn" href="tel:09938338277">رزرو: ۰۹۹۳۸۳۳۸۲۷۷</a><a class="btn ghost" href="#gallery">مشاهده گالری</a></div>
  </div>
  <div class="dots" aria-hidden="true"><span style="animation-delay:0s"></span><span style="animation-delay:7s"></span><span style="animation-delay:14s"></span><span style="animation-delay:21s"></span></div>
  <svg class="wave wave-back" viewBox="0 0 2400 60" preserveAspectRatio="none"><path d="M0 30 Q150 0 300 30 T600 30 T900 30 T1200 30 T1500 30 T1800 30 T2100 30 T2400 30 V60 H0Z" fill="rgba(255,255,255,.45)"/></svg>
  <svg class="wave wave-front" viewBox="0 0 2400 60" preserveAspectRatio="none"><path d="M0 30 Q150 0 300 30 T600 30 T900 30 T1200 30 T1500 30 T1800 30 T2100 30 T2400 30 V60 H0Z" fill="#fff"/></svg>
</div>
<section id="about"><h2>درباره خونه پیسو</h2><p>«پیسو» در گویش محلی یعنی دلفین. این خانه بومگردی با هدف حمایت از دلفین‌های منطقه و معرفی فرهنگ و طبیعت ساحل بوشهر ساخته شده است. دلفین‌های کوهان‌دار منطقه با همراهی طرح سرزمین ثبت ملی شده‌اند.</p></section>
<section id="gallery"><h2>گالری</h2><div class="grid"><div class="ph">عکس ۱</div><div class="ph">عکس ۲</div><div class="ph">عکس ۳</div><div class="ph">عکس ۴</div></div></section>
<section id="shop"><h2>فروشگاه صنایع دستی و محصولات محلی</h2><div class="grid"><div class="card sand"><h3>صنایع دستی</h3><p>محصولات دست‌ساز بومی منطقه.</p></div><div class="card sand"><h3>محصولات محلی</h3><p>سوغات و خوراکی‌های محلی بوشهر.</p></div></div></section>
<section id="places"><h2>جاذبه‌های اطراف</h2><div class="grid"><div class="card"><h3>ساحل و دریا</h3><p>پیاده‌روی و تماشای غروب.</p></div><div class="card"><h3>بندر رستمی</h3><p>منطقه زیست دلفین‌های کوهان‌دار.</p></div></div></section>
<section id="tours"><h2>تورها</h2><div class="grid"><div class="card"><h3>تور تماشای دلفین</h3><p>برای اطلاعات و رزرو تماس بگیرید.</p></div><div class="card"><h3>تور بومگردی</h3><p>آشنایی با روستا و فرهنگ محلی.</p></div></div></section>
<section id="map"><h2>موقعیت روی نقشه</h2><p>برای مسیریابی، نشانی خانه را در نقشه جستجو کنید:</p><a class="btn" href="https://neshan.org/maps/search/خونه بومگردی پیسو بوشهر" target="_blank" rel="noopener">مشاهده در نقشه</a></section>
<footer><img class="footer-logo" src="/logo.png" alt="خونه بومگردی پیسو"><div>خونه بومگردی پیسو · تماس: ۰۹۹۳۸۳۳۸۲۷۷ · pissoo.ir</div></footer>
`;
export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
