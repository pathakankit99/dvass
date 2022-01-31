const Story = () => {
  return (
    <section
      style={{ background: '#0b090a' }}
      id="story"
      className="center relative overflow-x-hidden p-6 text-white  lg:h-screen lg:px-24 xl:px-52 "
    >
      <div
        style={{
          zIndex: 1,
        }}
        className="hero-warrior absolute top-0 left-0 right-0 bottom-0"
      >
        <img
          style={{
            objectFit: 'cover',
            height: '100vh',
            width: '100vw',
          }}
          src="/images/story/img2.png"
          alt="bg"
        />
      </div>
      <div
        className="hero-warrior absolute top-0 left-0 "
        style={{ mixBlendMode: 'lighten' }}
      >
        <img width={800} src="/images/story/smoke.png" />
      </div>
      <div className="center min-h-40vh relative w-full flex-wrap">
        <div className="w-full p-6 md:w-6/12">
          <img width={400} src="/images/story/warrior.png" />
        </div>
        <div className="relative w-full p-6 md:w-6/12">
          <div className="absolute top-0 -ml-16">
            <img src="/images/story/img3.png" />
          </div>
          <div>
            <h3 className="text-2xl font-medium uppercase text-white">
              Story of the
            </h3>
            <h3 className="text-3xl font-medium uppercase text-brand_red">
              shogun warriors
            </h3>
          </div>
          <div>
            <p className="pt-3 text-sm font-light tracking-wider text-brand_gray">
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
