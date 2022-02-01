const Roadmap = () => {
  return (
    <>
      <section
        style={{ background: '#0b090a' }}
        id="roadmap"
        className="min-h-screen w-full p-6 text-white  lg:px-24 xl:px-52"
      >
        <div
          style={{
            zIndex: 1,
            marginTop: -175,
            mixBlendMode: 'lighten',
          }}
          className="world-warrior  absolute right-0 flex justify-end lg:pr-16"
        >
          <img className=" m-0 p-0" src="/images/roadmap/img1.png" alt="bg" />
        </div>
        <div className="relative mt-32 h-auto w-full lg:mt-0 lg:w-6/12">
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
      </section>

      <section
        id="roadmap-content"
        style={{
          background: '#0b090a',
          marginTop: '-50vh',
          zIndex: 5,
          mixBlendMode: 'lighten',
        }}
        className=" min-h-screen p-6 text-white  lg:h-150vh lg:px-24 xl:px-52  "
      ></section>
    </>
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
