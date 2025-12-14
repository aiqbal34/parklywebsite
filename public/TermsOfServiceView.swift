//
//  TermsOfServiceView.swift
//  parking
//
//  Created by SlothMaster on 11/02/2025.
//  Terms of Service display view
//

import SwiftUI

/// View displaying the app's terms of service
struct TermsOfServiceView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                Text("Terms of Service")
                    .font(.title)
                    .fontWeight(.bold)
                    .padding(.bottom, 8)
                
                Text("Effective Date: November 2, 2025")
                    .font(.caption)
                    .foregroundColor(.secondary)
                
                Group {
                    SectionHeader(title: "1. Acceptance of Terms")
                    SectionText(text: """
                    By accessing and using Parkly ("the App"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                    """)
                    
                    SectionHeader(title: "2. Description of Service")
                    SectionText(text: """
                    Parkly is a platform that connects people looking for parking spaces ("Finders") with people who have parking spaces available to rent ("Renters"). We facilitate the transaction but are not a party to the parking agreement between users.
                    """)
                    
                    SectionHeader(title: "3. User Accounts")
                    SectionText(text: """
                    To use our service, you must:
                    • Be at least 18 years old
                    • Provide accurate registration information
                    • Maintain the security of your account credentials
                    • Be responsible for all activity under your account
                    • Notify us immediately of any unauthorized access
                    """)
                    
                    SectionHeader(title: "4. For Renters (Listing Parking Spots)")
                    SectionText(text: """
                    When listing a parking spot, you agree to:
                    • Own or have legal authority to rent the parking space
                    • Provide accurate information about the spot
                    • Honor confirmed bookings
                    • Maintain the parking space in the described condition
                    • Comply with all applicable laws and regulations
                    • Not discriminate against users
                    """)
                    
                    SectionHeader(title: "5. For Finders (Booking Parking Spots)")
                    SectionText(text: """
                    When booking a parking spot, you agree to:
                    • Use the parking space only during the booked time
                    • Pay all applicable fees
                    • Follow any rules specified by the Renter
                    • Not sublet or transfer the parking space
                    • Leave the space in the same condition as found
                    • Report any issues promptly
                    """)
                    
                    SectionHeader(title: "6. Payments and Fees")
                    SectionText(text: """
                    • All payments are processed securely through Stripe
                    • Parkly charges a service fee on each transaction
                    • Finders pay the full amount upfront
                    • Renters receive payment after booking completion
                    • Refunds are subject to our cancellation policy
                    • You are responsible for any applicable taxes
                    """)
                    
                    SectionHeader(title: "7. Cancellation Policy")
                    SectionText(text: """
                    • Finders may cancel bookings according to the timeline set by the Renter
                    • Late cancellations may result in reduced refunds
                    • Renters who cancel confirmed bookings may face penalties
                    • Repeated cancellations may result in account suspension
                    """)
                    
                    SectionHeader(title: "8. Prohibited Conduct")
                    SectionText(text: """
                    You may not:
                    • Violate any laws or regulations
                    • Infringe on others' intellectual property rights
                    • Transmit harmful code or viruses
                    • Harass, abuse, or harm other users
                    • Provide false or misleading information
                    • Attempt to circumvent our fee structure
                    • Use the service for illegal parking or activities
                    """)
                    
                    SectionHeader(title: "9. Liability and Disclaimers")
                    SectionText(text: """
                    • Parkly is provided "as is" without warranties
                    • We do not guarantee the availability, quality, or safety of parking spots
                    • Users interact at their own risk
                    • We are not liable for disputes between users
                    • We are not responsible for property damage or theft
                    • Our liability is limited to the fees paid for the service
                    """)
                    
                    SectionHeader(title: "10. Insurance and Indemnification")
                    SectionText(text: """
                    You agree to:
                    • Maintain appropriate insurance (auto, property, liability)
                    • Indemnify Parkly from claims arising from your use
                    • Release Parkly from liability for user-to-user issues
                    """)
                    
                    SectionHeader(title: "11. Intellectual Property")
                    SectionText(text: """
                    • All content, trademarks, and intellectual property belong to useparkly, LLC
                    • You may not copy, modify, or distribute our content without permission
                    • You grant us a license to use content you submit (photos, reviews, etc.)
                    """)
                    
                    SectionHeader(title: "12. Termination")
                    SectionText(text: """
                    We may suspend or terminate your account if you:
                    • Violate these terms
                    • Engage in fraudulent activity
                    • Repeatedly cancel confirmed bookings
                    • Receive multiple complaints from other users
                    """)
                    
                    SectionHeader(title: "13. Dispute Resolution")
                    SectionText(text: """
                    • Any disputes will first be addressed through our support system
                    • If unresolved, disputes shall be settled by binding arbitration
                    • You waive the right to participate in class actions
                    • Arbitration will be conducted according to AAA rules
                    """)
                    
                    SectionHeader(title: "14. Modifications to Terms")
                    SectionText(text: """
                    We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of new terms.
                    """)
                    
                    SectionHeader(title: "15. Governing Law")
                    SectionText(text: """
                    These terms are governed by the laws of the United States and the state where useparkly, LLC is registered.
                    """)
                    
                    SectionHeader(title: "16. Contact Information")
                    SectionText(text: """
                    For questions about these terms, contact us at:
                    
                    Email: legal@useparkly.com
                    Support: support@useparkly.com
                    Website: www.useparkly.com
                    
                    useparkly, LLC
                    All Rights Reserved © 2025
                    """)
                }
            }
            .padding()
        }
        .navigationTitle("Terms of Service")
        .navigationBarTitleDisplayMode(.inline)
    }
}

#Preview {
    NavigationView {
        TermsOfServiceView()
    }
}
