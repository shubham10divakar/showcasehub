import React from 'react';
import { Link } from 'react-router-dom';

function ispropsYearPresent(year, from){
  if(typeof year===undefined){
    console.log(false + ' ' + from)  
    return false;
  }

  console.log(true + ' ' + from)
  return true;
}

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            {Boolean(props.year)? (<h6 className='cards__item__text'>Development Year - {props.year}</h6>):('')}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
