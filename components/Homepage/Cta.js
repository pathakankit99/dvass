import NextArrow from "../Icons/NextArrow"
import Discord from "../Icons/Discord"
import Twitter from "../Icons/Twitter"
const Cta = () => {
    return (
      <section
        style={{ background: '#0b090a' }}
        className="center relative overflow-x-hidden p-6 text-white  lg:h-50vh lg:px-24 xl:px-52 "
      >
        <div className="absolute" style={{ right: '-20%' }}>
          <img width={500} src="/images/cta/img.png" />
        </div>
        <div className="content center w-full flex-wrap">
          <div className="w-full p-6 md:w-6/12">
            <div>
              <h3 className="text-2xl font-medium uppercase text-white">
                Join the strong
              </h3>
              <h3 className="text-3xl font-medium uppercase text-brand_red">
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
          <div className="w-full p-6 md:w-6/12">
            <label className="capitalize">Newsletter sign up</label>
            <div style={{borderRadius:"70px"}} className="mt-4 w-full md:w-10/12 flex border border-brand_red px-4 py-3 text-brand_red">
              <input
                className="placeholder-red flex-1 bg-transparent focus:outline-none"
                placeholder="Email Address"
              />
              <button className="btn primary py-1 m-0" style={{margin:0}}>
                <span>Submit</span>
                <span>
                  <NextArrow />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}
 
export default Cta;