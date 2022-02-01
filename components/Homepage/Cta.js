import NextArrow from '../Icons/NextArrow'
import Discord from '../Icons/Discord'
import Twitter from '../Icons/Twitter'
const Cta = () => {
  return (
    <section
      style={{ background: '#0b090a' }}
      id="cta"
      className="center relative overflow-hidden p-6 text-white  lg:h-50vh lg:px-24 xl:px-52 py-16"
    >
      <div className="absolute" style={{ right: '-20%' }}>
        <img className="ml-52 md:ml-0" width={500} src="/images/cta/img.png" />
      </div>
      <div className="content center w-full flex-wrap">
        <div className="w-full p-6 lg:w-7/12">
          <div>
            <h3 className="text-4xl font-medium uppercase text-white">
              Join the strong
            </h3>
            <h3 className="text-5xl font-medium uppercase text-brand_red">
              Warriors community
            </h3>
          </div>
          <p className="pt-3 text-sm font-light tracking-wider text-brand_gray">
            Join the discussion in one of our active online TTRPG communities,
            get tips, advice, and answers to questions. Share your ideas, be
            inspired, and debate the latest content release!
          </p>
          <div className="flex pt-4">
            <a href="https://google.com">
              <button className="btn red-outline-btn">
                <span>Discord</span>
                <span className="">
                  <Discord />
                </span>
              </button>
            </a>
            <button className="btn red-outline-btn">
              <span>Twitter</span>
              <span>
                <Twitter />
              </span>
            </button>
          </div>
        </div>
        <div className="w-full p-6 lg:w-5/12">
          <label className="capitalize">Newsletter sign up</label>
          <div
            style={{ borderRadius: '70px' }}
            className="relative mt-4 flex w-full border border-brand_red px-4 py-3 text-brand_red md:w-10/12"
          >
            <input
              className="placeholder-red flex-1 bg-transparent focus:outline-none"
              placeholder="Email Address"
            />
            <div
              className="center absolute md:relative md:block"
              style={{ top: '120%', left: '0', right: '0' }}
            >
              <button className=" btn primary m-0 py-1" style={{ margin: 0 }}>
                <span>Submit</span>
                <span>
                  <NextArrow />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
