import NextArrow from "./Icons/NextArrow";
import Discord from "./Icons/Discord";
import Link from "next/link"
const Footer = (props) => {
    return (
      <footer
        style={{ background: '#0b090a' }}
        className="border-t border-brand_red p-6 py-16 text-white lg:px-24 xl:px-52"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 md:pr-3">
            <Link href="/">
              <div className="logo flex cursor-pointer items-center">
                <img width={46} src="/images/navbar/logo.png" />
                <img
                  width={200}
                  className="pl-3"
                  src="/images/navbar/shogun_warriors.png"
                />
              </div>
            </Link>
            <p className="py-4 text-sm text-brand_gray md:w-8/12">
              There will be great battles ahead. Only the Shōgun Warriors will
              remain standing.
            </p>
          </div>
          <div className="w-full md:w-6/12 md:pl-3">
            <div className="flex flex-wrap  items-center  py-4 text-xs md:justify-end">
              <a href="#">
                <button className="btn primary text-xs ">
                  <span>Public Mint</span>
                  <span>
                    <NextArrow />
                  </span>
                </button>
              </a>
              <a href={props?.discord} target="_blank" referrerPolicy="no-referrer">
                <button className="btn outline-btn text-xs ">
                  <span>Join Our Discord</span>
                  <span>
                    <Discord />
                  </span>
                </button>
              </a>
            </div>
            <div className="social_media py-3">
              <ul className="flex items-center  md:justify-end">
                <li className="text-md px-2">
                  <a
                    target="_blank"
                    referrerPolicy="no-referrer"
                    href={props?.twitter}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.225"
                      height="20.487"
                      viewBox="0 0 25.225 20.487"
                    >
                      <path
                        id="Icon_awesome-twitter"
                        data-name="Icon awesome-twitter"
                        d="M22.632,8.486c.016.224.016.448.016.672A14.608,14.608,0,0,1,7.939,23.868,14.609,14.609,0,0,1,0,21.547a10.694,10.694,0,0,0,1.248.064A10.354,10.354,0,0,0,7.667,19.4a5.179,5.179,0,0,1-4.834-3.585,6.519,6.519,0,0,0,.976.08,5.468,5.468,0,0,0,1.36-.176,5.17,5.17,0,0,1-4.145-5.074v-.064a5.206,5.206,0,0,0,2.337.656,5.177,5.177,0,0,1-1.6-6.914,14.7,14.7,0,0,0,10.66,5.41,5.836,5.836,0,0,1-.128-1.184,5.175,5.175,0,0,1,8.947-3.537A10.178,10.178,0,0,0,24.52,3.765a5.156,5.156,0,0,1-2.273,2.849,10.364,10.364,0,0,0,2.977-.8,11.113,11.113,0,0,1-2.593,2.673Z"
                        transform="translate(0 -3.381)"
                        fill="#b80707"
                      />
                    </svg>
                  </a>
                </li>
                <li className="text-md px-2">
                  <a
                    target="_blank"
                    referrerPolicy="no-referrer"
                    href={props?.instagram}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.847"
                      height="20.847"
                      viewBox="0 0 20.847 20.847"
                    >
                      <g
                        id="_618b2d3a70bb5b0f633d6ca0_instagram"
                        data-name="618b2d3a70bb5b0f633d6ca0_instagram"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_84"
                          data-name="Path 84"
                          d="M9.312,0h1.141c3.395,0,3.8.012,5.138.073a7.039,7.039,0,0,1,2.361.438,3.933,3.933,0,0,1,1.461.951,3.948,3.948,0,0,1,.952,1.462A7.03,7.03,0,0,1,20.8,5.288c.061,1.341.074,1.743.074,5.137s-.013,3.8-.074,5.137a7.037,7.037,0,0,1-.438,2.361,4.217,4.217,0,0,1-2.413,2.412,7.012,7.012,0,0,1-2.361.438c-1.34.061-1.743.074-5.138.074s-3.8-.013-5.138-.074a7.058,7.058,0,0,1-2.361-.438,3.938,3.938,0,0,1-1.462-.951,3.941,3.941,0,0,1-.952-1.462A7.027,7.027,0,0,1,.1,15.561c-.061-1.34-.073-1.743-.073-5.139S.041,6.626.1,5.285A7.041,7.041,0,0,1,.539,2.924a3.94,3.94,0,0,1,.952-1.462A3.946,3.946,0,0,1,2.953.51,7.023,7.023,0,0,1,5.314.072C6.487.019,6.942,0,9.312,0ZM17.24,2.115A1.526,1.526,0,1,0,18.765,3.64,1.526,1.526,0,0,0,17.24,2.115ZM10.452,3.9a6.53,6.53,0,1,0,6.529,6.531A6.531,6.531,0,0,0,10.452,3.9Z"
                          transform="translate(-0.028 0)"
                          fill="#b80707"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_85"
                          data-name="Path 85"
                          d="M9.014,4.75A4.239,4.239,0,1,1,4.776,8.989,4.239,4.239,0,0,1,9.014,4.75Z"
                          transform="translate(1.41 1.439)"
                          fill="#b80707"
                          fillRule="evenodd"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="text-md px-2">
                  <a
                    target="_blank"
                    referrerPolicy="no-referrer"
                    href={props?.fb}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.168"
                      height="22.719"
                      viewBox="0 0 12.168 22.719"
                    >
                      <path
                        id="Icon_awesome-facebook-f"
                        data-name="Icon awesome-facebook-f"
                        d="M12.98,12.78l.631-4.112H9.666V6a2.056,2.056,0,0,1,2.318-2.221h1.794V.278A21.872,21.872,0,0,0,10.594,0C7.345,0,5.221,1.969,5.221,5.534V8.668H1.609V12.78H5.221v9.94H9.666V12.78Z"
                        transform="translate(-1.609)"
                        fill="#b80707"
                      />
                    </svg>
                  </a>
                </li>
                <li className="text-md px-2">
                  <a
                    target="_blank"
                    referrerPolicy="no-referrer"
                    href={props?.youtube}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      viewBox="0 0 35.086 24.67"
                    >
                      <path
                        id="Icon_awesome-youtube"
                        data-name="Icon awesome-youtube"
                        d="M35.4,8.36a4.409,4.409,0,0,0-3.1-3.122C29.565,4.5,18.593,4.5,18.593,4.5s-10.972,0-13.708.738a4.409,4.409,0,0,0-3.1,3.122,46.248,46.248,0,0,0-.733,8.5,46.248,46.248,0,0,0,.733,8.5,4.343,4.343,0,0,0,3.1,3.072c2.736.738,13.708.738,13.708.738s10.972,0,13.708-.738a4.343,4.343,0,0,0,3.1-3.072,46.248,46.248,0,0,0,.733-8.5,46.248,46.248,0,0,0-.733-8.5ZM15,22.077V11.643l9.17,5.217L15,22.077Z"
                        transform="translate(-1.05 -4.5)"
                        fill="#b80707"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-6 text-center text-xs text-brand_gray">
          © 2022 Shōgun Warriors. All rights reserved.
        </div>
      </footer>
    )
}
 
export default Footer;