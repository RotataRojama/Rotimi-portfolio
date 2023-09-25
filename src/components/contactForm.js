import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './index.scss';
import axios from 'axios';

function ContactForm(props) {
  const { isDarkMode } = props;
  const [state] = useForm("mgejzkey");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false); // Track success notification

  if (state.succeeded) {
    // Display the success message if the form has been successfully submitted
    return (
      <div>
        <p>Thanks for joining!</p>
        {/* You can customize the success message here */}
      </div>
    );
  }

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSuccess = () => {
    // Display success notification
    setShowSuccess(true);

    // Clear the input fields and deselect the containers
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    emailInput.value = '';
    messageInput.value = '';
    setSelectedItems([]);

    // Hide success notification after a few seconds (adjust timeout as needed)
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <>
      {showSuccess ? (
        <div className={`success-notification ${isDarkMode ? 'darkModeText' : 'lightModeText'}`}>Form submitted successfully!</div>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const emailInput = e.target.querySelector('#email');
            const messageInput = e.target.querySelector('#message');

            if (!emailInput.checkValidity()) {
              alert('Please enter a valid email address.');
              return;
            }

            // Validate message input
            if (messageInput.value.trim() === '') {
              alert('Please enter a message.');
              return;
            }

            // Construct the form data including selectedItems
            const formData = new FormData(e.target);
            selectedItems.forEach((item) => {
              formData.append('selectedItems[]', item);
            });

            try {
                const response = await axios.post('https://formspree.io/f/mgejzkey', formData, {
                  // Include any necessary headers here
                });
            
                if (response.status === 200) {
                  // Handle the success response or redirect if needed
                  console.log('Form submitted successfully');
            
                  // Call the success handler
                  handleSuccess();
                } else {
                  throw new Error(`Formspree error: ${response.statusText}`);
                }
              } catch (error) {
                console.error('Form submission error:', error);
              }
          }}
          className='cmFormContainer'
        >
            <label htmlFor="email" className={`emailLabel ${isDarkMode ? 'darkModeText' : 'lightModeText'}`}>Your Email</label>
            <input id="email" type="email" name="email" className={isDarkMode ? 'inputDarkMode' : 'emailInput'} placeholder='abc@xyz.com' required/>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <p className={`cmCheckboxHeader ${isDarkMode ? 'darkModeText' : 'lightModeText'}`}>What do you need?</p>
            <div className='cmCheckbox'>
                {['Landing Page', 'Web Design', 'Animation', 'Maintenance'].map((item) => (
                    <div
                        key={item}
                        className={isDarkMode ? `checkbox-container-dark ${selectedItems.includes(item) ? `activeDark ` : ''}` : `checkbox-container ${selectedItems.includes(item) ? `active ` : ''}`}
                        onClick={() => toggleItem(item)}
                    >
                        <label className='checkboxLabel'>{item}</label>
                        <div className="checkbox-icon">
                            {selectedItems.includes(item) ? '✓' : '+'}
                        </div>
                    </div>
                ))}
            </div>
            <label htmlFor='message' className={`messageLabel ${isDarkMode ? 'darkModeText' : 'lightModeText'}`}>Leave a message</label>
            <textarea id="message" name="message" className={isDarkMode ? 'messageInputDark' : 'messageInput'} placeholder='Message...' />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting} className={isDarkMode ? 'cfButtonDark' : 'cfButton'}>
                Send a message
                <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M15.7656 10.5801L24.1528 12.409L22.3239 20.7962" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.84668 21.5918L24.0095 12.4999" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </form>
        )}
        </>
    )
}
export default ContactForm