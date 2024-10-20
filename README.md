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

![Read With Me (How It Works)](https://github.com/user-attachments/assets/6af65eb4-78e3-4450-9477-9d785a0e2123)

## 📸 Screenshots

![462562453_466788165751703_7072784300685605258_n](https://github.com/user-attachments/assets/3a0eac11-4497-499c-8e15-5478862c95fa)
![462556500_9188414544520222_8680967862818502138_n](https://github.com/user-attachments/assets/14280fa5-9d77-4ba6-ab94-bc47ba651aa3)
![462555690_487728267748410_3894855004337613820_n](https://github.com/user-attachments/assets/99f04e82-a1f1-4e11-8dd9-cbb84ef14950)
![462548445_2193482477762725_3512379797209259088_n](https://github.com/user-attachments/assets/7e67236d-4164-480a-93c3-d0e4983950ff)
![IMG_2982](https://github.com/user-attachments/assets/0095bd9b-80bd-4d91-976c-cd137dda3874)

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
2. Login to the Juno CLI: `juno login`
3. Build your website for deployment: `npm run build`
4. Deploy your website to Juno: `juno deploy`
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

![Read With Me (Architecture)](https://github.com/user-attachments/assets/d34211ea-e1fc-412f-ab34-73ff251a65a4)

## 👥 Team Members

- **Mel Mathew Palaña** - DevOps Engineer, Database Administrator, Project Manager 👨‍💻
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
