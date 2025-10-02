import React from 'react'
import { Element } from 'react-scroll'

const Faq = () => {
  const secondaryColor = "#1e1e1e" // dark gray background
  const textColor = "#f2f2f2" // light text

  return (
    <Element name="Faq">
      <div className='py-5' style={{ zIndex:20,position:"relative", color: textColor }}>
        
        <h1 className="text-center display-4 proHeading" style={{ fontFamily: "Spooktackler", color: "#fff" }}>
          FREQUENTLY ASKED QUESTIONS
        </h1>

        <div className="container py-4">
          <div className="accordion" id="accordionExample">
            
            {/* Item 1 */}
            <div className="accordion-item my-3" style={{ backgroundColor: secondaryColor, border: "1px solid #333" }}>
              <h2 className="accordion-header">
                <button
                  style={{ backgroundColor: secondaryColor, color: textColor }}
                  className="accordion-button fw-bold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What Does Real Estate Marketing Operate?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{ color: textColor }}>
                  <strong>This is the first item’s accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="accordion-item my-3" style={{ backgroundColor: secondaryColor, border: "1px solid #333" }}>
              <h2 className="accordion-header">
                <button
                  style={{ backgroundColor: secondaryColor, color: textColor }}
                  className="accordion-button fw-bold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How Long is the process for Real Estate Marketing?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{ color: textColor }}>
                  <strong>This is the second item’s accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="accordion-item my-3" style={{ backgroundColor: secondaryColor, border: "1px solid #333" }}>
              <h2 className="accordion-header">
                <button
                  style={{ backgroundColor: secondaryColor, color: textColor }}
                  className="accordion-button fw-bold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing.
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{ color: textColor }}>
                  <strong>This is the third item’s accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="accordion-item my-3" style={{ backgroundColor: secondaryColor, border: "1px solid #333" }}>
              <h2 className="accordion-header">
                <button
                  style={{ backgroundColor: secondaryColor, color: textColor }}
                  className="accordion-button fw-bold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Is this the best marketing agency?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{ color: textColor }}>
                  <strong>This is the fourth item’s accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Element>
  )
}

export default Faq
