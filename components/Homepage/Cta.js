import NextArrow from '../Icons/NextArrow'
import Discord from '../Icons/Discord'
import Twitter from '../Icons/Twitter'
const Cta = (props) => {
  return (
    <section
      style={{ background: '#0b090a' }}
      id="cta"
      className="center relative overflow-hidden p-6 py-16  text-white lg:h-50vh lg:px-24 xl:px-52"
    >
      <div className="absolute" style={{ right: '-20%' }}>
        <img className="ml-52 md:ml-0" width={500} src="/images/cta/img.png" />
      </div>
      <div className="content center w-full flex-wrap">
        <div className="w-full lg:w-7/12">
          <div>
            <h3 className="brand-title-small mb-2 text-2xl  uppercase text-white md:text-4xl">
              Join the strong
            </h3>
            <h3 className="brand-title-big text-3xl  uppercase text-brand_red md:text-5xl">
              Warriors community
            </h3>
          </div>
          <p className="text-md pt-3 text-sm  tracking-wider text-brand_gray md:text-base lg:pr-4">
            Join the discussion in one of our active online TTRPG communities,
            get tips, advice, and answers to questions. Share your ideas, be
            inspired, and debate the latest content release!
          </p>
          <div className="flex pt-4">
            <a
              href={process.env.NEXT_PUBLIC_DISCORD}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <button className="btn red-outline-btn">
                <span>Discord</span>
                <span className="">
                  <Discord />
                </span>
              </button>
            </a>
            <a
              href={process.env.NEXT_PUBLIC_TWITTER}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <button className="btn red-outline-btn">
                <span>Twitter</span>
                <span>
                  <Twitter />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="mt-16 w-full lg:mt-0 lg:w-5/12">
          <label className="capitalize">Newsletter sign up</label>
          <div
            style={{ borderRadius: '70px' }}
            className="relative mt-4 flex w-full border border-brand_red px-4 py-3 text-brand_red md:w-10/12"
          >
            <input
              className="placeholder-red flex-1 bg-transparent focus:outline-none"
              placeholder="Email Address"
            />
            <div className=" hidden md:flex">
              <button className=" btn primary m-0 py-1 " style={{ margin: 0 }}>
                <span>Submit</span>
                <span>
                  <NextArrow />
                </span>
              </button>
            </div>

            <button
              className="rounded-full bg-brand_red p-3 md:hidden"
              style={{ margin: 0 }}
            >
              <span className="text-xs" style={{ width: '32px' }}>
                <NextArrow />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
{
  /* <div
              className="center absolute md:relative md:block"
              style={{ top: '120%', left: '0', right: '0' }}
            >
              <button className=" btn primary m-0 py-1" style={{ margin: 0 }}>
                <span>Submit</span>
                <span>
                  <NextArrow />
                </span>
              </button>
            </div> */
}
