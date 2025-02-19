import FaqItem from './FaqItem';

const FAQs = () => {
  const faqs = [
    {
      question: 'How does your software development company ensure the quality of deliverables?',
      answer: 'Our software development company is awarded with ISO 9001:2015 certificate. It is the international standard specifying requirements for a quality management system (QMS). Intellectsoft demonstrates the ability to consistently provide products and services that meet customer and regulatory requirements.'
    },
    {
      question: 'How long does it take to develop a project?',
      answer: 'It depends on the complexity of your project, technical requirements, and the scope of work. On average, we deliver simple software development solutions within 2–3 months, basic projects within 3–6 months, and complicated ones take us 9+ months. As a full-stack software provider, we have all the required tech specialists to develop products fast.'
    },
    {
      question: 'How much do software development services cost?',
      answer: 'The cost for each project depends on different factors. It includes rates of tech specialists, project complexity, team size, time, and other criteria defining the total price. Talk to our experts to estimate the work scope for your project and we will calculate the cost.'
    },
    {
      question: 'Can you describe your project management approach and how you ensure the timely delivery of software solutions?',
      answer: 'We are a full-cycle software development company sticking to the agile methodology approach. It allows us to break the projects into milestones and sprints (usually, each sprint takes 1–2 or 3–4 weeks considering the specifics of the project). For all projects, we elaborate on a step-by-step roadmap so our clients know exactly the date of their product release. We consider all technical requirements of the project, estimate our resources and organize the development process to deliver a product as fast as possible and without delays.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">F.A.Q.</h2>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQs;
