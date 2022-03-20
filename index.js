import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Box,
  Step,
  StepLabel,
  Stepper,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { Field, Form, Formik, FormikConfig, FormikValues } from "formik";
import { TextField } from "formik-material-ui";
import { object, mixed, number } from "yup";
import { style } from "@mui/system";

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export default function Home() {
  return (
    <section className={style.mainContainer}>
      <Card>
        <CardContent>
          <FormikStepper
            initialValues={{
              nameOfFarm: "",
              nameOfCoffeeGrower: "",
              phoneNumber: "",
              emailAddress: "",
              municipo: "",
              location: "",
              height: "",
              propertySize: "",
              areaCoffee: "",
              description: "",
            }}
            onSubmit={async (values) => {
              await sleep(3000);
              console.log("values", values);
            }}
          >
            <div>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="nameOfFarm"
                  component={TextField}
                  label="Name of farm"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="nameOfCoffeeGrower"
                  component={TextField}
                  label="Name of coffee grower"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="phoneNumber"
                  type={TextField}
                  component={TextField}
                  label="Phone number"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="emailAddress"
                  component={TextField}
                  label="Email address"
                />
              </Box>
            </div>
            <div>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="municipo"
                  component={TextField}
                  label="Municipo"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="location"
                  component={TextField}
                  label="Location"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="height"
                  component={TextField}
                  label="Height (msnm)"
                />
              </Box>
            </div>
            <div>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="propertySize"
                  component={TextField}
                  label="Property size (ha)"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="areaCoffee"
                  component={TextField}
                  label="Area coffee (ha)"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="description"
                  component={TextField}
                  label="Short description of your farm"
                />
              </Box>
            </div>
          </FormikStepper>
        </CardContent>
      </Card>
    </section>
  );
}

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  onClick={() => setStep((s) => s - 1)}
                >
                  BACK
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                type="submit"
              >
                {isLastStep() ? "SUBMIT" : "NEXT"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
