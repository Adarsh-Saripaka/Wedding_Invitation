import { Calendar, MapPin, Crown, Sparkles, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Events() {
  const events = [
    {
      id: 'groom-making',
      name: 'Groom Making',
      titleClass: 'groom-making',
      date: '24th August 2026',
      time: '07:00 AM onwards',
      venue: 'Sri Rama Residency',
      venueAddress: 'New Karasa, Marripalem, Visakhapatnam',
      venueLink: 'https://maps.app.goo.gl/iMM29SkwCkH4vao66?g_st=ac',
      image: '/images/groom-making.png',
      calendarEvent: {
        text: 'Ravi Teja & Sravya - Groom Making Ceremony',
        dates: '20260824T070000/20260824T093000',
        details: 'Join us for the Groom Making Ceremony of Ravi Teja.',
        location: 'Sri Rama Residency, New Karasa, Marripalem, Visakhapatnam',
      },
      icon: <Crown size={28} className="text-gold" />,
    },
    {
      id: 'haldi',
      name: 'Haldi',
      titleClass: 'haldi',
      date: '24th August 2026',
      time: '10:00 AM onwards',
      venue: 'Sunrise Iconic Resort',
      venueAddress: 'Bheemunipatnam, Visakhapatnam',
      venueLink: 'https://maps.app.goo.gl/yS5V5Loft7ehBAiMA?g_st=iw',
      image: '/images/haldi.png',
      calendarEvent: {
        text: 'Ravi Teja & Sravya - Haldi Ceremony',
        dates: '20260824T100000/20260824T140000',
        details: 'Join us for the festive Haldi Ceremony.',
        location: 'Sunrise Iconic Resort, Visakhapatnam',
      },
      icon: <Sparkles size={28} className="text-gold" style={{ color: 'var(--gold-muted)' }} />,
    },
    {
      id: 'marriage',
      name: 'Marriage',
      titleClass: 'marriage',
      date: '26th August 2026',
      time: '09:00 AM onwards',
      venue: 'Metro Convention',
      venueAddress: 'Vijayanagaram',
      venueLink: 'https://maps.google.com/?q=Metro+Convention+Vizianagaram',
      image: '/images/marriage.png',
      calendarEvent: {
        text: 'Ravi Teja & Sravya - Wedding Ceremony',
        dates: '20260826T090000/20260826T150000',
        details: 'Join us for the auspicious Wedding Ceremony of Ravi Teja & Sravya.',
        location: 'Metro Convention, Vijayanagaram',
      },
      icon: <Heart size={28} className="text-maroon" style={{ color: 'var(--maroon)' }} />,
    },
  ];

  const getGoogleCalendarUrl = (ev: typeof events[0]['calendarEvent']) => {
    const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    return `${base}&text=${encodeURIComponent(ev.text)}&dates=${ev.dates}&details=${encodeURIComponent(ev.details)}&location=${encodeURIComponent(ev.location)}`;
  };

  return (
    <section className="events-section" id="events">
      <ScrollReveal>
        <h2 className="section-title">Wedding Events</h2>
        <p className="section-subtitle">
          Celebrate these beautiful milestones of our new beginning with us.
        </p>
      </ScrollReveal>

      <div className="events-grid">
        {events.map((event, idx) => (
          <ScrollReveal key={event.id} delay={idx + 1}>
            <div className="event-card">
              {/* Invitation Image */}
              <div className="event-invitation-image">
                <img
                  src={event.image}
                  alt={`${event.name} Ceremony Invitation`}
                  loading="lazy"
                />
              </div>

              <div className="event-card-details">
                <div className="event-icon">{event.icon}</div>
                <h3 className={`event-name ${event.titleClass}`}>{event.name}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-time">{event.time}</p>
                
                <div className="event-venue-container">
                  <MapPin size={16} className="venue-pin-icon" />
                  <div className="venue-details">
                    <a
                      href={event.venueLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="venue-link"
                    >
                      {event.venue}
                    </a>
                    <span className="venue-subtext">{event.venueAddress}</span>
                  </div>
                </div>

                <a
                  href={getGoogleCalendarUrl(event.calendarEvent)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-calendar"
                >
                  <Calendar size={14} />
                  Add to Google Calendar
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
