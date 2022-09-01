import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Loader from "../../components/Loader";
import { fetchRequest } from "../../redux/reducers/auth";

const SubmitButton = ({ handleSubmit, value }) => {
  const dispatch = useDispatch();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      onClick={handleSubmit}
    >
      {!dispatch(fetchRequest()) ? <Loader /> : value}
    </Button>
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func,
  value: PropTypes.any,
};
