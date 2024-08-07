import React from 'react';

import {images} from '../../constants'
import { SubHeading } from '../../components'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext_cormorant'>What We Belive In </h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid in accusamus itaque. Vitae delectus dolores praesentium neque sapiente excepturi debitis. Dignissimos maiores animi reiciendis beatae
             sunt excepturi doloremque veritatis libero. </p>
        </div>
        <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minima odio exercitationem dolores, debitis asperiores officia impedit aperiam qui quidem architecto voluptates veniam
           ut, repudiandae sed! Laudantium velit nihil nulla? </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />

      </div>
    </div>
  </div>
);

export default Chef;
