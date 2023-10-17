import { Banner } from "../components";

export default function Home () {
  
  const bannerMen = 'https://lumia-theme.com/cdn/shop/files/banner-01_7a36448b-f9eb-4757-bc63-69bd8a4484b3.png?v=1664654338&width=1918'
  const bannerWomen = 'https://lumia-theme.com/cdn/shop/files/banner-02_03049ca5-a169-4037-b98a-af29bbafbd2d.png?v=1664654353&width=1918'
  return (
    <section className="flex justify-center">
      <div className="flex hero-section">
        <Banner url={bannerMen}>
          <div className="banner-content absolute flex flex-col justify-center p-[5vw] w-[65%] h-full top-0">
            <span>New Arrivals</span>
            <h1 className="text-[40px]">For Men</h1>
            <p className="description">Be fashionable and confident with our designer clothing. Express yourself through our unique fashion collections.</p>
            <button className="w-32 p-2 rounded bg-white mt-4">Shop Now</button>
          </div>
        </Banner>
        <Banner url={bannerWomen}>
          <div className="banner-content absolute flex flex-col justify-center p-[5vw] w-[65%] h-full top-0">
            <span>New Arrivals</span>
            <h1 className="text-[40px]">For Women</h1>
            <p className="description">Be fashionable and confident with our designer clothing. Express yourself through our unique fashion collections.</p>
            <button className="w-32 p-2 rounded bg-white mt-4">Shop Now</button>
          </div>
        </Banner>
      </div>
    </section>
  )
}