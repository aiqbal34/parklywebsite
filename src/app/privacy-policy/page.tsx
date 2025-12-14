export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">Effective Date: November 2, 2025</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-4">
              <li>Account information (name, email, phone number)</li>
              <li>Location data when you use our services</li>
              <li>Payment information for transactions</li>
              <li>Parking spot listings and booking information</li>
              <li>Communications with other users through our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Detect, prevent, and address fraud and security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell your personal information. We may share your information:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-4">
              <li>With other users as necessary to provide our services (e.g., sharing your contact info with spot owners when you book)</li>
              <li>With service providers who assist our operations</li>
              <li>When required by law or to protect rights and safety</li>
              <li>In connection with a merger, sale, or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-4">
              <li>Access and update your personal information</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Restrict processing of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Location Data</h2>
            <p className="text-gray-300 leading-relaxed">
              Our app uses location services to help you find nearby parking spots and to enable location-based features. You can control location permissions through your device settings. Disabling location services may limit functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              We use third-party services including:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-4">
              <li>Firebase (Google) for authentication and data storage</li>
              <li>Stripe for payment processing</li>
              <li>MapKit/Google Maps for location services</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              These services have their own privacy policies governing their use of information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our service is not intended for users under 18 years of age. We do not knowingly collect information from children under 18.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about this privacy policy, please contact us at:
            </p>
            <div className="mt-4 text-gray-300 space-y-2">
              <p>Email: <a href="mailto:support@useparkly.com" className="text-blue-500 hover:text-blue-400">support@useparkly.com</a></p>
              <p>Website: <a href="https://www.useparkly.com" className="text-blue-500 hover:text-blue-400">www.useparkly.com</a></p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <a href="/" className="text-blue-500 hover:text-blue-400 transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

