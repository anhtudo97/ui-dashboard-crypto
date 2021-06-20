import { Fragment } from 'react';
import Head from 'next/head';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Container from './components/Container';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Dashboard crypto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <Header />
          <Container />
        </div>
      </div>
    </Fragment>
  );
}
