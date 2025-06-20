import React, { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Upload,
  User,
  Plus,
} from "lucide-react";

interface ProfileCard {
  id: number;
  name: string;
  role: string;
  rating: number;
  image?: string;
  isEmpty?: boolean;
}

interface ProjectCard {
  id: number;
  title: string;
  author: string;
  budget: string;
  description: string;
}

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Website, IT & Software");

  const categoryCards = [
    {
      title: "Projects",
      description: "Add a free project and find talented freelancers",
      icon: "📋",
      bgColor: "bg-green-50 border-green-200",
    },
    {
      title: "ADs",
      description: "Add a free ad and find your interested people",
      icon: "📢",
      bgColor: "bg-blue-50 border-blue-200",
    },
    {
      title: "Influencer",
      description: "Add a free request and find influencers",
      icon: "👥",
      bgColor: "bg-purple-50 border-purple-200",
    },
  ];

  const featuredProfiles: ProfileCard[] = [
    {
      id: 1,
      name: "Hossam Antar",
      role: "Designer",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 2,
      name: "Hossam Antar",
      role: "Web Developer",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 3,
      name: "Hossam Antar",
      role: "Social media Specialist",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 4,
      name: "Hossam Antar",
      role: "Data Analyst",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    { id: 5, isEmpty: true, name: "", role: "", rating: 0 },
  ];

  const distinctiveProjects: ProjectCard[] = [
    {
      id: 1,
      title: "Interactive Dashboard Design - Excel",
      author: "Hossam Antar",
      budget: "$100 - $300",
      description:
        "Logo design for a decoration and wood company. The idea of the logo is to be the letter L Logotype Textual",
    },
    {
      id: 2,
      title: "Interactive Dashboard Design - Excel",
      author: "Hossam Antar",
      budget: "$100 - $300",
      description:
        "Logo design for a decoration and wood company. The idea of the logo is to be the letter L Logotype Textual",
    },
    {
      id: 3,
      title: "Interactive Dashboard Design - Excel",
      author: "Hossam Antar",
      budget: "$100 - $300",
      description:
        "Logo design for a decoration and wood company. The idea of the logo is to be the letter L Logotype Textual",
    },
  ];

  const recentProjects: ProjectCard[] = [
    {
      id: 1,
      title: "Interactive Dashboard Design - Excel",
      author: "Hossam Antar",
      budget: "$100 - $300",
      description:
        "Logo design for a decoration and wood company. The idea of the logo is to be the letter L Logotype Textual",
    },
    {
      id: 2,
      title: "Interactive Dashboard Design - Excel",
      author: "Hossam Antar",
      budget: "$100 - $300",
      description:
        "Logo design for a decoration and wood company. The idea of the logo is to be the letter L Logotype Textual",
    },
    {
      id: 3,
      title: "Interactive Dashboard Design - Excel",
      author: "Hossam Antar",
      budget: "$100 - $300",
      description:
        "Logo design for a decoration and wood company. The idea of the logo is to be the letter L Logotype Textual",
    },
    {
      id: 4,
      title: "Interactive Dashboard Design - Excel",
      author: "Hossam Antar",
      budget: "$100 - $300",
      description:
        "Logo design for a decoration and wood company. The idea of the logo is to be the letter L Logotype Textual",
    },
  ];

  const tabCategories = [
    "Website, IT & Software",
    "Design, Media & Architecture",
    "Writing Content",
    "Data Entry & Admin",
    "Engineering & Science",
    "More...",
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              WHAT ARE YOU LOOKING FOR?
            </h1>
            <p className="text-gray-600 text-lg">Discover our categories</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {categoryCards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} border-2 rounded-xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer`}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Profiles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            FEATURED PROFILES
          </h2>

          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex gap-6 overflow-x-auto pb-4">
              {featuredProfiles.map((profile) => (
                <div
                  key={profile.id}
                  className="min-w-[280px] bg-white rounded-xl shadow-md overflow-hidden"
                >
                  {profile.isEmpty ? (
                    <div className="p-8 text-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <User className="w-8 h-8 text-gray-400" />
                      </div>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Add Your Profile
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="relative">
                        <img
                          src={profile.image}
                          alt={profile.name}
                          className="w-full h-48 object-cover"
                        />
                        <span className="absolute top-3 left-3 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {profile.role}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-1">
                          {profile.name}
                        </h3>
                        <StarRating rating={profile.rating} />
                        <div className="flex gap-2 mt-4">
                          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                            Hire Me
                          </button>
                          <button className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                            My Store
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Distinctive Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            DISTINCTIVE PROJECTS
          </h2>

          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex gap-6 overflow-x-auto pb-4">
              {/* Add Project Card */}
              <div className="min-w-[280px] bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-green-600" />
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Add Your Project
                </button>
              </div>

              {/* Project Cards */}
              {distinctiveProjects.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[280px] bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <div className="p-4">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      Budget {project.budget}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {project.author}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Add Your Offer
                      </button>
                      <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Add a Quick Offer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Most Recent Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            MOST RECENT PROJECTS
          </h2>

          {/* Tab Filter */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            {tabCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === category
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="p-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    Budget {project.budget}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {project.author}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      Add Your Offer
                    </button>
                    <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      Add a Quick Offer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show All Button */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
              <Plus className="w-4 h-4" />
              Show All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
