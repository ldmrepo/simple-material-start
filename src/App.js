import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import ConversationList from "./ConversationList";

class App extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ height: "100vh" }}>
            <ConversationList />
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}
export default App;
