# CSV2JSON Converter
<img width="1442" height="896" alt="image" src="https://github.com/user-attachments/assets/322ef9ad-b965-4148-8f08-ce7575a74b8e" />

## 🗂️ Description

The CSV2JSON Converter is a web application designed to convert CSV (Comma Separated Values) files to JSON (JavaScript Object Notation) format. This tool is useful for developers, data analysts, and anyone who needs to work with data in both CSV and JSON formats. The application provides a simple and intuitive interface for uploading CSV files, selecting delimiter options, and downloading the converted JSON data.

The CSV2JSON Converter is built using modern web technologies, including React, Vite, and Tailwind CSS, ensuring a fast, responsive, and user-friendly experience.

## ✨ Key Features

### Core Features

* **CSV to JSON Conversion**: Convert CSV files to JSON format with ease
* **Delimiter Selection**: Choose from various delimiter options, including auto-detection
* **File Upload**: Upload CSV files directly or paste CSV data into the application
* **JSON Output**: Display and download converted JSON data

### User Interface

* **Sample Data**: View sample CSV data to get started
* **Drop Zone**: Easily upload CSV files or click to browse
* **Auto-Detect Settings**: Select delimiter and auto-detect settings for accurate conversion

## 🗂️ Folder Structure

```mermaid
graph TD;
src-->components;
src-->utils;
components-->CsvInput;
components-->JsonOutput;
components-->DropZone;
components-->AutoDetectSettings;
components-->SampleData;
utils-->useCsvJson;
src-->App;
src-->main.jsx;
```

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)

## ⚙️ Setup Instructions

To run the CSV2JSON Converter locally:

* Clone the repository: `git clone https://github.com/ebhay/CSV2JSON.git`
* Install dependencies: `npm install`
* Start the application: `npm run dev`
* Open your web browser and navigate to `http://localhost:5173`

## 📁 Configuration Files

The application uses the following configuration files:

* `vite.config.js`: Vite build tool configuration
* `eslint.config.js`: ESLint configuration for JavaScript linting
* `.gitignore`: Git ignore file for ignoring specific files and directories

## 🤝 GitHub Actions

The repository uses GitHub Actions for automated workflows. The workflow files are located in the `.github/workflows` directory.

## 📝 Code Structure

The application code is organized into the following directories:

* `src`: Source code directory
	+ `components`: React component directory
	+ `utils`: Utility function directory
	+ `App.jsx`: Main application component
	+ `main.jsx`: Main entry point of the application



<br><br>
<div align="center">
<img src="https://avatars.githubusercontent.com/u/111756624?v=4" width="120" />
<h3>Abhay Gupta</h3>
<p>Passionate developer & lifelong learner, seeking to break boundaries through code.</p>
</div>
<br>
<p align="right">
<img src="https://gitfull.vercel.app/appLogo.png" width="20"/>  <a href="https://gitfull.vercel.app">Made by GitFull</a>
</p>
    
