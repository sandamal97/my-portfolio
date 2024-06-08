import React, { useState } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Box, Grid, Button, Paper, IconButton, Avatar } from "@mui/material";
import {
  AddCircle,
  Search,
  History,
  Description,
  Balance,
  PieChart,
  LightMode,
  DarkMode,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Person2Rounded,
  AssignmentLateRounded,
  AssignmentIndRounded,
  CodeRounded,
  School,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ComplaintForm from "./ComplaintForm";
import Education from "./Education";
import abc from "../js/abc.jpg";
import Home from "./Home";

const Dashboard = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  const handleUpdateStatus = () => {
    navigate(`/dashboard/fetchcomplains/complaint/:id`);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#303030" : "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        {/* Sidebar */}
        <Grid item xs={12} md={2.5}>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "105vh",
              backgroundColor: darkMode ? "#303030" : "#f0f0f0",
              borderRight: "1px solid #ccc",
              borderRadius: 0, // Remove border radius
            }}
          >
            <Box
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box sx={{ textAlign: "center", mb: 2, mt: 2 }}>
                <Avatar
                  alt="User Image"
                  src={abc} // Replace with your image path
                  sx={{
                    width: 100,
                    height: 100,
                    margin: "0 auto",
                    mb: 3,
                    border: "2px solid #ccc",
                  }}
                />
                <Box>
                  <IconButton
                    href="https://facebook.com"
                    target="_blank"
                    color="inherit"
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton
                    href="https://twitter.com"
                    target="_blank"
                    color="inherit"
                  >
                    <Twitter />
                  </IconButton>
                  <IconButton
                    href="https://linkedin.com"
                    target="_blank"
                    color="inherit"
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    href="https://instagram.com"
                    target="_blank"
                    color="inherit"
                  >
                    <Instagram />
                  </IconButton>
                </Box>
              </Box>
              <nav>
                <NavLink className="nav-link" to="home">
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Person2Rounded />}
                    sx={{
                      mt: -2,
                      borderRadius: 0,
                      borderBottom: "1px solid #ccc",
                      borderLeft: "none",
                      borderRight: "none",
                      borderTop: "none",
                      color: darkMode ? "white" : "black",
                      textAlign: "left",
                    }}
                  >
                    About Me
                  </Button>
                </NavLink>
                <NavLink className="nav-link" to="blog">
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<AssignmentIndRounded />}
                    sx={{
                      mt: 4,
                      borderRadius: 0,
                      borderBottom: "1px solid #ccc",
                      borderLeft: "none",
                      borderRight: "none",
                      borderTop: "none",
                      color: darkMode ? "white" : "black",
                      textAlign: "left",
                    }}
                  >
                    Blog
                  </Button>
                </NavLink>
                <NavLink className="nav-link" to="projects">
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<CodeRounded />}
                    sx={{
                      mt: 4,
                      borderRadius: 0,
                      borderBottom: "1px solid #ccc",
                      borderLeft: "none",
                      borderRight: "none",
                      borderTop: "none",
                      color: darkMode ? "white" : "black",
                      textAlign: "left",
                    }}
                  >
                    Projects
                  </Button>
                </NavLink>
                <NavLink className="nav-link" to="education">
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<School />}
                    sx={{
                      mt: 4,
                      borderRadius: 0,
                      borderBottom: "1px solid #ccc",
                      borderLeft: "none",
                      borderRight: "none",
                      borderTop: "none",
                      color: darkMode ? "white" : "black",
                      textAlign: "left",
                    }}
                  >
                    Education
                  </Button>
                </NavLink>
                <NavLink className="nav-link" to="what-i-do">
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<CodeRounded />}
                    sx={{
                      mt: 4,
                      borderRadius: 0,
                      borderBottom: "1px solid #ccc",
                      borderLeft: "none",
                      borderRight: "none",
                      borderTop: "none",
                      color: darkMode ? "white" : "black",
                      textAlign: "left",
                    }}
                  >
                    What I Do
                  </Button>
                </NavLink>
              </nav>
              <Box sx={{ textAlign: "center" }}>
                Change Theme
                <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
                  {darkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Main content */}
        <Grid item xs={12} md={9.5}>
          <Paper
            elevation={3}
            sx={{
              height: "105vh",
              padding: 2,
              backgroundColor: darkMode ? "#303030" : "#f0f0f0",
              overflow: "auto",
              borderRadius: 0, // Remove border radius
            }}
          >
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="education" element={<Education />} />
              <Route path="blog" element={<div>Blog Content</div>} />
              <Route path="projects" element={<div>Projects Content</div>} />
              <Route path="what-i-do" element={<div>What I Do Content</div>} />
            </Routes>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Dashboard;
