import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(response)

  return {
    props: {}
  }
}