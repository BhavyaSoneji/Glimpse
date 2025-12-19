# 📸 Glimpse - Image Gallery App

A modern, responsive image gallery application built with React and Vite that fetches beautiful images from Picsum Photos API. Features infinite scrolling, individual image downloads, and bulk download functionality.

## ✨ Features

- **Infinite Scrolling**: Automatically loads more images as you scroll down
- **High-Quality Images**: Fetches images from Picsum Photos API
- **Individual Downloads**: Download any image with a single click
- **Bulk Download**: Download the first 15 images as a ZIP file
- **Responsive Design**: Built with Tailwind CSS for a seamless experience across all devices
- **Loading Indicators**: Visual feedback during image loading and download operations
- **Progress Tracking**: Real-time progress bar for ZIP downloads

## 🚀 Live Demo

Visit the live application: [Glimpse Gallery](https://bhavyasoneji.github.io/Glimpse)

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Lucide React** - Icon library
- **JSZip** - JavaScript library for creating ZIP files
- **FileSaver.js** - Client-side file saving
- **Picsum Photos API** - Source for placeholder images

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/BhavyaSoneji/Glimpse.git
cd Glimpse
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Deploy to GitHub Pages
- `npm run predeploy` - Build before deploying

## 🎯 How It Works

1. **Image Loading**: The app fetches 15 images per page from the Picsum Photos API
2. **Infinite Scroll**: Uses Intersection Observer API to detect when users scroll to the bottom
3. **Automatic Pagination**: Automatically loads the next page of images when the user reaches the bottom
4. **Download Single Image**: Click the download icon on any image card to save it individually
5. **Bulk Download**: Use the "Download Images" button to download the first 15 images as a ZIP file

## 📁 Project Structure

```
Gallery-App/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/
│   │   └── Card.jsx     # Image card component
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## 🎨 Key Components

### App Component
- Manages state for images, pagination, and loading status
- Implements infinite scrolling using Intersection Observer
- Handles bulk ZIP download functionality
- Renders the image gallery grid

### Card Component
- Displays individual image cards
- Shows author information
- Provides individual download functionality
- Links to original image source

## 🌐 API Reference

This application uses the [Picsum Photos API](https://picsum.photos/):
- Endpoint: `https://picsum.photos/v2/list`
- Parameters:
  - `page`: Page number for pagination
  - `limit`: Number of images per page (15)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Bhavya Soneji**

- GitHub: [@BhavyaSoneji](https://github.com/BhavyaSoneji)

## 🙏 Acknowledgments

- [Picsum Photos](https://picsum.photos/) for providing the image API
- [Lucide](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities

---

⭐ Star this repository if you found it helpful!
