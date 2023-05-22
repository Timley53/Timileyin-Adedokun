import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import {BiCodeAlt} from 'react-icons/bi'



function Timeline(){
    
    return (


<div className="w-full flex items-center justify-center p-8">




  <VerticalTimelineElement
    className="vertical-timeline-element--work w-[500px] mx-auto"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Dec - 2022 ~ Jan - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BiCodeAlt/>}
    layout={'1-column-left'}
    position={'left'}
    
  >
    <h3 className="vertical-timeline-element-title  text-lg font-bold" >Frontend Web-Development Intern</h3>

    <h4 className="vertical-timeline-element-subtitle mt-1" style={{ marginTop: '.3rem'}}>Oasis Infobytye</h4>
    <p>
      Creating User-Friendly Web Applications 
    </p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Dec - 2022 ~ Jan - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BiCodeAlt/>}
    layout={'1-column-left'}
    position={'left'}
    
  >
    <h3 className="vertical-timeline-element-title  text-lg font-bold" >Frontend Web-Development Intern</h3>

    <h4 className="vertical-timeline-element-subtitle mt-1" style={{ marginTop: '.3rem'}}>Oasis Infobytye</h4>
    <p>
      Creating User-Friendly Web Applications 
    </p>
  </VerticalTimelineElement> */}


</div>
)}
export default Timeline