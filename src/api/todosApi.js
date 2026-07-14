import { toast } from "react-toastify";
import api from "./mainApi";

export const getAllPosts = async () => {
  try {
    const res = await api.get("/todos/12");
    console.log("getALLPosts", res);
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error("cannot get");
  }
  s;
};
