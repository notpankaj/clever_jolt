import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCrateForm from "./EditCrateForm";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getCrates, reset } from "./crateSlice/crateSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/loader/Loader";

const rows = [
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME 2",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    price: 100,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
  {
    crate_name: "SOME NAME",
    category: "category",
    cost_tier: 2,
    age_range: 123,
    crate_contents: "some content",
    crate_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    crate_id: 1024,
    crate_image:
      "https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo",
    crate_preview_video: "",
    crate_tutorial_video: "",
    created_by: "admin",
    date_added: "2021-12-02",
    date_modified: "2021-12-02",
    is_active: true,
    is_single_crate: false,
  },
];

export default function CrateTable() {
  const [checked, setChecked] = React.useState([1]);
  const [editItem, setEditItem] = useState(null);
  const [crateList, setCrateList] = useState([]);
  const dispatch = useDispatch();

  const { crates, status, error } = useSelector((state) => state.crates);

  console.log({ crates, status, error });

  useEffect(() => {
    dispatch(getCrates());
  }, [dispatch]);

  useEffect(() => {
    if (status === "failed") {
      toast(error || "failed to load data!!");
      dispatch(reset());
    }
    if (status === "success") {
      dispatch(reset());
    }
  }, [status]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);

    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  console.log("list", crateList);
  return (
    <div className="list__container">
      {status === "loading" && <Loader />}
      <ToastContainer />
      {editItem && (
        <EditCrateForm editItem={editItem} setEditItem={setEditItem} />
      )}

      <TableContainer component={Paper} style={{ maxHeight: "75vh" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={styles.tableHead}>
            <TableRow>
              <TableCell> ##</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Tier</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">Single</TableCell>
              <TableCell align="right">Content</TableCell>
              <TableCell align="right">Created By</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {crates?.crates &&
              crates?.crates.map((row) => {
                let c = row.row_to_json;

                return (
                  <TableRow
                    style={styles.tableRow}
                    key={c.crate_id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell align="right">
                      <img
                        src={c.crate_image}
                        style={styles.tableImage}
                        alt={c.crate_name}
                      />
                    </TableCell>
                    <TableCell align="right">{c.crate_name}</TableCell>
                    <TableCell align="right">{c.category}</TableCell>
                    <TableCell align="right">{c.age_range}</TableCell>
                    <TableCell align="right">{c.cost_tier}</TableCell>
                    <TableCell align="right">{c.price}</TableCell>
                    <TableCell align="right">
                      {c.is_active ? "True" : "False"}
                    </TableCell>
                    <TableCell align="right">
                      {c.is_single_crate ? "True" : "False"}
                    </TableCell>
                    <TableCell align="right">{c.crate_contents}</TableCell>
                    <TableCell align="right">
                      {c?.created_by?.first_name || "N/A"}
                    </TableCell>
                    <TableCell align="left">
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          setEditItem(c);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon onClick={() => alert(c.crate_id)} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const styles = {
  list: {
    paddingLeft: "40px",
    background: "#dadada",
  },
  listHeading: {
    position: "relative",
    left: "-14.4px",
    fontWeight: 600,
    fontSize: "1.2rem",
  },
  tableImage: {
    width: "30px",
    height: "30px",
    objectFit: "contain",
    borderRadius: "50%",
  },
  tableHead: {
    position: "sticky",
    top: "0",
    background: "#fff",
  },
  whiteBg: {
    background: "url('./solid-whilte.jpg')",
  },
};
