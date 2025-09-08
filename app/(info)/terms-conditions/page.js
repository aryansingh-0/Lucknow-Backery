'use client';
import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-highlight mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 mb-6 text-sm md:text-base">
          For the purpose of these Terms and Conditions, the terms{" "}
          <span className="font-semibold">"we", "us", "our"</span> shall mean{" "}
          <span className="font-semibold">ARYAN SINGH</span>, whose registered/operational
          office is at <span className="font-medium">Jaunpur, Uttar Pradesh, India – 222128</span>. 
          The terms <span className="font-semibold">"you", "your", "user", "visitor"</span> 
          shall mean any natural or legal person visiting our website and/or purchasing from us.
        </p>

        <div className="space-y-6 text-gray-800 text-sm md:text-base">
          <div>
            <h2 className="font-semibold text-lg text-highlight">1. Website Content</h2>
            <p>
              The content of this website is subject to change without prior notice. 
              While we strive for accuracy, we make no warranties regarding completeness, 
              reliability, or suitability for any purpose. You acknowledge that the 
              website may contain inaccuracies, and we expressly exclude liability 
              to the fullest extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">2. Use of Information & Products</h2>
            <p>
              Any use of materials, information, or products from this website is 
              at your own risk. It is your responsibility to ensure that services 
              or products meet your specific requirements.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">3. Intellectual Property</h2>
            <p>
              All content on this website, including design, layout, graphics, 
              and text, is owned by or licensed to us. Unauthorized reproduction 
              is prohibited. All third-party trademarks are acknowledged on the site.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">4. Unauthorized Use</h2>
            <p>
              Any unauthorized use of materials or information may result in claims 
              for damages and/or constitute a criminal offense.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">5. External Links</h2>
            <p>
              Our website may include links to third-party websites for your convenience. 
              We have no control over and accept no responsibility for their content or policies.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">6. Linking to Our Website</h2>
            <p>
              You may not create a link to our website without prior written consent from us.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">7. Governing Law & Disputes</h2>
            <p>
              Any disputes arising out of the use of our website or purchases from us 
              will be governed by the laws of <span className="font-medium">India</span>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">8. Payment & Liability</h2>
            <p>
              We are not liable for any loss or damage resulting from declined transactions, 
              including cases where the cardholder has exceeded preset limits with their bank.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
