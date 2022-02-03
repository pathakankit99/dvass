import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import react,{useState} from 'react'
import DownArrow from "../Icons/DownArrow"
const FAQ = () => {
    const [expanded, setExpanded] = useState(false)
    const [expanded2, setExpanded2] = useState("panel1")

     const handleChange = (panel) => (event, isExpanded) => {
       setExpanded(isExpanded ? panel : false)
    }
    const handleChange2 = (panel) => (event, isExpanded2) => {
      setExpanded2(isExpanded2 ? panel : false)
    }
  return (
    <section
      style={{ background: '#0b090a' }}
      id="faq"
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
          src="/images/faq/bg.png"
          alt="bg"
        />
      </div>
      <div className="relative text-center">
        <div
          style={{ zIndex: 2, marginTop: '-3%' }}
          className="center absolute top-0 left-0 right-0"
        >
          <img src="/images/story/img3.png" />
        </div>
        <div style={{ zIndex: 2 }} className="relative">
          <h3 className="mb-2 md:text-2xl font-medium uppercase text-white md:text-4xl">
            Frequently asked questions
          </h3>
          <h3 className="text-2xl md:text-3xl font-medium uppercase text-brand_red md:text-5xl">
            Looking for answers?
          </h3>
        </div>
      </div>
      <div className="accordion-container flex flex-wrap w-full pt-6">
        <div className="w-full md:w-6/12">
          <div className="lg:pr-3">
            <Accordion
              expanded={expanded2 === 'panel1'}
              onChange={handleChange2('panel1')}
            >
              <AccordionSummary
                expandIcon={
                  <div className="arrows center">
                    <DownArrow />
                  </div>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>how can i get a shogun warrior?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded2 === 'panel2'}
              onChange={handleChange2('panel2')}
            >
              <AccordionSummary
                expandIcon={
                  <div className="arrows center">
                    <DownArrow />
                  </div>
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>how to buy a shogun warrior?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded2 === 'panel3'}
              onChange={handleChange2('panel3')}
            >
              <AccordionSummary
                expandIcon={
                  <div className="arrows center">
                    <DownArrow />
                  </div>
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>will these be the only colonists made?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <div className="lg:pl-3">
            <Accordion
              className="accordion-card"
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                className="accordion-card-title"
                expandIcon={
                  <div className="arrows center">
                    <DownArrow />
                  </div>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>how to creae a shogun warriors?</Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-card-details">
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                expandIcon={
                  <div className="arrows center">
                    <DownArrow />
                  </div>
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>how to sell a shogun warrior?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                expandIcon={
                  <div className="arrows center">
                    <DownArrow />
                  </div>
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>do you have a rarity system?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
