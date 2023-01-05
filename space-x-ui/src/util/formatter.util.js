import moment from "moment";
import { API_BASE_URL } from "../constants/global.constants";

export function formatUrl(url, ...args) {
  let urlParams = "";

  args.forEach((arg) => {
    for (let key in arg) {
      if (arg[key]) {
        urlParams = `${urlParams}${key}=${arg[key]}&`;
      }
      if (arg[key] === 0) {
        urlParams = `${urlParams}${key}=${arg[key]}&`; //allow for value=0
      }
    }
  });
  urlParams = urlParams.substr(0, urlParams.length - 1); //remove the & at the end

  return `${API_BASE_URL}${url}?${urlParams}`;
}

export function formatDate(
  dateStr,
  dateFormat = "DD/MM/YYYY h:mm a",
  toUtc = false
) {
  if (!dateStr) {
    return "_";
  }

  let date = moment(dateStr);
  //return an empty string if the date is invalid
  if (!date.isValid()) {
    return "_";
  }

  if (toUtc) {
    date = date.utc();
  }

  //format to 29/06/2020 12:57 pm
  return date.format(dateFormat);
}

export function convertToUtc(date) {
  let momentDate = moment(date);
  return momentDate.utc().format();
}
