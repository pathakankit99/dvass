const Story = () => {
  return (
    <section
      style={{ background: '#0b090a' }}
      id="story"
      className="center relative overflow-x-hidden p-6 text-white lg:overflow-hidden  lg:px-24 xl:h-screen xl:px-52 "
    >
      <div
        id="about"
        style={{
          zIndex: 1,
        }}
        className="story-warrior absolute top-0 left-0 right-0 bottom-0"
      >
        <img
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100vw',
          }}
          src="/images/story/img2.png"
          alt="bg"
        />
      </div>
      <div
        className="hero-warrior absolute bottom-0 left-0 ml-20 lg:top-0 lg:ml-0"
        style={{ mixBlendMode: 'lighten' }}
      >
        <img width={800} src="/images/story/smoke.png" />
      </div>
      <div className="center min-h-40vh relative w-full flex-wrap">
        <div className="warrior center order-2 mt-16 w-full lg:order-1 lg:mt-0 lg:w-6/12">
          <img src="/images/story/warrior.png" />
        </div>
        <div className="relative order-1 mt-6 w-full lg:order-2 lg:mt-0 lg:w-6/12">
          <div style={{ zIndex: 2 }} className="absolute top-0 -ml-16">
            <img src="/images/story/img3.png" />
          </div>
          <div style={{ zIndex: 2, marginTop: '5vh' }} className="relative">
            <h3
              className="brand-title-small mb-2 text-2xl 
             uppercase text-white md:text-4xl"
            >
              the story of
            </h3>
            <h3
              className="brand-title-big text-3xl  
            uppercase text-brand_red md:text-5xl"
            >
              shŌgun warriors
            </h3>
          </div>
          <div>
            <p className="text-md pt-3 text-sm text-base  tracking-wider text-brand_gray">
              Immerse yourself, step into the dark, chaotic, yet serene city of
              Magome-juku, where our warrior exists. This is a world created by
              the Samurai, we are in a world led strictly by the Shogunate, a
              military dictatorship. You never know anyones true intentions.{' '}
              <br />
              <br />
              We are deep in the thicks of the Edo period, the warrior class
              rules, and you best ensure not to step out of line. The social
              order is strict & anyone wishing to attempt to break this
              structure is met with the fullest force of the law. In fact, it’s
              met with the most brutal & shocking form of force to ensure that
              no others are tempted to follow.
              <br />
              <br />
              The warrior class is deeply powerful & wealthy, and they fiercely
              defended their position in the hierarchy. It’s an exclusive spot
              that they are willing to, and plenty have, sacrificed their lives
              for. It is an exclusive & dominant echelon of society.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
