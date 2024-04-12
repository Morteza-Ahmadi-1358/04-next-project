import React from 'react'
import styles from '@/styles/product.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const singleProduct = (props) => {
    const router = useRouter()
    if (router.isFallback) {
        return <h1 className={styles.h1Product}>Loading ...</h1>
    }
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

export default singleProduct

export async function getStaticPaths() {
    return {
        paths: [
            {params: {productId: '100'}},
            {params: {productId: '101'}},
            {params: {productId: '102'}},
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const response = await fetch(`http://localhost:9090/products/${context.params.productId}`)
    const data = await response.json()
    return {
        props: {
            id: context.params.productId,
            product: data
        }
    }
}