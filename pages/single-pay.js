import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../trial/components/layout'
import Header from '../../trial/components/header'
import Main from '../../trial/components/main'
import Sidebar from '../../trial/components/sidebar'
import Footer from '../../trial/components/footer'
import SinglePay from '../../trial/components/singlepay'
import { getSingleData } from '../../trial/lib/data'
import styles from '../styles/header.module.css'
import { withRouter } from 'next/router'
import { MdArrowBack } from "react-icons/md";

export async function getServerSideProps({router}){
  const data = getSingleData();

  return {
      props : {
          data
      }
  }
}
function Transaction({ data ,router}) {
    return(
      <Layout home>
          <Head>
            <title>Payments Management</title>
          </Head>
          <Header>
          </Header>
          <Main>
          <Sidebar></Sidebar>
          {data.map(({id,status,amount_settled,customer,meta,amount,app_fee,created_at})=>
          <SinglePay>
              <div>
              <MdArrowBack/><Link href="/">Back</Link>
              </div>
              <div className={styles.singlepay}>
                  <span>
                      <h4>Transaction ID</h4>
                      <p>{meta["mpesa_receipt_number"]}</p>
                  </span>
                  <span>
                    <h4>Transaction Status</h4>
                    <p>{status}</p>
                  </span>
              </div>
              <div className={styles.singlepay}>
                  <span>
                      <h4>Name of Customer</h4>
                        <p>{customer["name"]}</p>
                  </span>
                  <span>
                    <h4>Phone number</h4>
                    <p>{customer["phone_number"]}</p>
                  </span>
              </div>
              <div className={styles.singlepay}>
                  <span>
                      <h4>Amount Paid</h4>
                        <p>KES {amount}</p>
                  </span>
                  <span>
                    <h4>Transaction Cost</h4>
                    <p>KES {app_fee}</p>
                  </span>
              </div>
              <div className={styles.singlepay}>
                  <span>
                      <h4>Due Date of Settlement</h4>
                      <p>{created_at}</p>
                  </span>
                  <span>
                    <h4>Due Amount</h4>
                    <p>KES {amount_settled}</p>
                  </span>
              </div>
              <div className={styles.singlepay}>
                  <span>
                      <h4>Purpose of Payment</h4>
                      <p>elizabeth tithe</p>
                  </span>
                  <span>
                    <h4>Date of Payment</h4>
                    <p>{created_at}</p>
                  </span>
              </div>
          </SinglePay>
          )}
          </Main>
          <Footer></Footer>
      </Layout> 
    )
  }

export default withRouter (Transaction)

