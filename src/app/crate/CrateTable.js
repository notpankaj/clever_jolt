import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

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

  return (
    <div className="list__container">
      {editItem && (
        <EditCrateForm editItem={editItem} setEditItem={setEditItem} />
      )}
      {/* <List
        style={styles.list}
        dense
        sx={{ maxWidth: 360, bgcolor: "background.paper" }}
      >
        <h4 style={styles.listHeading}>Crates</h4>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  style={{ left: "-300px" }}
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton
                style={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value + 1}`}
                    src={`/static/images/avatar/${value + 1}.jpg`}
                  />
                </ListItemAvatar>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List> */}

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
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">Single</TableCell>
              <TableCell align="right">Content</TableCell>
              <TableCell align="right">Created By</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                style={styles.tableRow}
                key={row.crate_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <input type="checkbox" />
                </TableCell>
                <TableCell align="right">
                  <img src={row.crate_image} style={styles.tableImage} />
                </TableCell>
                <TableCell align="right">{row.crate_name}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.age_range}</TableCell>
                <TableCell align="right">{row.cost_tier}</TableCell>
                <TableCell align="right">
                  {row.is_active ? "True" : "False"}
                </TableCell>
                <TableCell align="right">
                  {row.is_single_crate ? "True" : "False"}
                </TableCell>
                <TableCell align="right">{row.crate_contents}</TableCell>
                <TableCell align="right">{row.created_by}</TableCell>
                <TableCell align="left">
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      setEditItem(row);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {/* {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))} */}
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
