import React from 'react'
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
const ProductTable = ({id, title, category, description, price, rating}) => {
  return (
      <tr>
      <td><img src={faker.image.business()} className="w-100" /></td>
          <td>{id}</td>
          <td>{title}</td>
          <td>{price}</td>
          <td>{category}</td>
          <td>{rating}</td>
          <td>{description}</td>
          <td className='btn-group' >
              <Link to={`/product-dashboard/products/${id}`} className="btn btn-primary">View</Link>
        <Link to={`/product-dashboard/update-product/${id}`} className="btn btn-warning">Update</Link>
              <button className='btn btn-danger'>Delete</button>
          </td>
    </tr>
  )
}

export default ProductTable
