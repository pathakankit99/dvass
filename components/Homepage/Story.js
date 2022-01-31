const Story = () => {
    return (
      <section
        style={{ background: '#0b090a' }}
        className="center relative overflow-x-hidden p-6 text-white  lg:h-screen lg:px-24 xl:px-52 "
      >
        <div
          style={{ zIndex: -1 }}
          className="absolute top-0 left-0 right-0 bottom-0"
        >
          <img
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            src="/images/hero/bg.png"
            alt="bg"
          />
        </div>
      </section>
    )
}
 
export default Story;