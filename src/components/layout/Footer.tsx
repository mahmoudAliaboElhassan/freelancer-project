"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Information Column */}
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 flex items-center gap-1"
                >
                  Add your free order{" "}
                  <span className="text-blue-400">طلب وصول</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Custom Links Column */}
          <div>
            <h3 className="font-semibold mb-4">Custom Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Evaluation System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Disputes System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Charging System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Bidding & Request System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Affiliate System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Black List
                </a>
              </li>
            </ul>
          </div>

          {/* Know More Column */}
          <div>
            <h3 className="font-semibold mb-4">Know More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Buyer Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Digital Kiosk service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Digital exhibition service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Account Verification
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Pay Site Fees
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Payment Method
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support Column */}
          <div>
            <h3 className="font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Guarantee of Rights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Points & Gifts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 flex items-center gap-1"
                >
                  Invite a Friend{" "}
                  <span className="text-blue-400">طلب وصول</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="text-center py-8">
          <div className="text-3xl font-bold text-blue-400">
            مـــتـــــمــــكــن.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm">
            <p>All rights reserved to Motamakin 2024</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400">
                Shipping policy
              </a>
              <a href="#" className="hover:text-blue-400">
                User Agreement
              </a>
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
