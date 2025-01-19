import React, { useState } from 'react';
import { Send } from 'lucide-react';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:momenshehadeh02@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section className="py-1 sm:py-2 px-1" id="contact">
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols gap-8 md:gap-12 items-center">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          </div>
      </div>
    </section>
  );
}
