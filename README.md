
# ImagiNUTS

<div style="text-align:center;">
  <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-lKUKYknZDBTqZFwLIAr7Gqzq/user-EtFRPLqOufwxxUeZj3ucJjul/img-ptu7fUtTQVlOvO8RNIpLcRQN.png?st=2023-09-10T16%3A43%3A09Z&se=2023-09-10T18%3A43%3A09Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-09T21%3A36%3A18Z&ske=2023-09-10T21%3A36%3A18Z&sks=b&skv=2021-08-06&sig=pDHSO1cxhS12BkFTL0M0zZhGbi%2BmgNIDxSPGZCBn9Rs%3D" width="200" height="200" alt="ImagiNUTS Logo">
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

