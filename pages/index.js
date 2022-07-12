import Head from "next/head";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Banner from "../components/Banner";
import { getDatas } from "../lib/getData";
import Link from "next/link";

export default function Home({ datas }) {
  return (
    <>
      <Head>
        <title>Tastee.vn</title>
      </Head>
      <Banner />
      <div className='container py-5 border-dark'>
        <div>
          <h3 className='text-center text-warning pb-1 border-bottom border-warning'>
            Mới nhất trên Tastee
          </h3>
          <div className='list-product mb-3'>
            {datas?.map((data, index) => (
              <Link href={`${data.brandId}`} key={index}>
                <a className='text-dark text-decoration-none text-start'>
                  <Card>
                    <Card.Img variant='top' src={data.image} />
                    <Card.Body>
                      <Card.Title className='card-title'>
                        {data.brandName}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const datas = await getDatas();

  return {
    props: {
      datas,
    },
  };
};
