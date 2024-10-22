# ReadWithMe: Unlocking Literacy in Young Minds

<img src="https://github.com/user-attachments/assets/8fd19665-9000-40db-a40f-787b2509d90a" width="30%"/><br>

## 🌟 What is ReadWithMe?

ReadWithMe is an AI-powered learning platform that gamifies how students read books to improve their reading comprehension. Through various gaming activities, engaging challenges, personalized feedback, and adaptive difficulty levels, ReadWithMe transforms the reading experience into an interactive and motivating learning process! 🎮📖

Our platform uses advanced natural language processing to generate relevant questions about the books students are reading. These questions range from basic comprehension checks to more complex analytical inquiries, encouraging students to think critically about the text they're studying. 🤔💡

## 🎯 What is it for?

ReadWithMe aims to address the literacy challenges faced by young learners, particularly in the Philippines. By using gamification and adaptive learning technologies, we make reading comprehension more engaging and accessible, ultimately helping students improve their skills in an enjoyable way. 🇵🇭📈

We're solving the problems of:
- Low literacy rates 📉
- Lack of interest in reading 😴
- Limited access to educational tools 🚫

By providing a scalable, interactive, and user-friendly platform! 🚀

## 🔍 How it works?

![Read With Me (How It Works)](https://github.com/user-attachments/assets/2ee383bd-59b8-432d-ab62-6b4b6615215f)

## 📸 Screenshots

![Screenshot 2024-10-21 at 22-25-43 Read With Me!](https://github.com/user-attachments/assets/656edc34-643a-42b3-9069-d4955281d1bc)
![Screenshot 2024-10-21 at 22-26-27 Read With Me!](https://github.com/user-attachments/assets/878a21ea-3319-46d4-8169-8a3d8b225b52)
![Screenshot 2024-10-21 at 22-26-39 Read With Me!](https://github.com/user-attachments/assets/f302a1ea-e8b5-4842-9778-ecb8c18b0da1)
![Screenshot 2024-10-21 at 22-27-08 Read With Me!](https://github.com/user-attachments/assets/9eab6550-fe46-4b1f-aa59-66018eacd138)
![Screenshot 2024-10-21 at 22-27-58 Read With Me!](https://github.com/user-attachments/assets/1dc116e1-cd7d-427e-95f8-37f0a71834e5)
![Screenshot 2024-10-21 at 22-28-23 Read With Me!](https://github.com/user-attachments/assets/b0e4207b-72c3-4a5d-8a81-eece7cb607e3)


## 🛠️ Setup Instructions

### Prerequisites:
- NPM/Yarn 📦
- Docker Desktop 🐳
- Juno CLI 🛰️

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
2. Open a terminal and login to the Juno CLI: `juno login`
3. On the root of your project, open a terminal and build your project for deployment: `npm run build`
4. Once your website is built (check for **dist** or **build** folder), then deploy your website to Juno: `juno deploy`
5. To open your website, run: `juno open` (You can also go to the Juno console to view the canister URL)

## 🚀 Technologies Used

- **Juno** - Blockchain-as-a-service platform for deploying dapps onto ICP 🧊
- **React** - Front-end JavaScript library ⚛️
- **Vite** - Modern, fast build tool and development server ⚡
- **Zustand** - Small, fast, and scalable state management solution 🐻
- **react-camera-pro** - Universal Camera component for React 📷
- **Tesseract.js** - OCR engine for JavaScript 👁️
- **HuggingFace** - Platform for machine learning models 🤗
- **Mistral AI** - Advanced AI for natural language processing tasks 🧠
- **ElevenLabs** - Text-to-speech AI platform 🎙️
- **Tailwind CSS** - Utility-first CSS framework 🌈
- **Mantine UI** - React components library 🧱

## 🏗️ Architecture

![Read With Me (Architecture)](https://github.com/user-attachments/assets/abd9a651-6eac-4b68-ab59-7ca8cfef6ca4)

## 👥 Team Members

- **Mel Mathew Palaña** - Project Manager, DevOps Engineer, Database Administrator 👨‍💻
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
