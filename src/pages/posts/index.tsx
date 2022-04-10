import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>First you will need to convert your: var GatePass = mongoose.model( gatePassSchema);.</strong>
            <p>First you will need to convert your schema into a model: var GatePass = mongoose.model( gatePassSchema);.
            </p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>First you will need to convert your: var GatePass = mongoose.model( gatePassSchema);.</strong>
            <p>First you will need to convert your schema into a model: var GatePass = mongoose.model( gatePassSchema);.
            </p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>First you will need to convert your: var GatePass = mongoose.model( gatePassSchema);.</strong>
            <p>First you will need to convert your schema into a model: var GatePass = mongoose.model( gatePassSchema);.
            </p>
          </a>
        </div>
      </main>
    </>


  )
}