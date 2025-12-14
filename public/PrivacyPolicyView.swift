//
//  PrivacyPolicyView.swift
//  parking
//
//  Created by SlothMaster on 11/02/2025.
//  Privacy Policy display view
//

import SwiftUI

/// View displaying the app's privacy policy
struct PrivacyPolicyView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                Text("Privacy Policy")
                    .font(.title)
                    .fontWeight(.bold)
                    .padding(.bottom, 8)
                
                Text("Effective Date: November 2, 2025")
                    .font(.caption)
                    .foregroundColor(.secondary)
                
                Group {
                    SectionHeader(title: "1. Information We Collect")
                    SectionText(text: """
                    We collect information that you provide directly to us, including:
                    • Account information (name, email, phone number)
                    • Location data when you use our services
                    • Payment information for transactions
                    • Parking spot listings and booking information
                    • Communications with other users through our platform
                    """)
                    
                    SectionHeader(title: "2. How We Use Your Information")
                    SectionText(text: """
                    We use the information we collect to:
                    • Provide, maintain, and improve our services
                    • Process transactions and send related information
                    • Send you technical notices and support messages
                    • Respond to your comments and questions
                    • Detect, prevent, and address fraud and security issues
                    """)
                    
                    SectionHeader(title: "3. Information Sharing")
                    SectionText(text: """
                    We do not sell your personal information. We may share your information:
                    • With other users as necessary to provide our services (e.g., sharing your contact info with spot owners when you book)
                    • With service providers who assist our operations
                    • When required by law or to protect rights and safety
                    • In connection with a merger, sale, or acquisition
                    """)
                    
                    SectionHeader(title: "4. Data Security")
                    SectionText(text: """
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                    """)
                    
                    SectionHeader(title: "5. Your Rights")
                    SectionText(text: """
                    You have the right to:
                    • Access and update your personal information
                    • Delete your account and associated data
                    • Opt-out of marketing communications
                    • Request a copy of your data
                    • Restrict processing of your information
                    """)
                    
                    SectionHeader(title: "6. Location Data")
                    SectionText(text: """
                    Our app uses location services to help you find nearby parking spots and to enable location-based features. You can control location permissions through your device settings. Disabling location services may limit functionality.
                    """)
                    
                    SectionHeader(title: "7. Third-Party Services")
                    SectionText(text: """
                    We use third-party services including:
                    • Firebase (Google) for authentication and data storage
                    • Stripe for payment processing
                    • MapKit/Google Maps for location services
                    
                    These services have their own privacy policies governing their use of information.
                    """)
                    
                    SectionHeader(title: "8. Children's Privacy")
                    SectionText(text: """
                    Our service is not intended for users under 18 years of age. We do not knowingly collect information from children under 18.
                    """)
                    
                    SectionHeader(title: "9. Changes to This Policy")
                    SectionText(text: """
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
                    """)
                    
                    SectionHeader(title: "10. Contact Us")
                    SectionText(text: """
                    If you have questions about this privacy policy, please contact us at:
                    
                    Email: support@useparkly.com
                    Website: www.useparkly.com
                    """)
                }
            }
            .padding()
        }
        .navigationTitle("Privacy Policy")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct SectionHeader: View {
    let title: String
    
    var body: some View {
        Text(title)
            .font(.headline)
            .fontWeight(.semibold)
            .padding(.top, 8)
    }
}

struct SectionText: View {
    let text: String
    
    var body: some View {
        Text(text)
            .font(.body)
            .foregroundColor(.secondary)
            .fixedSize(horizontal: false, vertical: true)
    }
}

#Preview {
    NavigationView {
        PrivacyPolicyView()
    }
}
