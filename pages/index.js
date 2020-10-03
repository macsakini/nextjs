import Head from 'next/head'
import Link from 'next/link'
import Table from '../../trial/components/table'
import Layout from '../../trial/components/layout'
import Header from '../../trial/components/header'
import Main from '../../trial/components/main'
import Sidebar from '../../trial/components/sidebar'
import Footer from '../../trial/components/footer'
import { getData } from '../../trial/lib/data'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'




export default function Home({ data }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return(
    <Layout home>
        <Head>
          <title>Payments Management</title>
        </Head>
        <Header>
        </Header>
        <Main>
        <Sidebar></Sidebar>
        <Table children>
        {data.map(({id,status,amount_settled,customer,meta,amount,app_fee,created_at})=>(
        <tr>
          <td>{id}</td>
          <td>{status}</td>
          <td>{customer["phone_number"]}</td>
          <td>{meta["mpesa_receipt_number"]}</td>
          <td>{customer["name"]}</td>
          <td>{amount}</td>
          <td>{amount_settled}</td>
          <td>{app_fee}</td>
          <td>{created_at}</td>
          <td><Link  href={{
              pathname: '/single-pay/',
              query: { id: 12 },
            }}>Edit</Link></td>
        </tr>
        ))}
        </Table>
        </Main>
        <Footer></Footer>
    </Layout> 
  )
}

export async function getServerSideProps(context) {
  const data = getData();

  return{
      props:{
          data
      }
  }
}

