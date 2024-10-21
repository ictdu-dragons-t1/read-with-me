import Accordian, { AccordianItem } from "../../components/Accordion.jsx";

const Faqs = () => {
  const data = [
    {
      question: "What age group is ReadWithMe designed for?",
      answer:
        "ReadWithMe is mainly created for grade-school learners, typically between 6 and 12 years old. However, older students and even adults can benefit from the features we offer!",
    },
    {
      question: "How does ReadWithMe help improve reading comprehension?",
      answer:
        "ReadWithMe boosts reading comprehension through fun, interactive challenges based on stories from public domain literature. By adding game-like features, adjusting difficulty to the learner’s progress, and providing personalized feedback, it ensures that each user is learning at their own pace and improving steadily.",
    },
    {
      question: "What types of books and stories can I find on ReadWithMe?",
      answer:
        "We’ve got a variety of content for all types of readers—everything from classic literature to modern-day stories, and we cover many genres. This way, learners can explore the kinds of books they love while strengthening their reading skills.",
    },
    {
      question: "What’s the difference between the free and paid plans?",
      answer:
        "With the free plan, you get all the essentials—reading challenges and basic progress tracking. But if you want to take things up a notch, the paid plan offers cool extras like hints for tougher sections, access to more book genres, and fun customization options for your profile to make it uniquely yours.",
    },
    {
      question: "How does ReadWithMe protect my data?",
      answer:
        "Your privacy is our priority. We use secure systems to track your progress and ensure your personal information stays safe. Everything is hosted on reliable cloud services like AWS and Google Cloud, so you can trust that your data is well-protected.",
    },
    {
      question: "Can schools use ReadWithMe in their classrooms?",
      answer:
        "ReadWithMe is built to be school-friendly. Teachers can easily integrate it into their lessons, track student progress, and adjust reading challenges to match what their students need. It’s a flexible tool that works well for both teachers and learners.",
    },
    {
      question: "What languages can I use on ReadWithMe?",
      answer:
        "Right now, we’re starting with English, but we’re planning to support more languages in the future as we grow and partner with schools and learners from different regions.",
    },
    {
      question: "How can parents track their child’s progress?",
      answer:
        "Parents can easily keep an eye on their child’s progress through a dashboard that shows key stats like reading speed, comprehension accuracy, and engagement levels. It’s a great way to see how they’re improving and provide encouragement along the way.",
    },
  ];

  return (
    <>
      <main className="mx-auto max-w-screen-2xl py-20 md:py-22  px-10 md:px-24 tall:min-h-[calc(100dvh-128px)]">
        <h1 className="text-white text-5xl md:text-5xl font-bold tracking-tight md:pt-20 mb-8">
          Frequently Asked Questions
        </h1>
        <Accordian>
          {data.map((item, index) => (
            <AccordianItem
              key={index}
              value={index}
              trigger={item.question}
              index={index + 1}
            >
              {item.answer}
            </AccordianItem>
          ))}
        </Accordian>
      </main>
    </>
  );
};
export default Faqs;
