import React from 'react';
import style from './styles/dashboard.module.css'

const Dashboard = ({state}) => {
   const iframe =
     '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14017.960361251766!2d77.343446!3d28.55504255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1617819014824!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'; 

   function Iframe(props) {
     return (
       <div
         className={style.map}
         dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
       />
     );
   }

    return (
      <>
        <div >
          <Iframe iframe={iframe} />
        </div>
        <div className={style.form}>
          <label>Total rooftop area(in sq metre):</label>
          <input type='number' />
          <label>% of rooftop area available:</label>
          <input type='number' />
        </div>
      </>
    );
}
 
export default Dashboard;