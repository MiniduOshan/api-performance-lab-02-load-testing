import http from "k6/http";

export let options = {
  vus: 100,
  duration: "10s",
};

export default function () {
  http.get("http://localhost:3001/api/data");
}