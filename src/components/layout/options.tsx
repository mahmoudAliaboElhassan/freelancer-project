import React from "react";

interface FooterBlock {
  question: string;
  buttonText: string;
  buttonAction?: () => void;
}

const FreelancerFooter: React.FC = () => {
  const footerBlocks: FooterBlock[] = [
    {
      question: "Do you want to earn money from freelancing easily?",
      buttonText: "Signup Now",
      buttonAction: () => console.log("Signup clicked"),
    },
    {
      question: "Do you want to hire a skilled freelancer?",
      buttonText: "Post Your Project",
      buttonAction: () => console.log("Post Project clicked"),
    },
    {
      question: "Do you want to hire a social media influencer?",
      buttonText: "Post Your Influencer Request",
      buttonAction: () => console.log("Post Influencer Request clicked"),
    },
    {
      question: "Do you want to get your work done easily?",
      buttonText: "Add Your AD",
      buttonAction: () => console.log("Add AD clicked"),
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="bg-gray-800 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerBlocks.map((block, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <p className="text-white font-bold text-sm leading-relaxed">
                {block.question}
              </p>
              <button
                onClick={block.buttonAction}
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
              >
                {block.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelancerFooter;
