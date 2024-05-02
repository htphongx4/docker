'use client';

import ConfirmForm from '@/components/vaccine-registration/ConfirmForm';
import FormInfo from '@/components/vaccine-registration/FormInfo';
import RegistrationResult from '@/components/vaccine-registration/RegistrationResult';
import { Box, Button, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';

const steps = ['Thông tin cá nhân', 'Phiếu đồng ý tiêm', 'Hoàn thành'];

enum Steps {
  PERSONAL_INFO,
  CONFIRM_FORM,
  COMPLETION
}
export default function Home() {
  const [activeStep, setActiveStep] = useState<Steps>(Steps.PERSONAL_INFO);

  const StepForm = () => {
    switch (activeStep) {
      case Steps.PERSONAL_INFO:
        return <FormInfo setActiveStep={setActiveStep} />;
      case Steps.CONFIRM_FORM:
        return <ConfirmForm setActiveStep={setActiveStep} />;
      case Steps.COMPLETION:
        return <RegistrationResult />;
      default:
        return <FormInfo setActiveStep={setActiveStep} />;
    }
  };

  return (
    <Stack direction="column" spacing={3} alignItems="center">
      <Stack width="100%" alignItems="center">
        <Box sx={{ width: 700 }}>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ pb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Stack direction="column" spacing={3} width="100%">
          {StepForm()}
        </Stack>
      </Stack>
    </Stack>
  );
}
