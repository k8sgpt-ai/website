import React from 'react';

interface MailchimpPopupProps {
  onClose: () => void;
}

const MailchimpPopup: React.FC<MailchimpPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed bottom-0 left-0 z-50">
      <div className="bg-white rounded-tr-lg shadow-xl p-6 max-w-md transform mailchimp-popup">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close popup"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div id="mc_embed_signup" className="w-full">
          <form
            action="https://k8sgpt.us12.list-manage.com/subscribe/post?u=398242b6690b8c2592ee75576&amp;id=2a82bb92c3&amp;f_id=002ab8e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <h2 className="text-xl font-bold mb-3 text-gray-900">Stay Updated with K8sGPT</h2>
              <div className="text-sm text-gray-600 mb-3">
                <span className="text-red-500">*</span> indicates required
              </div>
              <div className="mb-3">
                <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                  id="mce-EMAIL"
                  required
                />
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input
                  type="text"
                  name="b_398242b6690b8c2592ee75576_2a82bb92c3"
                  tabIndex={-1}
                  value=""
                />
              </div>
              <div className="mt-4">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
                  value="Subscribe"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailchimpPopup; 