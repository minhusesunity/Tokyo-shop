import React from 'react';

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto">
    <code className="text-sm text-gray-800 dark:text-gray-200">{children}</code>
  </pre>
);

const Deployment: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-left">
      <h1 className="text-4xl font-bold tracking-wider mb-6 dark:text-gray-100">Deployment &amp; Setup Guide</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-300">
        Congratulations on your new website! Follow these steps to get it live and start receiving customer requests.
      </p>

      {/* Step 1: Confirm Email */}
      <div className="p-6 bg-white border border-gray-200 rounded-2xl dark:bg-gray-800 dark:border-gray-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">Step 1: Confirm Your Email Address</h2>
        <p className="mb-4">
          This website uses your default email client (like Outlook, Apple Mail, or Gmail) to send customer requests. We have configured the site to send all requests to <strong>tuanminhdoan20@gmail.com</strong>.
        </p>
        <p className="font-semibold mb-2">The change has been made in two files:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><code>pages/Shop.tsx</code> (for item requests)</li>
          <li><code>pages/Contact.tsx</code> (for contact form submissions)</li>
        </ul>
        <p>In both files, the code now looks like this:</p>
        <CodeBlock>
          const recipient = 'tuanminhdoan20@gmail.com';
        </CodeBlock>
        <p>
          There's nothing you need to change here, but it's important to know where this is configured if you ever want to change the recipient email in the future.
        </p>
      </div>

      {/* Step 2: Deploy Website */}
      <div className="p-6 bg-white border border-gray-200 rounded-2xl dark:bg-gray-800 dark:border-gray-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">Step 2: Deploy Your Website</h2>
        <p className="mb-4">
          Yes, deploying with Google Domains and Google Cloud is a robust and scalable solution. The easiest way to host a static site like this on Google Cloud is by using <strong>Google Cloud Storage</strong>.
        </p>
        <h3 className="text-lg font-semibold mb-2">Deploying with Google Cloud Storage:</h3>
        <ol className="list-decimal list-inside space-y-3">
          <li><strong>Build your project:</strong> In your project terminal, run the build command, which is typically <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">npm run build</code>. This will create a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">dist</code> folder containing your final website files.</li>
          <li><strong>Set up Google Cloud:</strong> Create an account at <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">cloud.google.com</a> and create a new project. You may be eligible for a free trial with credits.</li>
          <li><strong>Create a Cloud Storage Bucket:</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>In the Google Cloud console, navigate to "Cloud Storage" and create a new "bucket".</li>
              <li><strong>Important:</strong> Your bucket name must exactly match your domain name. For example, if your domain is `www.yourshop.com`, your bucket name must be `www.yourshop.com`.</li>
            </ul>
          </li>
          <li><strong>Upload Your Files:</strong> Drag and drop the entire contents of your local <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">dist</code> folder into the bucket you just created.</li>
          <li><strong>Make the Bucket Public:</strong> To allow visitors to see your website, you need to grant public access. Select the "Permissions" tab for your bucket, click "Grant Access", and add a new principal called <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">allUsers</code> with the role of <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Storage Object Viewer</code>.</li>
          <li><strong>Configure Website Settings:</strong> Edit the bucket's "Website configuration" and set the "Main page" to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">index.html</code>.</li>
          <li><strong>Connect Your Google Domain:</strong>
             <ul className="list-disc list-inside ml-6 mt-2">
                <li>Go to your Google Domains dashboard.</li>
                <li>Navigate to the "DNS" settings for your domain.</li>
                <li>Create a new `CNAME` record. Set the "Host name" to `www` and the "Data" to `c.storage.googleapis.com.` (don't forget the period at the end).</li>
             </ul>
          </li>
          <li><strong>Done!</strong> DNS changes can take some time to propagate. After a while, your domain will point to your new website hosted on Google Cloud Storage.</li>
        </ol>
      </div>
      
       {/* Step 3: FAQ */}
      <div className="p-6 bg-white border border-gray-200 rounded-2xl dark:bg-gray-800 dark:border-gray-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">Frequently Asked Questions</h2>
        <h3 className="text-lg font-semibold mb-2">Do I need a separate email address other than tuanminhdoan20@gmail.com?</h3>
        <p>
          <strong>No, you do not need a separate email address.</strong> Using your personal `tuanminhdoan20@gmail.com` is perfectly fine and will work correctly.
        </p>
        <p className="mt-3">
          However, for a more professional look, many businesses choose to use an email address associated with their domain (e.g., `contact@yourshop.com`). You can set this up through <a href="https://workspace.google.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">Google Workspace</a>, which is a paid service.
        </p>
        <p className="mt-3">
          <strong>Recommendation:</strong> Start with your current Gmail address. If your shop grows, you can always upgrade to a professional email address later. It is not a technical requirement for the website to function.
        </p>
      </div>

       {/* Step 4: What's Next? */}
      <div className="p-6 bg-white border border-gray-200 rounded-2xl dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">What's Next? (Optional Improvements)</h2>
        <p className="mb-4">
          The current <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">mailto:</code> method is simple but relies on the user having an email client configured. For a more seamless experience, consider using a third-party form handling service like:
        </p>
         <ul className="list-disc list-inside my-4 space-y-2">
          <li><a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">Formspree</a></li>
          <li><a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline dark:text-emerald-400">EmailJS</a></li>
        </ul>
        <p>
          These services allow you to handle form submissions without opening an email client, which is a better user experience and helps protect your email from being scraped by bots.
        </p>
      </div>

    </div>
  );
};

export default Deployment;
