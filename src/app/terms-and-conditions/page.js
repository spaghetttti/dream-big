// Файл: app/terms-and-conditions/page.js

export default function TermsAndConditionsPage() {
  return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1>Terms and Conditions</h1>

          <h2>1. SMS For Consent Communication</h2>
          <p>
            The phone numbers obtained as part of the SMS consent process will
            not be shared with third parties for marketing purposes.
          </p>

          <h2>2. Types of SMS Communications</h2>
          <p>
            If you have consented to receive text messages from Dream Big
            Transportation INC, you may receive text messages related to:
          </p>
          <ul>
            <li>Appointment reminders</li>
            <li>Meetings</li>
            <li>Follow-ups on cases</li>
          </ul>
          <p>
            <strong>Example Message:</strong>
          </p>
          <blockquote>
            “Hello, Thank you for contacting Dream Big Transportation INC, how
            can we help you? Reply STOP to opt-out at any time. Message and data
            rates may apply. For assistance, text HELP or visit our Privacy
            Policy and Terms and Conditions”
          </blockquote>

          <h2>3. Message Frequency</h2>
          <p>
            Our SMS message frequency will range from 50 to 1000 text messages
            daily across all users.
          </p>

          <h2>4. Potential Fees for SMS Messaging</h2>
          <p>
            Many carriers charge a fee for each message sent or received. This
            can vary depending on the carrier’s pricing structure and whether the
            message is sent domestically or internationally.
          </p>

          <h2>5. Opt-In Method</h2>
          <p>
            Customers can opt-in for SMS messaging from Dream Big
            Transportation INC through:
          </p>
          <ul>
            <li>Intake forms</li>
            <li>Verbally agreeing</li>
            <li>Filling out a paper form</li>
            <li>
              Visiting our website:{" "}
              <a
                href="https://dreambtransporting.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dreambtransporting.com/
              </a>
            </li>
          </ul>
          <p>
            This agreement for SMS will not be shared with third parties for
            marketing purposes.
          </p>

          <h2>6. Opt-Out</h2>
          <p>
            Customers can opt out of SMS messaging from Dream Big Transportation
            INC by replying STOP at any time to any received SMS message. Once
            opted out, they will receive no further SMS communication. Customers
            can opt back in at any time by replying START.
          </p>
        </div>
      </div>
  );
}