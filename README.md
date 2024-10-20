# 📚 ReadWithMe: Unlocking Literacy in Young Minds 🧠

## 🌟 What is ReadWithMe?

ReadWithMe is an AI-powered quiz-based learning platform that gamifies how students read books to improve their reading comprehension. Through engaging challenges, personalized feedback, and adaptive difficulty levels, ReadWithMe transforms the reading experience into an interactive and motivating learning process! 🎮📖

Our platform uses advanced natural language processing to generate relevant questions about the books students are reading. These questions range from basic comprehension checks to more complex analytical inquiries, encouraging students to think critically about the text they're studying. 🤔💡

## 🎯 What is it for?

ReadWithMe aims to address the literacy challenges faced by young learners, particularly in the Philippines. By using gamification and adaptive learning technologies, we make reading comprehension more engaging and accessible, ultimately helping students improve their skills in an enjoyable way. 🇵🇭📈

We're solving the problems of:
- Low literacy rates 📉
- Lack of interest in reading 😴
- Limited access to educational tools 🚫

By providing a scalable, interactive, and user-friendly platform! 🚀

## 🛠️ Setup Instructions

### Prerequisites:
- NPM/Yarn 📦
- Docker Desktop 🐳
- Juno CLI 🌙

### How to run?

1. Install dependencies: `npm install`
2. Install Juno CLI: `npm i -g @junobuild/cli`
3. Open Docker Desktop (if not installed, download from [here](https://www.docker.com/products/docker-desktop/)) 
   *For Macs, a lightweight alternative is [Orbstack](https://orbstack.dev/)*
4. Create and run the Docker container for the website: `juno dev start`
5. In another terminal, run the website for testing: `npm run dev`
6. To allow sharing the website on LAN: `npm run dev -- --host`
7. *Note: At first visit, there's a security warning because it uses HTTPS without a certificate. You can safely ignore it as it's only used to make the camera functionality work in LAN, especially on mobile.*

### 🌐 How to deploy to the mainnet?

1. Create a satellite in the [Juno console](https://console.juno.build/)
2. Login to the Juno CLI: `juno login`
3. Build your website for deployment: `npm run build`
4. Deploy your website to Juno: `juno deploy`
5. To open your website, run: `juno open` (You can also go to the Juno console to view the canister URL)

## 🚀 Technologies Used

- **Juno** - Blockchain-as-a-service platform for deploying dapps onto ICP 🧊
- **React** - Front-end JavaScript library ⚛️
- **Vite** - Modern, fast build tool and development server ⚡
- **Zustand** - Small, fast, and scalable state management solution 🐻
- **Tesseract.js** - OCR engine for JavaScript 👁️
- **HuggingFace** - Platform for machine learning models 🤗
- **ElevenLabs** - Text-to-speech AI platform 🎙️
- **Tailwind CSS** - Utility-first CSS framework 🌈
- **Mantine UI** - React components library 🧱

## 👥 Team Members

- **Mel Mathew Palaña** - DevOps Engineer, Database Administrator, Team Lead 👨‍💻
- **Jose Gabriel Cruz** - Lead UI/UX Designer, Frontend Developer, Presenter 🎨
- **John Carlo Paz** - UI/UX Designer, Frontend Developer 🖌️
- **Quiana Dayrit** - Business Analyst, Content Manager, Presenter 📊

## 🙏 Acknowledgements

We would like to express our heartfelt gratitude to:

- **Systems Plus College Foundation** 🏫 - For providing us with the educational foundation and resources necessary to bring this project to life.
- **ICTDU (Information and Communications Technology Development Unit)** 💻 - For their unwavering support and guidance throughout every step of our journey.

Your belief in our potential and your continuous assistance have been instrumental in making ReadWithMe a reality. Thank you for giving us this incredible opportunity to make a difference in the field of education and literacy. 🌟

## 📜 License

This project is licensed under the MIT license, see [LICENSE.md](https://github.com/ictdu-dragons-t1/read-with-me/blob/main/LICENSE) for details.
