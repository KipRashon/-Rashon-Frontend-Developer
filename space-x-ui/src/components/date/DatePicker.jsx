import React from "react";
import flatpickr from "flatpickr";
import { useEffect } from "react";
import { convertToUtc } from "../../util/formatter.util";

export default function DatePicker(props) {
  const { defaultDate, name, onDateChange, enableTime, minDate, maxDate } =
    props;

  useEffect(() => {
    flatpickr(`#${name}`, {
      onClose: (date) => {
        onDateChange(convertToUtc(date[0]));
      },
      closeOnSelect: true,
      defaultDate: defaultDate,
      dateFormat: enableTime ? "d-m-Y H:i" : "d-m-Y",
      enableTime: enableTime || false,
      minDate,
      maxDate,
    });
  });
  return (
    <input
      className="flatpickr flatpickr-input active  form-control "
      type="text"
      placeholder="Select Date.."
      readOnly="readonly"
      id={name}
    />
  );
}
