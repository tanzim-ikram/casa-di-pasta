console.log("Casa di Pasta site is running!");
import "./style.css";
import { loadHome } from "./home";
import { loadAbout } from "./about";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import { loadReserve } from "./reserve";

function clearContent() {
    document.getElementById("content").innerHTML = "";
}

function setActiveTab(tabId) {
    const tabs = document.querySelectorAll("nav button");
    tabs.forEach((tab) => tab.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
}

function initializeWebsite() {
    // Load Home page by default
    loadHome();
    setActiveTab("home");

    // Set up event listeners for nav buttons
    document.getElementById("home").addEventListener("click", () => {
        clearContent();
        loadHome();
        setActiveTab("home");
    });

    document.getElementById("menu").addEventListener("click", () => {
        clearContent();
        loadMenu();
        setActiveTab("menu");
    });

    document.getElementById("about").addEventListener("click", () => {
        clearContent();
        loadAbout();
        setActiveTab("about");
    });

    document.getElementById("contact").addEventListener("click", () => {
        clearContent();
        loadContact();
        setActiveTab("contact");
    });

    document.getElementById("reserve").addEventListener("click", () => {
        clearContent();
        loadReserve();
        setActiveTab("reserve");
    });
}

window.addEventListener("DOMContentLoaded", initializeWebsite);