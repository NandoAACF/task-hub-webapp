import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";

const useAxios = async (url, method, data, isProtected=true) => {
  try {
    const headers = {};
    if(isProtected) {
        const token = Cookies.get('user_auth_token');
        if (token) {
            headers['authorization'] = `Bearer ${token}`;
        }
    }

    const res = await axiosInstance({
      url,
      method,
      data,
      headers
    });

    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default useAxios;