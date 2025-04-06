import React from 'react';
import { Brain, Layout, Users, ChevronDown, Sparkles, BookOpen, Trophy, Timer, Palette, Share2, Target, MessageSquareShare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-indigo-900 mb-6">
            Learn How to Draw from Your Imagination
          </h1>
          <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Master perspective drawing with simple lessons designed for focus and fun. 
            No overwhelm, just progress.
          </p>
          <button className="bg-indigo-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-indigo-700 transition-colors mb-16">
            Start Learning Today
          </button>

          {/* How It Works - Quick Overview */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-gray-800 font-medium">Easy-to-Follow Lessons</p>
            </div>
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Layout className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-gray-800 font-medium">Draw Right On Your Screen</p>
            </div>
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Timer className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-gray-800 font-medium">Master in Days, Not Weeks</p>
            </div>
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trophy className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-gray-800 font-medium">Unlock Fun Rewards</p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
      </div>

      {/* How It Works - Detailed */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Learn at Your Own Pace with Our Simple, Guided Approach</h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            Say goodbye to overwhelming tutorials. In just a few lessons, you'll learn how to draw perspective 
            from scratch using easy-to-follow, interactive lessons. Each lesson introduces a new shape, with 
            exercises to reinforce your skills, so you can build confidence and mastery quickly.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-indigo-50 p-8 rounded-2xl">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quick & Focused Lessons</h3>
              <p className="text-gray-700">
                Master drawing with 5 lessons that can be completed in a few days. Perfect for maintaining focus and seeing quick results.
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-2xl">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Brain className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Designed for ADHD</h3>
              <p className="text-gray-700">
                Simple, clear steps and short lessons to keep you focused and motivated. No more tutorial fatigue!
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-2xl">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Share2 className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Social & Collaborative</h3>
              <p className="text-gray-700">
                Share your work with others, and collaborate on drawings with upcoming features. Learn together!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Students Love How Simple and Fun It Is</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-6">
                "I've never been able to focus on a drawing tutorial before, but this makes it so easy to learn and practice!"
              </p>
              <p className="font-semibold text-indigo-900">Sarah</p>
              <p className="text-gray-600 text-sm">Beginner Artist</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-6">
                "It's like being handheld through every step, and I love how fun the gamification makes it!"
              </p>
              <p className="font-semibold text-indigo-900">Tom</p>
              <p className="text-gray-600 text-sm">Aspiring Illustrator</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-6">
                "I've never been more excited to finish my lessons every day. This approach is amazing!"
              </p>
              <p className="font-semibold text-indigo-900">Jessie</p>
              <p className="text-gray-600 text-sm">Creative Explorer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher/Creator CTA */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-indigo-900 text-white p-12 rounded-2xl">
            <Sparkles className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Create & Share Your Own Lessons</h2>
            <p className="text-xl mb-8">
              We're looking for teachers and content creators to join our platform and help others unlock 
              their creativity. Share your knowledge, create specialized tutorials, and contribute to a 
              growing community of learners.
            </p>
            <button className="bg-white text-indigo-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-t from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Drawing Journey Today!</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join our community of artists and start creating amazing perspective drawings with confidence.
          </p>
          <button className="bg-indigo-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-indigo-700 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;