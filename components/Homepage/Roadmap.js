const Roadmap = () => {
  return (
    <div style={{ background: '#0b090a' }} className="overflow-hidden relative">
      <section
        id="roadmap"
        className="relative flex min-h-70vh w-full flex-col justify-end p-6 text-white md:m-0 md:justify-start  lg:px-24 xl:px-52"
      >
        <div
          style={{
            zIndex: 1,
            mixBlendMode: 'lighten',
          }}
          className="world-warrior absolute right-0 flex hidden justify-end sm:flex "
        >
          <img
            className="roadmap-img1 m-0 p-0"
            src="/images/roadmap/img1.png"
            alt="bg"
          />
        </div>
        <div className="relative h-auto w-full sm:w-6/12 lg:w-6/12">
          <div style={{ zIndex: 2 }} className="absolute top-0 -ml-16 -mt-6">
            <img src="/images/story/img3.png" />
          </div>
          <div style={{ marginTop: '5vh', zIndex: '3' }} className="relative">
            <h3 className="mb-2 text-2xl font-medium uppercase text-white md:text-4xl">
              The battle plan
            </h3>
            <h3 className="text-3xl font-medium uppercase text-brand_red md:text-5xl">
              warriors road map
            </h3>
          </div>
          <div style={{ zIndex: '3' }} className="relative w-full ">
            <p className="text-md relative pt-3 text-sm text-base font-light tracking-wider text-brand_gray">
              You must understand that there is more than one path to the top of
              the mountain.
            </p>
          </div>
        </div>
        <div
          style={{
            zIndex: 2,
          }}
          className="absolute left-0 right-0 bottom-0 sm:hidden"
        >
          <img
            style={{
              objectFit: 'cover',
              height: '100%',
              width: '100vw',
            }}
            className="roadmap-img2"
            src="/images/roadmap/img1_mobile.jpg"
            alt="bg"
          />
        </div>
      </section>

      <section
        id="roadmap-content"
        className="relative min-h-screen p-6 text-white lg:px-24 xl:px-52 "
      >
        <div className="smoke smoke1 ">
          <img src="/images/roadmap/smoke1.png" />
        </div>
        <div className=" smoke smoke2">
          <img src="/images/roadmap/smoke2.png" />
        </div>
        <div className="smoke3 smoke">
          <img src="/images/roadmap/smoke3.png" />
        </div>

        <div className="card-container relative">
          <div className="card1 card">
            <div className="part1">
              <div className="lamp">
                <img src="/images/roadmap/lamp.png" />
              </div>
              <div className="content">
                <div>
                  <h6>Phase 1</h6>
                  <h5>December 2021</h5>
                </div>
                <p>
                  We understand that an army is stronger than a single warrior
                  so we will be searching far and wide for champions to join our
                  community and help spread the word of the Samurai Saga. We
                  launch our attack at the end of December.
                </p>
              </div>
            </div>
            <div className="part2">01</div>
          </div>
          <div className="card2 card">
            <div className="part1">
              <div className="lamp">
                <img src="/images/roadmap/lamp.png" />
              </div>
              <div className="content">
                <div>
                  <h6>Phase 2</h6>
                  <h5>January 2022</h5>
                </div>
                <p>
                  The spoils from the first battle will be reinvested into the
                  Samurai army so that we can continue to add numbers to our
                  contingent. Seasoned warriors will have a chance to win one of
                  the first one-of-a kind Samurai soldiers.
                </p>
              </div>
            </div>
            <div className="part2">02</div>
          </div>
          <div className="card3 card">
            <div className="part1">
              <div className="lamp">
                <img src="/images/roadmap/lamp.png" />
              </div>
              <div className="content">
                <div>
                  <h6>Phase 3</h6>
                  <h5>February 2022</h5>
                </div>
                <p>
                  We understand that an army is stronger than a single warrior
                  so we will be searching far and wide for champions to join our
                  community and help spread the word of the Samurai Saga. We
                  launch our attack at the end of December.
                </p>
              </div>
            </div>
            <div className="part2">03</div>
          </div>
          <div className="card4 card">
            <div className="part1">
              <div className="lamp">
                <img src="/images/roadmap/lamp.png" />
              </div>
              <div className="content">
                <div>
                  <h6>Phase 4</h6>
                  <h5>March 2022</h5>
                </div>
                <p>
                  See the Samurai in action with the release of our game demo.
                  We will add extra gear, armour, and weapons… and maybe a
                  trusty sidekick or two.
                </p>
              </div>
            </div>
            <div className="part2">04</div>
          </div>
          <div className="card5 card">
            <div className="part1">
              <div className="lamp">
                <img src="/images/roadmap/lamp.png" />
              </div>
              <div className="content">
                <div>
                  <h6>Phase 5</h6>
                  <h5>April 2022</h5>
                </div>
                <p>
                  Put your Samurai to the test. All holders will get a 3D
                  version of their Samurai to be used in the game. And because
                  it’s so much fun to be bad so we will add an army of 9,999
                  enemies.
                </p>
              </div>
            </div>
            <div className="part2">05</div>
          </div>
        </div>
      </section>
    </div>
  )
}


        // <div
        //   style={{
        //     zIndex: 2,
        //     background: '#0b090a',
        //     top: '10%',
        //   }}
        //   className="world-warrior absolute left-0 right-0 bottom-0"
        // >
        //   <img
        //     style={{
        //       objectFit: 'fill',
        //       height: '100%',
        //       width: '150vw',
        //       mixBlendMode: 'screen',
        //     }}
        //     src="/images/roadmap/bg.png"
        //     alt="bg"
        //   />
        // </div>

export default Roadmap
