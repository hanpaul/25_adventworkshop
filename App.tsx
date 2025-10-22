
import React from 'react';

// --- HELPER COMPONENTS (Defined outside App to prevent re-renders) ---

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    {subtitle && <p className="text-brand-purple font-medium mb-2">{subtitle}</p>}
    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-purple">{title}</h2>
  </div>
);

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="bg-brand-purple/10 text-brand-purple p-3 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-serif text-brand-deep-purple">{title}</h3>
    </div>
    <div className="text-brand-text-light space-y-1">{children}</div>
  </div>
);

interface AgendaItemProps {
  time: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const AgendaItem: React.FC<AgendaItemProps> = ({ time, title, description, isLast = false }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div>
        <div className="flex items-center justify-center w-10 h-10 border-2 border-brand-purple rounded-full">
          <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
      </div>
      {!isLast && <div className="w-px h-full bg-gray-300"></div>}
    </div>
    <div className="pb-8">
      <p className="mb-2 text-sm font-semibold text-brand-purple uppercase">{time}</p>
      <p className="text-xl font-bold text-brand-deep-purple">{title}</p>
      <p className="text-brand-text-light mt-1">{description}</p>
    </div>
  </div>
);


// --- SVG ICONS ---

const CalendarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);
const LocationIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const SpeakerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);
const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);


// --- MAIN APP COMPONENT ---

// Fix: Export App as a named export
export const App: React.FC = () => {

  const agenda = [
    { time: '1:00 PM', title: 'Arrival & Welcome Music', description: 'Settle in and prepare for an afternoon of reflection.' },
    { time: '1:10 PM', title: 'Introduction & Opening Prayer', description: 'Why we\'re here, what to expect, and an opening welcome from Fr. Jung or Fr. Gabriel.' },
    { time: '1:30 PM', title: 'Talk 1: Theology of the Family', description: 'Understanding the family as the domestic church, the smallest unit of parish and society.' },
    { time: '2:15 PM', title: 'Talk 2: Challenges with Families Today', description: 'An interactive discussion on modern challenges and pressures affecting family life.' },
    { time: '3:00 PM', title: 'Snack Break', description: 'Enjoy light refreshments and fellowship.' },
    { time: '3:15 PM', title: 'Talk 3: Applications on Building Relationships', description: 'Practical advice for singles, couples, and parents on building God-centered relationships.' },
    { time: '4:00 PM', title: 'Wrap Up & Q&A', description: 'An open forum to ask questions and share insights.' },
    { time: '4:20 PM', title: 'Closing Prayer', description: 'Concluding our workshop with a final prayer.' },
  ];
  
  // Base64 encoded poster image
  // Fix: Explicitly type posterImage as string to help with type inference
  const posterImage: string = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4gHYSUNDX1BST1ZJTEUAAQEAAAHIbGNtcwIQAABtbnRyUkdCIFhZWiAH4gADABQACQAOAB1hY3NwTVNGAAAAABzYnN0AAAAAAAAAAAAAAAAAAAAAFlYW...';

  return (
    <div className="min-h-screen bg-brand-light-purple font-sans text-gray-800">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-brand-deep-purple to-brand-purple text-white py-16 px-4 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Abstract shapes for decoration */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-brand-light-purple opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-light-purple opacity-10 rounded-full transform translate-x-1/2 translate-y-1/2"></div>

        <div className="relative container mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold leading-tight mb-4">
            Family Enrichment Workshop
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8">
            Strengthening Bonds, Nurturing Faith: A Day of Spiritual Growth and Practical Guidance for Every Family.
          </p>
          <a
            href="#register"
            className="inline-block bg-white text-brand-deep-purple font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeader
            subtitle="Our Mission"
            title="Building Stronger Families Through Faith"
          />
          <div className="max-w-3xl mx-auto text-center text-lg text-brand-text-light leading-relaxed">
            <p className="mb-4">
              Join us for a transformative workshop designed to empower families with tools and insights rooted in faith.
              Whether you're single preparing for marriage, a newlywed, or seasoned parents, this event offers a unique opportunity to deepen your understanding of the family's role in the Church and society.
            </p>
            <p>
              We'll explore theological foundations, tackle contemporary challenges, and provide actionable strategies to foster loving, resilient, and God-centered relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Details Section */}
      <section id="details" className="bg-brand-gray py-20 px-4">
        <div className="container mx-auto">
          <SectionHeader
            subtitle="Event Information"
            title="Key Details You Need to Know"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <InfoCard
              icon={<CalendarIcon />}
              title="Date & Time"
            >
              <p>Saturday, October 26, 2024</p>
              <p>1:00 PM - 5:00 PM</p>
            </InfoCard>
            <InfoCard
              icon={<LocationIcon />}
              title="Venue"
            >
              <p>St. Michael the Archangel Parish Hall</p>
              <p>123 Divine Way, City, State 98765</p>
            </InfoCard>
            <InfoCard
              icon={<SpeakerIcon />}
              title="Speakers"
            >
              <p>Fr. Jung, Fr. Gabriel</p>
              <p>And special guest speakers!</p>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeader
            subtitle="What to Expect"
            title="Our Workshop Schedule"
          />
          <div className="max-w-xl mx-auto">
            {agenda.map((item, index) => (
              <AgendaItem
                key={index}
                time={item.time}
                title={item.title}
                description={item.description}
                isLast={index === agenda.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Poster Section (Example usage of posterImage) */}
      <section id="poster" className="bg-brand-gray py-20 px-4">
        <div className="container mx-auto text-center">
          <SectionHeader
            subtitle="Visual Overview"
            title="Our Workshop Poster"
          />
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl">
            {/* Using the posterImage string in an img tag */}
            <img src={posterImage} alt="Workshop Poster" className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <SectionHeader
            subtitle="Join Us"
            title="Secure Your Spot Today!"
          />
          <p className="text-lg text-brand-text-light mb-8 max-w-2xl mx-auto">
            Don't miss this enriching experience! Registration is free, but space is limited.
            Sign up now to ensure your family's participation.
          </p>
          <button
            className="inline-block bg-brand-purple text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-brand-deep-purple hover:scale-105 transition-all duration-300"
            onClick={() => alert('Registration form coming soon!')}
          >
            Register Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-brand-deep-purple text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4 text-lg font-serif font-semibold">Family Enrichment Workshop</p>
          <p className="text-sm text-gray-300 mb-2">
            &copy; {new Date().getFullYear()} St. Michael the Archangel Parish. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
