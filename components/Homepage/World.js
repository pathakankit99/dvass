const Story = () => {
  return (
    <section
      style={{ background: '#0b090a' }}
      id="world"
      className="relative overflow-x-hidden p-6 text-white  lg:h-150vh lg:px-24 xl:px-52"
    >
      <div
        style={{
          zIndex: 1,
        }}
        className="world-warrior absolute top-0 left-0 right-0 bottom-0"
      >
        <img
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100vw',
          }}
          src="/images/world/bg2.png"
          alt="bg"
        />
      </div>
      <div className="world-warrior absolute right-0 flex justify-center lg:justify-end">
        <img src="/images/world/warrior.png" />
      </div>
      <div className="content relative py-6">
        <div
          style={{ zIndex: 2, marginTop: '3vh' }}
          className="absolute top-0 -ml-16"
        >
          <img src="/images/world/swirl.png" />
        </div>
        <div style={{ marginTop: '5vh', zIndex: '3' }} className="relative">
          <h3 className="mb-2 text-2xl font-medium uppercase text-white md:text-4xl">
            The world of
          </h3>
          <h3 className="text-3xl md:text-5xl font-medium uppercase">shŌgun warriors</h3>
        </div>
        <div
          style={{ zIndex: '3' }}
          className="relative w-full text-justify lg:w-8/12"
        >
          <p className="text-md relative pt-3 text-sm text-base font-light tracking-wider text-brand_gray">
            Immerse yourself, step into the dark, chaotic, yet serene city of
            Magome-juku, where our warrior exists. This is a world created by
            the Samurai, we are in a world led strictly by the Shogunate, a
            military dictatorship. You never know anyones true intentions.
            <br />
            <br />
            The warrior class is deeply powerful & wealthy, and they fiercely
            defend their position in the hierarchy. It’s an exclusive spot that
            they are willing to, and plenty have, sacrificed their lives for. It
            is an exclusive & dominant echelon of society.
            <br />
            <br />
            We are deep in the thicks of the Edo period, the warrior class
            rules, and you best ensure not to step out of line. The social order
            is strict & anyone wishing to attempt to break this structure is met
            with the fullest force of the law. In fact, it’s met with the most
            brutal & shocking form of force to ensure that no others are tempted
            to follow.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Story
