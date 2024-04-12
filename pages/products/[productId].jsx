import React from 'react'
import styles from '@/styles/product.module.css'
import Link from 'next/link'

const productDetails = (props) => {
  return (
    <div className={styles.dvProduct}>
        <img className={styles.imgProduct} src={props.product.indexImageUrl} alt={props.product.name} />
        <p className={styles.pProduct}><span className={styles.spnProduct}>Product ID: </span> {props.id}</p>
        <hr className={styles.hrProduct} />
        <p className={styles.pProduct}><span className={styles.spnProduct}>Product Name: </span> {props.product.name}</p>
        <p className={styles.pProduct}><span className={styles.spnProduct}>Product Price: </span> {props.product.price}</p>
        <Link className={styles.linkProduct} href={`/${props.id}`}>More ...</Link>
    </div>
  )
}

export default productDetails

export async function getServerSideProps(context) {
    const response = await fetch(`http://localhost:9090/products/${context.params.productId}`)
    const data = await response.json()
    return {
        props: {
            product: data
        }
    }
}