import React from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";

const CreateCategory = () => {

  const [categories, setCategories] = useState([]);

 //get all cat
 const getAllCategory = async () => {
  try {
    const { data } = await axios.get("/api/v1/category/get-category");
    if (data.success) {
      setCategories(data.category);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something wwent wrong in getting catgeory");
  }
};

useEffect(() => {
  getAllCategory();
}, []);


  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Category</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;