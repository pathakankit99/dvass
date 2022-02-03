import Slider from 'react-slick'
import React, { useState, useEffect } from 'react'
const headData = [
  {
    key: 1,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Head',
    para: '4.37% have this trait',
  },
  {
    key: 2,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Head 2',
    para: '8.92% have this trait',
  },
  {
    key: 3,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Head 3',
    para: '40.85% have this trait',
  },
  {
    key: 4,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Head 4',
    para: '80.74% have this trait',
  },
  {
    key: 5,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Head 5',
    para: '44.44% have this trait',
  },
  {
    key: 6,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Head 6',
    para: '68.92% have this trait',
  },
  {
    key: 7,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Head 7',
    para: '740.85% have this trait',
  },
  {
    key: 8,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Head 8',
    para: '0.74% have this trait',
  },
]
const faceData = [
  {
    key: 1,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Face',
    para: '4.37% have this trait',
  },
  {
    key: 2,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Face 2',
    para: '8.92% have this trait',
  },
  {
    key: 3,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Face 3',
    para: '40.85% have this trait',
  },
  {
    key: 4,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Face 4',
    para: '80.74% have this trait',
  },
]
const outfitsData = [
  {
    key: 1,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War outfits',
    para: '4.37% have this trait',
  },
  {
    key: 2,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War outfits 2',
    para: '8.92% have this trait',
  },
  {
    key: 3,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War outfits 3',
    para: '40.85% have this trait',
  },
  {
    key: 4,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War outfits 4',
    para: '80.74% have this trait',
  },
]
const hairData = [
  {
    key: 1,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War hair',
    para: '4.37% have this trait',
  },
  {
    key: 2,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War hair 2',
    para: '8.92% have this trait',
  },
  {
    key: 3,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War hair 3',
    para: '40.85% have this trait',
  },
]
const ornamentsData = [
  {
    key: 1,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Ornaments',
    para: '4.37% have this trait',
  },
  {
    key: 2,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Ornaments 2',
    para: '8.92% have this trait',
  },
  {
    key: 3,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Ornaments 3',
    para: '40.85% have this trait',
  },
  {
    key: 4,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War Ornaments 4',
    para: '80.74% have this trait',
  },
]
const backgroundData = [
  {
    key: 1,
    image: '/images/rarity/img.png',
    trait_type: 'Shogun War background',
    para: '4.37% have this trait',
  },
]
const traitList = [
  {
    key: 'headData',
    heading: 'head',
    para: 'More than 16 unique heads designed for your Warriors.',
  },
  {
    key: 'faceData',
    heading: 'face',
    para: 'Angry? Sad? Determined?',
  },
  {
    key: 'outfitsData',
    heading: 'outfits',
    para: 'Shōgun Warriors are outfitted with a wide range of clothes.',
  },
  {
    key: 'hairData',
    heading: 'hair',
    para: 'The ninjas have various different hairstyles, many of which are ultra rare, including 1 of 1s.',
  },
  {
    key: 'ornamentsData',
    heading: 'ornament',
    para: `Shōgun Warriors are outfitted with a wide range of clothes.`,
  },
  {
    key: 'backgroundData',
    heading: 'background',
    para: 'Where will your ninja reside?',
  },
]
const allData = {
  headData,
  faceData,
  outfitsData,
  hairData,
  ornamentsData,
  backgroundData,
}
const Rarity = () => {
  const [data, setData] = useState(headData)
  const [trait, setTrait] = useState('headData')
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'center',
    arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'center',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props

    return (
      <div
        onClick={onClick}
        // style={{ ...style }}
        className={
          'arrows absolute top-0 bottom-0 left-0 z-50 flex cursor-pointer flex-col justify-center'
        }
      >
        <svg viewBox="0 0 130 130">
          <defs>
            <filter
              id="Ellipse_691"
              x="0"
              y="0"
              width="130"
              height="130"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="12" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feFlood floodColor="#b80707" floodOpacity="0.502" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Group_228" data-name="Group 228" transform="translate(45 33)">
            <g
              transform="matrix(1, 0, 0, 1, -45, -33)"
              filter="url(#Ellipse_691)"
            >
              <g
                id="Ellipse_691-2"
                data-name="Ellipse 691"
                transform="translate(45 33)"
                fill="#b80707"
                stroke="#b80707"
                strokeWidth="1"
              >
                <circle cx="20" cy="20" r="20" stroke="none" />
                <circle cx="20" cy="20" r="19.5" fill="none" />
              </g>
            </g>
            <path
              id="Icon_awesome-arrow-down"
              data-name="Icon awesome-arrow-down"
              d="M14.57,9.21l.794-.794a.855.855,0,0,0,0-1.212L8.416.252A.855.855,0,0,0,7.2.252L.252,7.2a.855.855,0,0,0,0,1.212l.794.794A.859.859,0,0,0,2.273,9.2L6.378,4.887V15.164a.856.856,0,0,0,.858.858H8.38a.856.856,0,0,0,.858-.858V4.887L13.344,9.2A.853.853,0,0,0,14.57,9.21Z"
              transform="translate(11.978 27.616) rotate(-90)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    )
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props

    return (
      <div
        onClick={onClick}
        // style={{ ...style }}
        className={
          'arrows absolute top-0 bottom-0 right-0 z-50 flex cursor-pointer flex-col justify-center'
        }
      >
        <svg viewBox="0 0 130 130">
          <defs>
            <filter
              id="Ellipse_691"
              x="0"
              y="0"
              width="130"
              height="130"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="12" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feFlood floodColor="#b80707" floodOpacity="0.502" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Group_229" data-name="Group 229" transform="translate(45 33)">
            <g
              transform="matrix(1, 0, 0, 1, -45, -33)"
              filter="url(#Ellipse_691)"
            >
              <g
                id="Ellipse_691-2"
                data-name="Ellipse 691"
                transform="translate(45 33)"
                fill="#b80707"
                stroke="#b80707"
                strokeWidth="1"
              >
                <circle cx="20" cy="20" r="20" stroke="none" />
                <circle cx="20" cy="20" r="19.5" fill="none" />
              </g>
            </g>
            <path
              id="Icon_awesome-arrow-down"
              data-name="Icon awesome-arrow-down"
              d="M14.57,6.812l.794.794a.855.855,0,0,1,0,1.212L8.416,15.77a.855.855,0,0,1-1.212,0L.252,8.818a.855.855,0,0,1,0-1.212l.794-.794a.859.859,0,0,1,1.227.014l4.105,4.309V.858A.856.856,0,0,1,7.236,0H8.38a.856.856,0,0,1,.858.858V11.136l4.105-4.309A.853.853,0,0,1,14.57,6.812Z"
              transform="translate(12 27.616) rotate(-90)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    )
  }
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  useEffect(() => {
    const temp = allData[trait]
    setData(temp)
    nav2?.slickGoTo(0)
    // nav1?.slickGoTo(0)
    // console.log(nav2, 'slider2')
    
  }, [trait])
  return (
    <section
      style={{ background: '#0b090a' }}
      id="rarity"
      className="relative overflow-x-hidden p-6 py-16  text-white lg:px-24 xl:px-52"
    >
      <div className="center relative h-auto w-full text-center">
        <div
          style={{ zIndex: 2 }}
          className="center absolute top-0 right-0 left-0"
        >
          <img width={300} src="/images/story/img3.png" />
        </div>
        <div style={{ marginTop: '2%', zIndex: '3' }} className="relative">
          <h3 className="mb-2 text-2xl font-medium uppercase text-white md:text-4xl">
            Creating a warriors
          </h3>
          <h3 className="text-3xl font-medium uppercase text-brand_red md:text-5xl">
            rarity
          </h3>
        </div>
      </div>
      <div className="center flex-wrap py-16">
        <div className="card-container flex py-6 lg:w-6/12 lg:flex-wrap">
          {traitList?.map((item) => (
            <div
              key={item.key}
              onClick={() => setTrait(item.key)}
              className={
                item.key === trait
                  ? 'card m-2 cursor-pointer rounded-2xl border border-brand_red bg-brand_red p-4 text-white'
                  : 'card m-2 cursor-pointer rounded-2xl border border-brand_red p-4 text-white'
              }
            >
              <h5 className="pb-3 uppercase">{item.heading}</h5>
              <p className={item.key === trait ? '' : 'text-brand_gray'}>
                {item?.para}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full overflow-hidden lg:w-6/12">
          <div className="pb-4">
            <Slider
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
              {...settings}
              className=""
            >
              {headData?.map((item) => (
                <div key={item.key + item.image} className="center">
                  <img src="/images/rarity/img.png" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="buttons w-full">
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              {...settings2}
              className="w-full"
            >
              {data?.map((item) => (
                <div
                  style={{ background: '#0F0808' }}
                  key={item.key}
                  className="center w-full"
                >
                  <div className="rounded-2xl border border-brand_red p-3 text-center">
                    <p className="text-lg capitalize text-brand_red md:text-2xl">
                      {item.trait_type}
                    </p>
                    <p className="pt-2 text-sm font-thin">{item.para}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rarity
