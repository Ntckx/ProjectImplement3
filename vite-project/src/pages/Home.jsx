import { useEffect, useState } from "react";
import Banner from "../components/Banner.jsx";
import Navbar from "../components/Navbar.jsx";
import { Box, Typography, Fab, Modal, Grid } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import axios from "../axios/index.js";
import CreatePlan from "../modal/CreatePlan.jsx";
import Card from "../components/Card";
import "../styles/Home.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [titles, setTitles] = useState([]);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState();
  const navigate = useNavigate();

  async function fetchPosts() {
    const res = await axios.get("/getCard");
    setPosts(res.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  const handleModalOpen = () => {
    setIsModalOpen(true);
    console.log("isModalOpen:", isModalOpen);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    fetchPosts();
  };

  const handleCardSubmit = () => {
    setIsAdded(true);
  };
  return (
    <Box>
      <Banner />
      <Navbar />

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {isAdded && <CreatePlan />}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Modal open={isModalOpen} onClose={handleModalClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "2rem",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
              height: "500px",
              width: "800px",
            }}
          >
            <CreatePlan
              titles={titles}
              setTitles={setTitles}
              onCloseModal={handleModalClose}
              onSubmit={handleCardSubmit}
            />
          </Box>
        </Modal>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          width={"80%"}
          alignSelf={"center"}
        >
          {posts.map((item, index) => {
            return (
              <Card
                key={index}
                Destination={item.Destination}
                Description={item.Description}
                onClick={() => {
                  navigate(`/cards/${item.id}`);
                }}
              />
            );
          })}
        </Grid>
      </Box>
      <Fab
        color="primary"
        onClick={handleModalOpen}
        sx={{
          position: "fixed",
          bottom: { xs: "60px", lg: "16px" },
          right: { xs: "30px", lg: "16px" },
        }}
      >
        <AddCircleOutlineIcon sx={{ fontSize: {lg:60,md:60,sm:30,xs:30}, color: "white" }} />
      </Fab>
    </Box>
  );
}

export default Home;
