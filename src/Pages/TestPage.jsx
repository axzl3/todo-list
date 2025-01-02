import { useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";

import { Button } from "../Components";

const backEndURL = import.meta.env
  .VITE_BACKEND_URL;

console.log("backendURL", backEndURL);

const TestPage = () => {
  const [companyName, setCompanyName] =
    useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [isPresent, setIsPresent] =
    useState(false);

  const handleOnClick = async () => {
    console.log(
      companyName,
      dateFrom,
      dateTo,
      isPresent
    );

    console.log(
      DateTime.fromFormat(
        dateFrom,
        "yyyy-MM-dd"
      ).toFormat("MM/dd/yyyy"),
      DateTime.fromFormat(
        dateTo,
        "yyyy-MM-dd"
      ).toFormat("MM/dd/yyyy")
    );

    await axios
      .post(`${backEndURL}/experience`, {
        companyName,
        dateFrom: DateTime.fromFormat(
          dateFrom,
          "yyyy-MM-dd"
        ).toFormat("MM/dd/yyyy"),
        dateTo: DateTime.fromFormat(
          dateTo,
          "yyyy-MM-dd"
        ).toFormat("MM/dd/yyyy"),
        isPresent,
      })
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <>
      <input
        type="text"
        name="companyName"
        value={companyName}
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
      />
      <input
        type="date"
        name="dateFrom"
        value={dateFrom}
        onChange={(e) => {
          setDateFrom(e.target.value);
        }}
      />
      <input
        type="date"
        name="dateTo"
        value={dateTo}
        onChange={(e) => {
          setDateTo(e.target.value);
        }}
      />
      <input
        type="checkbox"
        name="isPresent"
        value={isPresent}
        onChange={() => {
          setIsPresent((prevValue) => !prevValue);
        }}
      />

      <Button
        btnText="Submit"
        onClick={handleOnClick}
      />
    </>
  );
};

export default TestPage;
