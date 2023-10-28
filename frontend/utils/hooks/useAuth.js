import axiosInstance from "../axiosInstance";

function useAuth() {
  const fetchData = async (url, method, data) => {
    try {
      const res = await axiosInstance({
        url,
        method,
        data
      });
      return res.data;
    } catch(err) {
      console.log(err);
      return null;
    }
  };

  const loginUser = async (data) => {
    try {
      const response = await fetchData('/auth/login', 'POST', data);

      if(response && response.token) {
        localStorage.setItem('token', response.token);
      }

      return response;
    } catch(err) {
      console.log(err);
      return null;
    }
  };

  const registerUser = async (data) => {
    try {
      const response = await fetchData('/auth/register', 'POST', data);
      return response;
    } catch(err) {
      console.log(err);
      return null;
    }
  };

  return { loginUser, registerUser };
}

export default useAuth;
