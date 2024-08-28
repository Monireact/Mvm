import React from 'react'
import { Link } from 'react-router-dom'
import { Gallery, Item } from 'react-photoswipe-gallery'
import {  newRequestImages } from '../../../../../Data/Miscellaneous/Gallery/Gallery'
import { dynamicImage } from '../../../../../Service'
import { Href } from '../../../../../utils/Constant'

const NewRequestCardImage = () => {
  return (
    <Gallery withCaption>
      {newRequestImages.map((item, index) => (
        <figure key={index} className="col-xl-3 col-sm-6 m-0" itemProp="caption description">
          <Item original={dynamicImage(item)} width="802" height="476">
            {({ ref, open }) => (
              <Link to={Href} onClick={open}>
                <img className="img-thumbnail border rounded" ref={ref} src={dynamicImage(item)} alt="thumbnail" />
              </Link>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>  )
}

export default NewRequestCardImage