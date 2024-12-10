# Translated.io

This is a React-based translation application, built with Vite. It uses the MyMemory API for translations and integrates several advanced features such as dynamic query strings, language detection, and responsive design.

## Features

### Core Functionality:
- **Text Translation**: Powered by MyMemory API.
- **Language Detection**: Automatically detect the source language of input text.
- **Query String Integration**: Dynamic updates of the URL with query parameters for easy sharing and navigation.

### User Experience:
- **Translate**: Enter text and click "Translate".
- **Swap Languages**: Switch the source and target languages.
- **Detect Language**: Automatically detect the language of input text.
- **Copy**: Copy the source or translated text to the clipboard.
- **Speak**: Play text-to-speech for source or translated text.

## Tech Stack
- **Frontend**: React, CSS
- **State Management**: Zustand
- **API Queries**: Axios, TanStack Query
- **Deployment**: Vercel
- **Build tool**: Vite
- **Architectural methodology**: FSD

## Installation and Setup

1. **Clone the Repository**:

    `git clone <repository-url> cd <repository-directory>`
    
2. **Install Dependencies**:
    
    `pnpm install`
    
3. **Start Development Server**:
    
    `pnpm run dev`
    
4. **Build for Production**:
    
    `pnpm run build`
    
5. **Preview Production Build**:
    
    `pnpm run preview`

## License
This project is licensed under the MIT License.