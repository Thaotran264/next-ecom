import parse from "html-react-parser";
import Head from "next/head";
import { useContext } from "react";
import InforComponent from "../components/InforComponent";
import TabsMenu from "../components/TabsMenu";
import { getBrandById, getBrandIds } from "../lib/getData";
import { DataContext } from "../store/globalState";

const DetailPage = ({ post }) => {
  return (
    <div className='container'>
      <Head>
        <title>Detail Page</title>
      </Head>

      {post.banner && (
        <div
          className='mb-3 w-100'
          style={{
            borderRadius: 10,
            backgroundImage: `url(${post.banner})`,
            height: "600px",
            backgroundPosition: "center center",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      )}
      <div className='d-flex flex-column'>
        <InforComponent info={post.info} />
      </div>

      <div
        className='d-flex justify-content-center mb-2'
        style={{ width: "960px", height: "100%" }}
      >
        {parse(post.info.webMap)}
      </div>
      <TabsMenu widgets={post.widgets} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getBrandIds();
  return {
    paths: paths,
    fallback: false, // bat ki path nao khong return boi paths thi sang trang 404
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getBrandById(params.id);
  return {
    props: {
      post,
    },
  };
};

// export const getServerSideProps = async () => {
//   const info = await getDataById(id);
//   return {
//     props: {
//       info,
//     },
//   };
// };
export default DetailPage;
