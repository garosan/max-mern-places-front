import React from "react";

import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <label>
        <Input element="input" type="text" label="Title" />
      </label>
    </form>
  );
};

export default NewPlace;
