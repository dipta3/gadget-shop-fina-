import {
  Button,
  Container,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import GoHome from "./Gohome";

export default function LiveOrderTracking({ orderId, activeStep }) {
  return (
    <Container align="center" sx={{ marginBottom: "30px" }}>
      <GoHome></GoHome>
      <Stack spacing={3}
      sx={{
        
        background:"#e8f5e9",
        width: { marginTop: "15px", xs: "100%", sm: "90%", md: "50%", margin: "auto" },
      }}>
        <Typography component={"h3"}>
          <strong>Order ID: </strong>
          {orderId ? orderId : null}
        </Typography>
        <Typography
          sx={{ fontSize: "30px", color: "gray", fontWeight: 700 }}
          align="center"
        >
          Order Live Tracking
        </Typography>
        <Stepper align="center" activeStep={activeStep ? activeStep : 0}>
          <Step>
            <StepLabel>Processing</StepLabel>
          </Step>
          <Step>
            <StepLabel>On the way</StepLabel>
          </Step>
          <Step>
            <StepLabel>Delivered</StepLabel>
          </Step>
        </Stepper>
      </Stack>
    </Container>
  );
}
