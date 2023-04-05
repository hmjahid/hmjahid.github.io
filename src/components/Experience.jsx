import "./Experience.css"
import Company from './Company';
import propTypes from 'prop-types'

const Experience = (props) => {
  return (
    <div className='Experience'>
        <h2 className="ExperienceHeading">Experiences</h2>

        <section className="ExperienceSection">
        <div className='ExperienceDetails'>
        <h3 className='title'>{props.position2}</h3>
        <Company company={props.company}/>
        <h4>* April 2016 - April 2022 *</h4>
        <p> I worked as “GOODWAY GCL2BL 2axis CNC Lathe” operator, machinist and programmer. I also worked as 3 axis CNC Milling CINCINNATI, AKIRA-SEIKI operator and machinist.
          I was in charge of a small team of 5-6 people. I learned a lot from that company. I have gained huge experience on industrial culture, how chain of discipline are operated, leadership, team work and mutual co-operation. I worked as “GOODWAY GCL2BL 2axis CNC Lathe” operator, machinist and programmer.I also worked as 3 axis CNC Milling CINCINNATI, AKIRA-SEIKI operator and machinist. I was in charge of a small team of 5-6 people. I learned a lot from that company. I have gained huge experience on industrial culture, how chain of discipline are operated, leadership, team work and mutual co-operation.</p>
        <strong>Skills: CNC Machine · Quality Assurance · Machining · Team Leadership · Lathe · Computer Numerical Control CNC · CNC Manufacturing · CNC Mill · CNC Operation</strong>
        </div>

        <br/>
        
        <div className='ExperienceDetails'>
        <h3 className='title'>{props.position1}</h3>
        <Company company={props.company}/>
        <h4>* March 2016 - April 2016 *</h4>
        <p>Assisted HR manager in preparing payroll and sales department to entry data in database. I also worked in QC department as a QC Inspector.</p>
        <strong>Skills: Microsoft Word · Microsoft Excel · Data Entry · Computer Literacy · Assistants · Quality Control</strong>
        </div>
        </section>
    </div>
  );
}

Experience.propTypes = {
  position1: propTypes.string,
  position2: propTypes.string,
  company: propTypes.string
}

Experience.defaultProps = {
  position1: "Position1",
  position2: "Position2",
  company: "Company Name"
}

export default Experience;