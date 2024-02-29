# CSV_Upload_02
--------------------------------------

# CSV File Explorer and Viewer

## Introduction

This Node.js project allows users to upload and explore CSV files through a web-based interface. The system dynamically generates tables based on the uploaded CSV files, supports searching and sorting, and offers additional features like file validation and pagination.

## Features

- **File Upload:** Users can upload CSV files (comma-separated values) using the web interface.

- **Dynamic Table:** The system dynamically generates tables with column headers based on the uploaded CSV files.

- **Search Functionality:** A search box allows users to filter rows based on a specified column, providing a seamless user experience.

- **Sorting:** Users can sort each column in ascending or descending order for better data organization.

- **File Validation:** Both front-end and server-side validations ensure that only CSV files are accepted for upload.

- **Pagination:** The displayed data is paginated to a maximum of 100 records per page, improving performance and user experience.

- **Chart Integration (Super Duper Extra Points):** For an enhanced visualization experience, a charting library like Google Charts or D3.js is integrated to display selected column data graphically.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/csv-file-explorer.git
   cd csv-file-explorer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. Upload CSV files, explore data, and enjoy the features!

## Project Structure

- `server.js`: Main server file responsible for handling file uploads, validations, and serving the web application.

- `public/`: Front-end assets (HTML, CSS, client-side scripts).

- `uploads/`: Directory where uploaded CSV files are stored.

- `views/`: Handlebars templates for rendering dynamic content.

- `routes/`: Express.js routes for different functionalities.

## Dependencies

- `express`: Web framework for Node.js.

- `csv-parser`: CSV parsing library for Node.js.

- `express-fileupload`: Middleware for handling file uploads with Express.

- `chart.js` (if using Chart Integration): Charting library for graphical data representation.

## Configuration

- The server is configured to run on `http://localhost:8000` by default. You can change the port in `server.js` if needed.

## Contributing

If you would like to contribute to this project, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

