import { useState } from "react";
import axios from "axios";

const Formzzfemale = () => {
  const [formdataf, setFormdataf] = useState({ title: '',  price: '', category: '', image: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdataf);

    axios.post('http://localhost:5000/getdataf', { formdataf })
      .then((response) => {
       
        alert("Submitted Successfully")
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setFormdataf({ ...formdataf, title: e.target.value })}
        /><br />
        <label>Price</label>
        <input
          type="number"
          name="price"
          onChange={(e) => setFormdataf({ ...formdataf, price: e.target.value })}
        /><br />
        <label>Category</label>
        <input
          type="text"
          name="category"
          onChange={(e) => setFormdataf({ ...formdataf, category: e.target.value })}
        /><br />
        <label>Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setFormdataf({ ...formdataf, image: e.target.value })}
        /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Formzzfemale;