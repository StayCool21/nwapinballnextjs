import React from 'react';
import { Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

const PrivacyPolicyPage: React.FC = () => {
    const router = useRouter();

    const handleClose = () => {
        router.push('/'); // Navigate back to the homepage
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', position: 'relative' }}>
            <span
                onClick={handleClose}
                style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    cursor: 'pointer',
                    color: '#666',
                    fontSize: '24px',
                    transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'red')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#666')}
            >
                &#10006;
            </span>
            <Text h1>Privacy Policy</Text>
            <p>
                At NWA Pinball, we are committed to respecting your privacy and protecting your personal
                information. This Privacy Policy outlines how we handle the information we collect when you
                visit our website or use our services.
            </p>

            <h2>Information Collection</h2>
            <p>
                When you create an account with NWA Pinball, we collect your name, password, and email
                address. We securely store this information to provide you with access to our services and
                to enhance your user experience.
            </p>

            <h2>Data Security</h2>
            <p>
                We take the security of your personal information seriously. All passwords are encrypted and
                hashed to protect them from unauthorized access by hackers or other malicious parties.
            </p>

            <h2>Event History</h2>
            <p>
                As you use our website, we store information about user activity that allows us to
                personalize your experience and recommend future events that may be of interest to you.
            </p>

            <h2>Policy Updates</h2>
            <p>
                We reserve the right to update or change our Privacy Policy at any time. Any updates will be
                posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have any questions about our Privacy Policy or concerns about how we handle your
                personal information, please contact us at nwapinball@yahoo.com.
            </p>
        </div>
    );
};

export default PrivacyPolicyPage;
