
# ImagiNUTS

<div style="text-align:center;">
  <img src="https://techcrunch.com/wp-content/uploads/2022/05/imagen-shiba.jpeg" width="200" height="200" alt="ImagiNUTS Logo">
</div>

ImagiNUTS is a repository containing a client-side component for an OpenAI-based image generation project. Users can provide a prompt, and the system will generate images based on that prompt.

## Getting Started

To run this project, follow these steps:

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Steffany-Martins/ImagiNUTS.git
   ```

2. Change to the project directory:

   ```bash
   cd ImagiNUTS
   ```

3. Install project dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Configuration

Before running the project, you need to configure your OpenAI API key. You can provide your API key either via environment variables or as part of the project's configuration.

#### Environment Variable

Create a `.env.local` file in the project root directory and add your OpenAI API key:

```
API_KEY=your-api-key-here
```

#### Project Configuration

In the `Form.tsx` file, make sure the `publicRuntimeConfig` object is set up correctly:

```javascript
const apiKey = (typeof publicRuntimeConfig !== 'undefined' && publicRuntimeConfig ? publicRuntimeConfig.apiKey : process.env.API_KEY);
```

### Running the Project

Once you have configured your API key, you can run the project locally using one of the following commands:

- Development mode:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

- Build and start in production mode:

  ```bash
  npm run build
  npm start
  # or
  yarn build
  yarn start
  ```

The project should now be running locally at `http://localhost:3000`.

## Technologies Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/) - A React framework for server-rendered applications.
- [OpenAI API](https://beta.openai.com/docs/) - Used for generating images based on user prompts.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [dotenv](https://www.npmjs.com/package/dotenv) - Used for managing environment variables.
- Other dependencies as listed in the `package.json` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

