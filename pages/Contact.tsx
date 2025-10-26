import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.trim() && request.trim() && email.trim() && emailRegex.test(email)) {
      const recipient = 'tuanminhdoan20@gmail.com';
      const subject = `Contact Form Inquiry from ${name}`;
      let body = `
You've received a new message from your website contact form.

--------------------------------
Sender Details
--------------------------------
Name: ${name}
Email: ${email}
--------------------------------

Request:
${request}
      `;

      if (imageFile) {
        body += `\n\n--------------------------------\nNOTE: The user has selected a reference image named "${imageFile.name}". Please ask them to send it if they haven't attached it to this email.`;
      }
      
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
      window.location.href = mailtoLink;

      setIsSubmitted(true);
    } else {
        alert('Please fill out all required fields with valid information.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="max-w-lg w-full">
        {isSubmitted ? (
          <div className="p-8 bg-white border border-green-300 rounded-3xl dark:bg-gray-800 dark:border-green-700">
            <h2 className="text-3xl font-bold tracking-wider text-green-600 dark:text-green-400">Thank You!</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Your request has been prepared. Please check your email client to send it.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-bold tracking-wider dark:text-gray-100">Get in Touch</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              For inquiries, collaborations, or custom orders, please fill out the form below.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 text-left space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-transparent border border-gray-300 rounded-2xl p-3 text-black dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-shadow"
                />
              </div>
               <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border border-gray-300 rounded-2xl p-3 text-black dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="request" className="block text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Request</label>
                <textarea
                  id="request"
                  rows={5}
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  required
                  className="w-full bg-transparent border border-gray-300 rounded-2xl p-3 text-black dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-shadow"
                />
              </div>
              {/* Image Upload */}
              <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Reference Image (Optional)</label>
                   <label htmlFor="file-upload" className="w-full cursor-pointer bg-transparent border border-gray-300 rounded-2xl p-3 flex items-center justify-center text-gray-500 dark:text-gray-400 dark:border-gray-600 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                      {imageFile ? imageFile.name : 'Upload an image'}
                  </label>
                  <input id="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
              </div>
              <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300">
                Submit Request
              </button>
            </form>
            <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
              Please note: We currently only serve customers in the Montreal area.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;