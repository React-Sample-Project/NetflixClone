import React, { useState, useEffect } from "react";
import {
  CustomButton,
  CustomInput,
  StepFormsMain,
  MessageText,
  StepFormsWrapper,
} from "./StepsForm.Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function StepsForm() {
  const [info, setInfo] = useState({
    message: "",
    name: "",
    email: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const { message, name, email } = info;
  const onChange = ({ target: { name, value } }) => {
    setInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  const onKeyDown = (e) => {
    // If Enter key is presed triggered next step.
    if (e.keyCode === 13) {
      onClick(e);
    }
  };

  const onClick = () => setCurrentStep((step) => step + 1);

  const steps = [
    {
      name: "message",
      placeholder: "Enter your message",
      value: message,
    },
    {
      name: "name",
      placeholder: "Enter your name",
      value: name,
    },
    {
      name: "email",
      placeholder: "Enter your email",
      value: email,
    },
  ].map(({ name, placeholder, value }) => (
    <StepFormsMain>
      <CustomInput
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        name={name}
        placeholder={placeholder}
        tabIndex="0"
      />
      <CustomButton onClick={onClick}>
        {" "}
        <FontAwesomeIcon style={{ color: "white" }} icon={faArrowRight} />{" "}
      </CustomButton>
    </StepFormsMain>
  ));

  useEffect(() => {
    /** Writinig user feedback to google script. Fetch API is used instead of API wrapper to have different base url and exclude API key inclusion */
    async function execFn() {
      if (currentStep > steps.length - 1) {
        await fetch(
          `https://script.google.com/macros/s/AKfycbzxYBhxWoM3PHPQWRMSp_pnDX6SFrnDrrok8YCSji_vSO8vHh_Q/exec?message=${info.message}&name=${info.name}&email=${info.email}`
        );
        // console.log(response);
      }
    }
    execFn();
  }, [currentStep, info, steps.length]);

  useEffect(() => {
    const element =
      document.activeElement.previousElementSibling || document.activeElement;
    element.focus();
  }, [currentStep]);

  return (
    <StepFormsWrapper>
      <MessageText> Write a message to me</MessageText>
      {currentStep < steps.length ? (
        steps[currentStep]
      ) : (
        <MessageText>Thanks for your message!</MessageText>
      )}
    </StepFormsWrapper>
  );
}

export default StepsForm;
