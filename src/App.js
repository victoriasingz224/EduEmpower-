import React, { useState } from 'react';
import { Search, BookOpen, DollarSign, Users, Award, Calculator, MapPin, Heart, Menu, X, ChevronRight, Star, Clock, TrendingUp, Target, PieChart, Bell } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scholarships = [
    { 
      name: "UNCF General Scholarship", 
      amount: "$5,000", 
      deadline: "March 15, 2026", 
      eligibility: "African American students"
    },
    { 
      name: "Hispanic Heritage Foundation", 
      amount: "$3,000", 
      deadline: "April 30, 2026", 
      eligibility: "Latino/Hispanic students"
    },
    { 
      name: "LGBTQ+ Excellence Fund", 
      amount: "$2,500", 
      deadline: "February 28, 2026", 
      eligibility: "LGBTQ+ students"
    }
  ];

  const NavButton = ({ icon: Icon, label, tabKey, isActive, onClick }) => (
    <button
      onClick={() => onClick(tabKey)}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all w-full text-left ${
        isActive 
          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-purple-700 text-white rounded-xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to EduEmpower</h1>
        <p className="text-pink-100 text-lg mb-6">
          An Idea to Reform Education and provide equal opportunities for learners worldwide
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <Award className="mb-2 text-yellow-300" size={24} />
            <h3 className="font-semibold">Scholarships Available</h3>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <Users className="mb-2 text-green-300" size={24} />
            <h3 className="font-semibold">Active Learners</h3>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <DollarSign className="mb-2 text-blue-300" size={24} />
            <h3 className="font-semibold">Funds Awarded</h3>
            <p className="text-2xl font-bold"></p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <button 
          onClick={() => setActiveTab('scholarships')}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-500 text-left group"
        >
          <Award className="text-pink-500 mb-3 group-hover:scale-110 transition-transform" size={28} />
          <h3 className="font-bold text-gray-800 mb-2">Find Scholarships</h3>
          <p className="text-sm text-gray-600">Discover funding opportunities</p>
          <ChevronRight className="text-pink-500 mt-2" size={16} />
        </button>
        
        <button 
          onClick={() => setActiveTab('financial')}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500 text-left group"
        >
          <DollarSign className="text-purple-500 mb-3 group-hover:scale-110 transition-transform" size={28} />
          <h3 className="font-bold text-gray-800 mb-2">Financial Tools</h3>
          <p className="text-sm text-gray-600">Budget and plan your finances</p>
          <ChevronRight className="text-purple-500 mt-2" size={16} />
        </button>
        
        <button 
          onClick={() => setActiveTab('resources')}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500 text-left group"
        >
          <BookOpen className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" size={28} />
          <h3 className="font-bold text-gray-800 mb-2">Learning Resources</h3>
          <p className="text-sm text-gray-600">Guides and educational content</p>
          <ChevronRight className="text-blue-500 mt-2" size={16} />
        </button>
        
        <button 
          onClick={() => setActiveTab('community')}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500 text-left group"
        >
          <Users className="text-green-500 mb-3 group-hover:scale-110 transition-transform" size={28} />
          <h3 className="font-bold text-gray-800 mb-2">Join Community</h3>
          <p className="text-sm text-gray-600">Connect with peers</p>
          <ChevronRight className="text-green-500 mt-2" size={16} />
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="text-pink-500" size={20} />
            Recent Scholarships
          </h2>
          <div className="space-y-3">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800">{scholarship.name}</h3>
                <p className="text-sm text-gray-600">Amount: {scholarship.amount}</p>
                <p className="text-sm text-gray-500">Deadline: {scholarship.deadline}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Bell className="text-purple-500" size={20} />
            Upcoming Deadlines
          </h2>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-800">Hispanic Heritage Foundation</p>
              <p className="text-sm text-gray-600">Due: April 30, 2026</p>
              <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mt-2">
                Due Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return renderDashboard();
      case 'scholarships': return <div className="p-8"><h1 className="text-2xl font-bold">Scholarships Coming Soon!</h1></div>;
      case 'financial': return <div className="p-8"><h1 className="text-2xl font-bold">Financial Tools Coming Soon!</h1></div>;
      case 'resources': return <div className="p-8"><h1 className="text-2xl font-bold">Resources Coming Soon!</h1></div>;
      case 'community': return <div className="p-8"><h1 className="text-2xl font-bold">Community Coming Soon!</h1></div>;
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">EduEmpower</h2>
            <p className="text-sm text-gray-600">Empowering Your Future</p>
          </div>
          <nav className="p-4 space-y-2">
            <NavButton 
              icon={BookOpen} 
              label="Dashboard" 
              tabKey="dashboard" 
              isActive={activeTab === 'dashboard'}
              onClick={setActiveTab}
            />
            <NavButton 
              icon={Award} 
              label="Scholarships" 
              tabKey="scholarships" 
              isActive={activeTab === 'scholarships'}
              onClick={setActiveTab}
            />
            <NavButton 
              icon={DollarSign} 
              label="Financial Literacy" 
              tabKey="financial" 
              isActive={activeTab === 'financial'}
              onClick={setActiveTab}
            />
            <NavButton 
              icon={MapPin} 
              label="Resources" 
              tabKey="resources" 
              isActive={activeTab === 'resources'}
              onClick={setActiveTab}
            />
            <NavButton 
              icon={Users} 
              label="Community" 
              tabKey="community" 
              isActive={activeTab === 'community'}
              onClick={setActiveTab}
            />
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 p-4">
            <h1 className="text-xl font-bold text-gray-800">EduEmpower</h1>
          </div>
          <div className="p-4 lg:p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
