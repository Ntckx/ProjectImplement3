import { Typography } from "@mui/material";
import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = (props) => {
    const {id}= useParams();
    const [post,setPost]=useState();
    
    async function fetchPost() {
        const res = await axios.get(`/getCard/${id}`);
        setPost(res.data);
      }

      useEffect(() => {
        fetchPost();
      }, []);
      return(
        <Box>
            <Typography sx={{fontFamily:"raleway",fontSize:"20px"}}>
                {post?.Destination}
            </Typography>
            <Typography sx={{fontFamily:"raleway",fontSize:"15px"}}>
                {post?.Description}
            </Typography>
        </Box>
      );
};
export default Post;