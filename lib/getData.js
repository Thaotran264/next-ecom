import axios from "axios";

export const getDatas = async () => {
  try {
    const res = await axios.get(
      "https://pro.tastee.vn/api/Home/get_product_slider"
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBrandIds = async () => {
  const posts = await getDatas();
  // return
  return posts.map((post) => ({
    params: {
      id: `${post.brandId}`,
    },
  }));
};

export const getBrandById = async (id) => {
  try {
    const res = await axios.get(`https://pro.tastee.vn/Merchant/${id}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async () => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
