# Biifco - Bovine Supply Chain Management Platform

A modern web application built with Next.js 13, Tailwind CSS, and shadcn/ui for managing bovine supply chains.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark mode support
- 🌐 Internationalization ready
- 🔐 Authentication system
- 💳 Pricing plans
- 📱 Mobile-first approach
- 🚀 Optimized performance

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.17 or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/biifco.git
cd biifco
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
biifco/
├── app/                    # Next.js 13 app directory
│   ├── (auth)/            # Authentication routes
│   ├── (marketing)/       # Marketing pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI components
│   ├── features/         # Feature components
│   └── ...
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── public/              # Static assets
```

## Building for Production

1. Create a production build:
```bash
npm run build
# or
yarn build
```

2. Start the production server:
```bash
npm run start
# or
yarn start
```

## Deployment

This project is configured for deployment on various platforms:

### Deploying to Netlify

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy!

## Technologies Used

- [Next.js 13](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow the [Next.js Style Guide](https://nextjs.org/docs/basic-features/pages#styling)
- Use CSS Modules or Tailwind CSS for styling
- Implement responsive design using Tailwind's breakpoint system

### Component Structure

- Create small, reusable components
- Use proper TypeScript types and interfaces
- Implement proper error handling
- Add appropriate loading states
- Follow accessibility best practices

### Git Workflow

1. Create a new branch for each feature/fix
2. Write clear, concise commit messages
3. Submit pull requests for review
4. Merge only after approval

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@biifco.com or join our Slack channel.

