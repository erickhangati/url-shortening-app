import React, { useState, useContext } from "react";

import Container from "../../UI/Container/Container";
import Button from "../../UI/Button/Button";
import LinkContext from "../../../store/link-context";

import styles from "./Form.module.scss";

const Form = () => {
  const [inputError, setInputError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const linkCtx = useContext(LinkContext);

  const inputHandler = (e) => {
    // Get link input value.
    setInputValue(e.target.value);

    // Clear any previous errors.
    setInputError("");
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    // API fetch request to shorten URL.
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );

      const data = await response.json();

      // Catch any errors.
      if (!response.ok) throw new Error(data.error_code);

      // Transform data recieved from the API to suit our needs.
      const transformedData = {
        originalLink: data.result.original_link,
        shortenedLink: data.result.full_short_link,
        copied: false,
      };

      // Add link to our list.
      linkCtx.setLinks((previousLinks) => {
        return [...previousLinks, transformedData];
      });

      // Clear shorten URL input field.
      setInputValue("");
    } catch (error) {
      let errorMsg;

      // Get appropiate error message.
      switch (+error.message) {
        case 1:
          errorMsg =
            "No URL specified ('url' parameter is empty). Please add link.";
          break;
        case 2:
          errorMsg = "Invalid URL submitted.";
          break;
        case 3:
          errorMsg = "Rate limit reached. Wait a second and try again.";
          break;
        case 4:
          errorMsg =
            "IP-Address has been blocked because of violating our terms of service.";
          break;
        case 5:
          errorMsg = "Shrtcode code (slug) already taken / in use.";
          break;
        case 6:
          errorMsg = "Unknown error.";
          break;
        case 7:
          errorMsg = "No code specified ('code' parameter is empty).";
          break;
        case 8:
          errorMsg =
            "Invalid code submitted (code not found/there is no such short-link).";
          break;
        case 9:
          errorMsg = "Missing required parameters.";
          break;
        case 10:
          errorMsg = "Trying to shorten a disallowed Link.";
          break;
        default:
          errorMsg = "Something went wrong";
      }

      // Set error message.
      setInputError(errorMsg);
    }
  };

  return (
    <Container
      // Append error class if there is error.
      className={`${styles.form}${inputError ? ` ${styles.error}` : ""}`}
    >
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Shorten link here..."
          onChange={inputHandler}
          className={inputError ? styles.error : ""}
          value={inputValue}
        />
        <Button className={styles.button}>Shorten It!</Button>
        {inputError && <p>{inputError}</p>}
      </form>
    </Container>
  );
};

export default Form;
