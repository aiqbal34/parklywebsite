export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-12">Effective Date: November 2, 2025</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using Parkly ("the App"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed">
              Parkly is a platform that connects people looking for parking spaces ("Finders") with people who have parking spaces available to rent ("Renters"). We facilitate the transaction but are not a party to the parking agreement between users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
            <p className="text-gray-300 leading-relaxed">
              To use our service, you must:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-4">
              <li>Be at least 18 years old</li>
              <li>Provide accurate registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be responsible for all activity under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. For Renters (Listing Parking Spots)</h2>
            <p className="text-gray-300 leading-relaxed">
              When listing a parking spot, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-4">
              <li>Own or have legal authority to rent the parking space</li>
              <li>Provide accurate information about the spot</li>
              <li>Honor confirmed bookings</li>
              <li>Maintain the parking space in the described condition</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not discriminate against users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. For Finders (Booking Parking Spots)</h2>
            <p className="text-gray-300 leading-relaxed">
              When booking a parking spot, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-4">
              <li>Use the parking space only during the booked time</li>
              <li>Pay all applicable fees</li>
              <li>Follow any rules specified by the Renter</li>
              <li>Not sublet or transfer the parking space</li>
              <li>Leave the space in the same condition as found</li>
              <li>Report any issues promptly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Payments and Fees</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>All payments are processed securely through Stripe</li>
              <li>Parkly charges a service fee on each transaction</li>
              <li>Finders pay the full amount upfront</li>
              <li>Renters receive payment after booking completion</li>
              <li>Refunds are subject to our cancellation policy</li>
              <li>You are responsible for any applicable taxes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Cancellation Policy</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Finders may cancel bookings according to the timeline set by the Renter</li>
              <li>Late cancellations may result in reduced refunds</li>
              <li>Renters who cancel confirmed bookings may face penalties</li>
              <li>Repeated cancellations may result in account suspension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Prohibited Conduct</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Violate any laws or regulations</li>
              <li>Infringe on others' intellectual property rights</li>
              <li>Transmit harmful code or viruses</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Provide false or misleading information</li>
              <li>Attempt to circumvent our fee structure</li>
              <li>Use the service for illegal parking or activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Liability and Disclaimers</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Parkly is provided "as is" without warranties</li>
              <li>We do not guarantee the availability, quality, or safety of parking spots</li>
              <li>Users interact at their own risk</li>
              <li>We are not liable for disputes between users</li>
              <li>We are not responsible for property damage or theft</li>
              <li>Our liability is limited to the fees paid for the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Insurance and Indemnification</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Maintain appropriate insurance (auto, property, liability)</li>
              <li>Indemnify Parkly from claims arising from your use</li>
              <li>Release Parkly from liability for user-to-user issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Intellectual Property</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>All content, trademarks, and intellectual property belong to useparkly, LLC</li>
              <li>You may not copy, modify, or distribute our content without permission</li>
              <li>You grant us a license to use content you submit (photos, reviews, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may suspend or terminate your account if you:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Violate these terms</li>
              <li>Engage in fraudulent activity</li>
              <li>Repeatedly cancel confirmed bookings</li>
              <li>Receive multiple complaints from other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Dispute Resolution</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Any disputes will first be addressed through our support system</li>
              <li>If unresolved, disputes shall be settled by binding arbitration</li>
              <li>You waive the right to participate in class actions</li>
              <li>Arbitration will be conducted according to AAA rules</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Modifications to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">15. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These terms are governed by the laws of the United States and the state where useparkly, LLC is registered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">16. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For questions about these terms, contact us at:
            </p>
            <div className="text-gray-300 space-y-2">
              <p>Email: <a href="mailto:legal@useparkly.com" className="text-blue-500 hover:text-blue-400">legal@useparkly.com</a></p>
              <p>Support: <a href="mailto:support@useparkly.com" className="text-blue-500 hover:text-blue-400">support@useparkly.com</a></p>
              <p>Website: <a href="https://www.useparkly.com" className="text-blue-500 hover:text-blue-400">www.useparkly.com</a></p>
            </div>
            <p className="text-gray-300 mt-4">
              useparkly, LLC<br />
              All Rights Reserved © 2025
            </p>
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

