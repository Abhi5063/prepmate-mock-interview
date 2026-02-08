# 🚀 Prepmate-ai: AI Mock Interview Platform

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://prepmate-mock-interview.onrender.com)

**Welcome to Prepmate-ai!**
A Next.js 14 application that helps developers enhance their skills through AI-driven mock interviews. It provides real-time feedback, generates custom questions based on user preferences, and offers a comprehensive performance analysis to simulate a realistic interview experience.

## ✨ Features

- **🤖 AI-Powered Interviews**: Generates custom interview questions based on job descriptions and roles.
- **📹 Real-time Audio/Video**: Simulates a real interview environment with webcam and microphone integration.
- **📝 Instant Feedback**: Provides detailed feedback and ratings on your answers immediately after the interview.
- **🎨 Premium UI/UX**: A modern, responsive interface with a dark/light mode adaptable theme.
- **📊 Performance Dashboard**: Track your progress and view past interview history.

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (via Drizzle ORM)
- **AI**: Gemini AI API
- **Authentication**: Clerk

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/ai-mock-interview.git
    cd ai-mock-interview
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env.local` file and add the following:
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
    CLERK_SECRET_KEY=your_clerk_secret
    NEXT_PUBLIC_DRIZZLE_DB_URL=your_database_url
    NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
For more details, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md).

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
