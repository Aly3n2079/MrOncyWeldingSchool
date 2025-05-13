# MRONCY School of Welding Website

A modern, responsive website for the MRONCY School of Welding & Fabrication Engineering, showcasing their welding training programs, facilities, and business development courses.

## Features

- **Modern Design**: Clean, professional interface with glassmorphism effects and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Card carousels with scroll-on-hover functionality and modal image viewers
- **Custom Video Player**: Responsive video player with playback controls for instructor videos
- **Accessible Navigation**: Clear navigation with active page indicators and keyboard support
- **Optimized Performance**: Fast loading times with optimized images and code
- **Contact Form**: Interactive form with validation and feedback
- **SEO Optimized**: Structured data and metadata for better search engine visibility

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Hooks**: For state management and side effects
- **Lucide Icons**: Modern icon library
- **Responsive Images**: Next.js Image component for optimized image loading
- **HTML5 Video**: Custom video player implementation with full controls

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/mroncy-welding-website.git
   cd mroncy-welding-website
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Next.js App Router pages and layouts
- `components/`: Reusable React components
  - `home/`: Components specific to the home page
  - `layout/`: Header, footer, and other layout components
  - `contact/`: Contact form and map components
  - `navigation/`: Navigation-related components
  - `structured-data/`: SEO-related schema components
  - `ui/`: UI components including the custom video player
- `public/`: Static assets like images and videos
  - `images/`: Contains all website images including:
    - `ico2.png`: Main logo used in the header
    - `mroncy-logo.png`: Logo used in the footer
    - `herobg.png`: Hero section background image
    - `careerflyer.jpg`: Career flyer image used in About section
    - `certified-professionals-flyer.png`: Professionals flyer used in About section
    - `welding-services-flyer.jpeg`: Services flyer used in About section
    - `instructors.jpeg`: Image of the instructors used in About section
  - `videos/`: Contains video content
    - `instructor-video.mp4`: Video of instructors used in About section
- `styles/`: Global CSS and Tailwind configuration

## Key Components

- **Header**: Navigation menu with active page indicator and MRONCY logo
- **Featured Courses**: Interactive carousel with scroll-on-hover functionality
- **About Section**: Clickable image carousel with modal viewer for flyers
- **Video Player**: Custom HTML5 video player with full controls
- **Testimonials**: Customer testimonials with auto-scrolling
- **Inquiry Form**: Contact form with validation and feedback
- **Footer**: Site navigation and contact information with MRONCY logo

## Interactive Features

### Video Player
The custom video player includes:
- Play/pause controls
- Progress bar with seeking functionality
- Volume controls
- Fullscreen toggle
- Responsive design for all screen sizes
- Touch-friendly controls for mobile devices

### Carousel Components
All carousel components feature:
- Hover-based scrolling for intuitive navigation
- Visual indicators for scroll direction
- Touch support for mobile devices
- Keyboard navigation for accessibility
- Smooth animations and transitions

### Modal Image Viewer
The About section includes a modal image viewer that:
- Displays flyers in full-screen mode
- Supports keyboard navigation (arrow keys and Escape)
- Includes navigation controls for browsing all images
- Maintains responsive design across all screen sizes
- Allows clicking outside the modal to close it

## Customization

### Changing Colors

The main colors are defined in the Tailwind configuration file:

\`\`\`js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'steel-blue': '#36454F',
        'welding-orange': '#FF6600',
        'light-grey': '#F4F4F4',
      },
    },
  },
}
\`\`\`

### Adding New Pages

1. Create a new file in the `app/` directory
2. Update the navigation menu in `components/layout/header.tsx`

## Deployment

The site is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure environment variables if needed
4. Deploy

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Daniel Muronzi for providing the business information and requirements
- All contributors who have helped improve this website
