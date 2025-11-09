# A Plus Ultra Sound Centre - Medical Center Management System

## Project Overview

A Plus Ultra Sound Centre is a comprehensive medical center management system built with modern web technologies. This application provides advanced diagnostic imaging services with cutting-edge technology and experienced professionals.

## Features

- **Patient Management**: Complete patient registration and profile management
- **Appointment Booking**: Easy appointment scheduling system
- **Medical Reports**: Secure access to medical reports and test results
- **Service Catalog**: Comprehensive list of diagnostic services
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Mobile-friendly interface for all devices

## Technologies Used

This project is built with:

- **Vite** - Next generation frontend tooling
- **TypeScript** - Type-safe JavaScript
- **React** - Modern UI library
- **React Router** - Client-side routing
- **shadcn-ui** - High-quality UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Firebase** - Authentication and backend services

## Getting Started

### Prerequisites

- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn package manager

### Installation

Follow these steps to set up the project locally:

```sh
# Step 1: Navigate to the project directory
cd Client

# Step 2: Install the necessary dependencies
npm install

# Step 3: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Building for Production

```sh
# Build the project
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
Client/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── contexts/       # React contexts (Auth, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and configurations
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── package.json        # Project dependencies
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Code Editing

You can edit the code using your preferred IDE (VS Code, WebStorm, etc.)

## Deployment

### Build and Deploy

1. Build the project: `npm run build`
2. The `dist/` folder contains the production-ready files
3. Deploy the `dist/` folder to your hosting provider

### Recommended Hosting Platforms

- **Vercel** - Optimized for Vite and React
- **Netlify** - Easy deployment with continuous integration
- **AWS S3 + CloudFront** - Scalable cloud hosting
- **Firebase Hosting** - Easy deployment with Firebase integration

## Custom Domain

Yes, you can connect a custom domain to your deployed application!

1. Deploy your application to your preferred hosting platform
2. Configure your domain's DNS settings
3. Add your custom domain in your hosting platform's settings
4. Update any necessary environment variables

## License

This project is proprietary software for A Plus Ultra Sound Centre.

## Support

For support, please contact the development team.

## Acknowledgments

- Built with modern web technologies
- UI components from shadcn-ui
- Icons from Font Awesome and Lucide React