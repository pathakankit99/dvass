const Warrior = () => {
  return (
    <section
      style={{ background: '#0b090a' }}
      id="warrior"
          className="relative flex py-60 justify-end overflow-x-hidden 
       p-6 text-white lg:-mt-64 lg:h-150vh lg:px-24 xl:px-52"
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
          src="/images/warrior/bg.png"
          alt="bg"
        />
      </div>
      <div className="content relative mb-16 w-full xl:w-6/12">
        <div style={{ zIndex: 2 }} className="absolute top-0 -ml-16">
          <img src="/images/story/img3.png" />
        </div>
        <div style={{ marginTop: '5vh', zIndex: '3' }} className="relative">
          <h3 className="text-4xl font-medium uppercase text-white">
            The world of
          </h3>
          <h3 className="text-5xl font-medium uppercase text-brand_red">
            shŌgun warriors
          </h3>
        </div>
        <div style={{ zIndex: '3' }} className="relative w-full ">
          <p className="text-md relative pt-3 text-sm text-base font-light tracking-wider text-brand_gray">
            His back is broad & well muscled across the shoulders, his immense
            width & stature is intimidating, yet once covered with his armour,
            these details are dwarfed by the ornate, terrifying detail of his
            Karuta. His hulking size & strength is dwarfed by his Kabuto. It
            sits upon his head with an overwhelming width, making him appear to
            not be human.
            <br />
            <br />
            Truthfully, when he adorns his warrior attire, he no longer feels
            human. He takes on his alter ego, he becomes the terrifying monster
            he is renowned to be. As he slides his Men-yoroi down onto his face,
            he becomes the fierce warrior he always knew he was destined to be.
            The elaborate coloured & engraved eyes on the Men-yoroi casts a
            terrifying glare. The fear it instills in people is partly from the
            terrifying expression & partly from the infamous reputation for
            unmatched brutal savagery in battle that the warrior held.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Warrior