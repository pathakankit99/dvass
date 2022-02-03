import Twitter from '../Icons/Twitter'
import Instagram from '../Icons/Instagram'
import Slider from 'react-slick'
const list = [
  {
    key: 1,
    image: '/images/team/green.png',
    name: 'Warriors alyssa',
    position: 'Art & Design',
    para: 'With sword and mind united, Vedran has led warriors into battle for over two decades. He never leaves the field until the war is won.',
    twitter: '',
    instagarm: '',
  },
  {
    key: 2,
    image: '/images/team/yellow.png',
    name: 'Warriors drew',
    position: 'Project Management',
    para: 'With sword and mind united, Vedran has led warriors into battle for over two decades. He never leaves the field until the war is won.',
    twitter: '',
    instagarm: '',
  },

  {
    key: 3,
    image: '/images/team/red2.png',
    name: 'Warriors kimberly',
    position: 'Development',
    para: 'With sword and mind united, Vedran has led warriors into battle for over two decades. He never leaves the field until the war is won.',
    twitter: '',
    instagarm: '',
  },
]
const Team = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    className: 'center',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 521,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props

    return (
      <div
        onClick={onClick}
        style={{ zIndex: 200 }}
        // style={{ ...style }}
        className={
          'arrows prev absolute top-0 bottom-0 left-0 z-50 flex cursor-pointer flex-col justify-center'
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
        style={{ zIndex: 200 }}
        // style={{ ...style }}
        className={
          'arrows next absolute top-0 bottom-0 right-0 z-50 flex cursor-pointer flex-col justify-center'
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
  return (
    <section
      style={{ background: '#0b090a' }}
      id="team"
      className="relative p-6 py-16  text-white lg:px-24 xl:px-52"
    >
      <div
        style={{
          zIndex: 1,
        }}
        className="world-warrior absolute top-0 left-0 right-0 bottom-0 hidden md:block"
      >
        <img
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100vw',
          }}
          src="/images/team/bg.png"
          alt="bg"
        />
      </div>
      <div className="relative">
        <div
          style={{ zIndex: 2, marginTop: '-3%' }}
          className="absolute top-0 -ml-16"
        >
          <img src="/images/story/img3.png" />
        </div>
        <div style={{ zIndex: 2 }} className="relative">
          <h3 className="brand-title-small mb-2 text-2xl  uppercase text-white md:text-4xl">
            The shŌgun warriors team
          </h3>
          <h3 className="brand-title-big text-3xl  uppercase text-brand_red md:text-5xl">
            real warriors at your service
          </h3>
        </div>
      </div>
      <div className="desktop-card-container">
        <div className="card">
          <div className="center w-full ">
            <img src="/images/team/green.png" />
          </div>
          <div className="info py-6">
            <div className="flex justify-between">
              <div>
                <h5>Warriors alyssa</h5>
                <h6>Art & Design</h6>
              </div>
              <div className="flex fill-brand_red">
                <a href="" className="mr-2 fill-brand_red">
                  <Twitter />
                </a>
                <a href="" className="fill-brand_red">
                  <Instagram />
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm text-brand_gray">
                With sword and mind united, Vedran has led warriors into battle
                for over two decades. He never leaves the field until the war is
                won.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="center w-full ">
            <img src="/images/team/yellow.png" />
          </div>
          <div className="info py-6">
            <div className="flex justify-between">
              <div>
                <h5>Warriors Drew</h5>
                <h6>Project Management</h6>
              </div>
              <div className="flex fill-brand_red">
                <a href="" className="mr-2 fill-brand_red">
                  <Twitter />
                </a>
                <a href="" className="fill-brand_red">
                  <Instagram />
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm text-brand_gray">
                With sword and mind united, Vedran has led warriors into battle
                for over two decades. He never leaves the field until the war is
                won.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="center w-full">
            <img src="/images/team/red2.png" />
          </div>
          <div className="info py-6">
            <div className="flex justify-between">
              <div>
                <h5>Warriors kimberly</h5>
                <h6>Development</h6>
              </div>
              <div className="flex fill-brand_red">
                <a href="" className="mr-2 fill-brand_red">
                  <Twitter />
                </a>
                <a href="" className="fill-brand_red">
                  <Instagram />
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm text-brand_gray">
                With sword and mind united, Vedran has led warriors into battle
                for over two decades. He never leaves the field until the war is
                won.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-card-container relative lg:hidden">
        <Slider {...settings} className="">
          {list?.map((item) => (
            <div key={item.key} className="card p-6">
              <div className="center w-full ">
                <img src={item?.image} />
              </div>
              <div className="info py-6">
                <div className="flex justify-between">
                  <div>
                    <h5>{item?.name}</h5>
                    <h6>{item?.position}</h6>
                  </div>
                  <div className="flex fill-brand_red">
                    <a href="" className="mr-2 fill-brand_red">
                      <Twitter />
                    </a>
                    <a href="" className="fill-brand_red">
                      <Instagram />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-brand_gray">{item?.para}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Team
