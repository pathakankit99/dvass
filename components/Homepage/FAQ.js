const FAQ = () => {
    return (
      <section
        style={{ background: '#0b090a' }}
        id="team"
        className="relative p-6 py-16  text-white lg:px-24 xl:px-52"
      >
        <div
          style={{
            zIndex: 1,
          }}
          className="world-warrior absolute top-0 left-0 right-0 bottom-0 hidden md:block"
        >
          <img
            style={{
              objectFit: 'cover',
              height: '100%',
              width: '100vw',
            }}
            src="/images/team/bg.png"
            alt="bg"
          />
        </div>
      </section>
    )
}
 
export default FAQ;