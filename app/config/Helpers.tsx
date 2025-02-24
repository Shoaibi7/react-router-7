import { Notyf } from "notyf";
import "notyf/notyf.min.css";

class Helpers {
  // API URLs
  static localhost = "http://127.0.0.1:8000";
  static server = "https://yourliveapi.com";
  static testServer = "https://yourtestapi.com";

  static basePath = this.localhost;
  static apiUrl = `${this.basePath}/api/`;

  static getToken = () => localStorage.getItem("token") ?? "";

  // Auth Headers
  static authHeaders = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`,
    },
  };

  static authFileHeaders = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${this.getToken()}`,
    },
  };

  static toast = (type: "success" | "error" | "info", message: string) => {
    const notyf = new Notyf({
      position: { x: "right", y: "top" },
      ripple: true,
      dismissible: true,
      duration: 3000,
    });

    notyf.open({
      type,
      message,
    });
  };

  static getItem = (data: string, isJson = false) => {
    if (isJson) {
      return JSON.parse(localStorage.getItem(data) ?? "{}");
    } else {
      return localStorage.getItem(data);
    }
  };

  static setItem = (key: string, data: any, isJson = false) => {
    if (isJson) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  };

  static paginate = (data: any[], pageSize = 10) => {
    let paginated = [];
    let startIndex = 0;
    let totalPages = Math.ceil(data.length / pageSize);
    for (let i = 0; i < totalPages; i++) {
      let lastIndex = pageSize + startIndex;
      let pageData = data.slice(startIndex, lastIndex);
      paginated.push(pageData);
      startIndex += pageSize;
    }
    return paginated;
  };
}

export default Helpers;
