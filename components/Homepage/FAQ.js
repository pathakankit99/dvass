import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import react,{useState} from 'react'
import DownArrow from "../Icons/DownArrow"
const FAQ = () => {
    const [expanded, setExpanded] = useState(false)

     const handleChange = (panel) => (event, isExpanded) => {
       setExpanded(isExpanded ? panel : false)
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
          <h3 className="mb-2 font-medium uppercase text-white md:text-2xl md:text-4xl">
            Frequently asked questions
          </h3>
          <h3 className="text-2xl font-medium uppercase text-brand_red md:text-3xl md:text-5xl">
            Looking for answers?
          </h3>
        </div>
      </div>
      <div className="accordion-container flex w-full flex-wrap pt-6">
        <div className="w-full md:w-6/12">
          <div className="lg:pr-3">
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
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
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
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
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
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
              expanded={expanded === 'panel6'}
              onChange={handleChange('panel6')}
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
