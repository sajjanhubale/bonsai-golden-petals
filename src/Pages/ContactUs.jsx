import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "../css/Comp.css";
import contactImage from "../images/contact.png";

export const ContactUs = () => {
  const form = useRef();
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMobile, setContactMobile] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Grid container className="contactContainer">
      <Grid item xs={6}>
        <img src={contactImage} className="contactImage" />
      </Grid>
      <Grid
        item
        xs={6}
        alignSelf="center"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "1px",
          padding: "2rem !important",
          flexBasis: "auto",
          flex: "0 0 50%",
        }}
      >
        <Box
          component="form"
          bvcx
          sx={{
            "& .MuiTextField-root": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
          className="contactUsFormContainer"
          onSubmit={sendEmail}
        >
          <div>
            <TextField
              required
              id="contactName"
              label="Name"
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
            />
            <TextField
              required
              id="contactEmail"
              label="Email"
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
            />
          </div>
          <div>
            <TextField
              required
              id="contactMobile"
              label="Mobile number"
              value={contactMobile}
              onChange={(event) => setContactMobile(event.target.value)}
            />
            <TextField
              multiline
              required
              id="contactMessage"
              label="Message"
              value={contactMessage}
              onChange={(event) => setContactMessage(event.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              type="submit"
              style={{ width: "450px", backgroundColor: "black" }}
            >
              Send
            </Button>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};
