import Link from "next/link"
import styles from '@/styles/product.module.css'

export default function Home(props) {
  return (
    <div className={styles.dvProducts}>
      {
        props.products.map(product => {
          return (
            <div className={styles.dvProduct}>
              <img className={styles.imgProduct} src={product.indexImageUrl} alt={product.name} />
              <p className={styles.pProduct}><span className={styles.spnProduct}>Product ID: </span> {product.id}</p>
              <hr className={styles.hrProduct} />
              <p className={styles.pProduct}><span className={styles.spnProduct}>Product Name: </span> {product.name}</p>
              <p className={styles.pProduct}><span className={styles.spnProduct}>Product Price: </span> {product.price}</p>
              <Link className={styles.linkProduct} href={`/${product.id}`}>More ...</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:9090/products')
  const data = await response.json()
  return {
    props: {
      products: data,
    },
    revalidate: 5000,
  }
}
