import { Box, Button, Typography } from "@mui/material";
import Banner from "../components/Banner";
import axios from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import EditCard from "../components/EditCard";
function TripContent(){
    const {id} = useParams()
        const [post,setPost] = useState({});
        const navigate = useNavigate();
        const [isOpen, setIsOpen] = useState(false);

        async function fetchPost() {
            const res = await axios.get(`/getCard/${id}`);
            setPost(res.data);
          }

          async function DelPost() {
            await axios.delete(`/deletePost/${id}`).then((response) => {
              if (response.data.success) {
                navigate('/Cards');
              } else {
                alert('delete post error')
              }
            });
          }

          function EditPost() {
            setIsOpen(true);
          }

          useEffect(() => {
            fetchPost();
          }, []);

          return(
            <Box>
                <Banner/>
                <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
  <Typography variant="h1" sx={{fontSize:{xs:"30px",lg:"50px"},pt:{lg:3}}}>
          {post?.Destination}
        </Typography>
        <Box
          sx={{
            display: "flex",
            height: {xs:300,lg:500},
            width: {xs:350,lg:1000},
            background:"linear-gradient(to right, rgba(252,92,99,1), rgba(252,92,99,0.7))",borderRadius:"50px",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "raleway",
            m: 3,
            flexDirection: "column",
            
          }}
        >
          <Typography sx={{textAlign:"center",fontSize:{xs:"15px",sm:"15px",md:"20px",lg:"25px"},width:"80%",color:"white"}}>
            {post?.Description}
          </Typography>
          
        </Box >
        <Box sx={{display:"flex",justifyContent:"center",alignContent:"center",pl:3,pb:2}}>
          <Button onClick={EditPost} sx={{fontSize:{xs:"15px",sm:"15px",md:"15px",lg:"20px"},color:"Black",pr:5}}>Edit</Button>
        <Button onClick={DelPost} sx={{fontSize:{xs:"15px",sm:"15px",md:"15px",lg:"20px"},color:"Black"}} >Delete</Button>
        </Box>

        </Box>
        {isOpen && (
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <EditCard
            onCloseModal={() => setIsOpen(false)}
            setPost={setPost}
          ></EditCard>
        </Box>
      )}
            </Box>
          )
}
export default TripContent;