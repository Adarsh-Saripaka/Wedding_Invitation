import ScrollReveal from './ScrollReveal';

export default function WelcomeSection() {
  return (
    <section className="welcome-section" id="welcome">
      <ScrollReveal>
        <div className="welcome-container-img">
          <div className="welcome-img-wrapper">
            <img src="/images/invitation_welcome.jpg" alt="Welcome to the Wedding Ceremony of Ravi Teja & Sravya" />
          </div>
          <div className="welcome-overlay-effect" />
        </div>
      </ScrollReveal>
    </section>
  );
}
