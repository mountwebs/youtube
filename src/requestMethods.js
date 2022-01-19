import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDM1M2FlYTUxMmZhNjRiNTg3MzA5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjM0NjY3OSwiZXhwIjoxNjQyNjA1ODc5fQ.7i63mJ7yjCpvoEgzgQtJAtJRuvgo8VhI7kbeI3ySVbo";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
