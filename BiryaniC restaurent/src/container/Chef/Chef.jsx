import React from 'react';

import { SubHeading }  from '../../components';
import{images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>We believe that every dish tells a story — of passion, authenticity, and the joy of sharing. .</p>'
        </div>
        <p className='p__opensans'>Our mission is to bring the taste of comfort, the thrill of discovery, and the warmth of great hospitality to your table, wherever you are. Because good food isn't just a meal — it's a moment worth savoring. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Rahim Ansari </p>
        <p className='p__opensans'>Nawabi Biryani Specialist</p>
      </div>
    </div>
  </div>
);

export default Chef;
