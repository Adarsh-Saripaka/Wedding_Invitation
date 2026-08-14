import { MapPin, Navigation } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const venues = [
  {
    id: 'venue-groom-making',
    eventName: 'Groom Making',
    venueName: 'Sri Rama Residency',
    address: 'New Karasa, Marripalem, Visakhapatnam',
    directionsLink: 'https://maps.app.goo.gl/iMM29SkwCkH4vao66?g_st=ac',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Sri%20Rama%20Residency%20New%20Karasa%20Visakhapatnam&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'venue-haldi',
    eventName: 'Haldi',
    venueName: 'Sunrise Iconic Resort',
    address: 'Bheemunipatnam, Visakhapatnam',
    directionsLink: 'https://maps.google.com/?q=Sunrise+Iconic+Resort',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Sunrise%20Iconic%20Resort%20Bheemunipatnam&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'venue-marriage',
    eventName: 'Marriage',
    venueName: 'Metro Convention',
    address: 'Vijayanagaram',
    directionsLink: 'https://maps.google.com/?q=Metro+Convention+Vizianagaram',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Metro%20Convention%20Vizianagaram&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
];

export default function Locations() {
  return (
    <section className="locations-section" id="locations">
      <ScrollReveal>
        <div className="locations-header">
          <span className="locations-ornament">✧ ❦ ✧</span>
          <h2 className="section-title">Venues &amp; Locations</h2>
          <p className="section-subtitle">
            Find your way to each celebration with the maps below.
          </p>
        </div>
      </ScrollReveal>

      <div className="locations-grid">
        {venues.map((venue, idx) => (
          <ScrollReveal key={venue.id} delay={idx + 1}>
            <div className="location-card">
              {/* Corner flourishes */}
              <span className="location-corner top-left">❧</span>
              <span className="location-corner top-right">❧</span>
              <span className="location-corner bottom-left">❧</span>
              <span className="location-corner bottom-right">❧</span>

              <span className="location-event-label">{venue.eventName}</span>

              <div className="location-venue-heading">
                <MapPin size={18} className="location-pin" />
                <h3 className="location-venue-name">{venue.venueName}</h3>
              </div>
              <p className="location-address">{venue.address}</p>

              <div className="location-map">
                <iframe
                  src={venue.mapEmbedUrl}
                  title={`${venue.venueName} Map`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href={venue.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-directions"
              >
                <Navigation size={14} />
                Get Directions
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
