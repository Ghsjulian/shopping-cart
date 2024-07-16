import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import ghs from "../assets/products/tshirt_1.png";
import axios from "axios";

const AddProduct = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        image: ""
    });
    const [selectedImage, setSelectedImage] = useState(null);

    const handleChange = event => {
        const { value, name } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = event => {
        setSelectedImage(event.target.files[0]);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", formData.name);
        formData.append("gender", formData.gender);
        formData.append("product_img", selectedImage);

        try {
            const response = await axios.post(
                apiUrl + "/admin/add-product",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                />
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default AddProduct;

/*
// Server Side...

const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    return cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { name, gender } = req.body;
    const image = req.file.filename;
    // Save the data to the database
    res.status(201).json({ message: 'Data uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
*/
