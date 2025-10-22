
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

const App: React.FC = () => {

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
  const posterImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIbGNtcwIQAABtbnRyUkdCIFhZWiAH4gADABQACQAOAB1hY3NwTVNGVAAAAABzYXdzY3RyeAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWhhbmRhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADDnekRlc2MAAAGYAAAAaGFkbWwAAAHYAAAAEnclbWIAAAHoAAAAFGJrcHQAAAH4AAAAFGdYWVoAAAIIAAAAFGdUUkMAAAIUAAAAEGJUUkMAAAIUAAAAEGJUUkMAAAIUAAAAEGRtbmQAAAIwAAAAJGRtZGQAAAJ8AAAAJGx1bWkAAAK8AAAAFG1lYXMAAALEAAAAJHRlY2gAAALgAAAADnZpZXcAAALYAAAAJHZlZGQAAALsAAAAH3d0cHQAAAMEAAAAFGc1dHQAAAMYAAAAFHNmMzIAAAMsAAAAEm1tb2QAAANAAAAAFmJ0aWcAAANcAAAADnByb2YAAANsAAAAN2MtZDEAAAN8AAAAJGNoYWQAAAOAAAAAInZlcnQAAAPAAAAAE3RleHQAAAAAQ09QSVJJR0hUIDAyMDYgQWRvYmUgU3lzdGVtcyBJbmMuLCBhbGwgcmlnaHRzIHJlc2VydmVkLgADZGVzYwAAAAAAAAALQWRvYmUgUkdCIAgxOTk4KQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAGN1cnYAAAAAAAAAAQIzAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAgIDAQEBAQEAAAAAAAAAACEQIDBAUGBwgJCgsQAAIBAwMCBAIGBwMEAgYCcwECAxEEAAUhEjFBUQYTYSJxgZEyobHwFMHR4SNCFVJicvEzJDRDghaSUyWiY7LCB3PSNeJEgxdUkwgJChgZJjZFGidkdFU3pXcKgmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5STl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6EQACAQIEBAMEBwYHBw0BAHITAQARIRIxBEFRYSITcYGRobFSI8HR8BQy4UJicvGSQhUWcvJDUjOiM0BCJZLScYKSoyWFwdPVM2NkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5STl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIBbIDsAMBIgACEQEDEQH/2gAMAwEAAhEDEQA/AP74KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK-';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header 
        className="relative text-white bg-cover bg-center"
        style={{ backgroundImage: `url("${posterImage}")` }}
      >
        <div className="absolute inset-0 bg-brand-deep-purple/75"></div>
        <div className="relative container mx-auto px-6 py-32 md:py-48 flex flex-col items-center justify-center text-center z-10">
            <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase text-brand-gold">Advent Workshop</h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-6 leading-tight">God's Design for the Family</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">대림절 워크숍: 가정을 위한 하느님의 설계</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdi9YLjmkowsle5FxYXq63Qjt4aKxUzUyQrJ_uU-bNZJScBFA/viewform" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-brand-deep-purple font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors duration-300 shadow-xl inline-block">
              Register Now
            </a>
        </div>
      </header>
      
      <main>
        {/* Event Details Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">
              <InfoCard icon={<CalendarIcon />} title="Date & Time">
                <p><strong>Saturday, December 6th</strong></p>
                <p>1:00 PM - 4:30 PM</p>
              </InfoCard>
              <InfoCard icon={<LocationIcon />} title="Location">
                <p><strong>Holy Korean Martyrs Catholic Church</strong></p>
                <p>1523 McLaughlin Ave, San Jose, CA 95122</p>
              </InfoCard>
              <InfoCard icon={<SpeakerIcon />} title="Guest Speaker">
                <p><strong>Dr. Robert Navarra</strong></p>
                <p>Licensed Marriage & Family Therapist</p>
              </InfoCard>
            </div>
          </div>
        </section>

        {/* About the Workshop Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <SectionHeader title="Strengthen Your Family, Deepen Your Faith" />
            <p className="text-xl text-brand-text-light mb-8 leading-relaxed">
              Join us for an enriching afternoon dedicated to exploring God's beautiful design for the family. This workshop is an opportunity to learn how to strengthen your family, raise faith-filled children, and build God-centered relationships that last.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-serif text-lg font-bold text-brand-deep-purple mb-2">For Married Couples</h4>
                    <p className="text-brand-text-light">Learn key ways to improve your relationship with your spouse from a Catholic perspective.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-serif text-lg font-bold text-brand-deep-purple mb-2">For Parents</h4>
                    <p className="text-brand-text-light">Understand how to raise healthy and faith-filled children in today's world.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-serif text-lg font-bold text-brand-deep-purple mb-2">For Singles</h4>
                    <p className="text-brand-text-light">Discover how to build God-centered relationships with friends, in dating, and with parents.</p>
                </div>
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <SectionHeader title="Workshop Agenda" />
            <div>
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
        
        {/* Speaker Section */}
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <SectionHeader title="Meet Our Guest Speaker" />
                <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center">
                    <img 
                        src="https://i0.wp.com/drrobertnavarra.com/wp-content/uploads/2018/11/2018-Navarra-Robert-Head-Shot-250x250.jpg" 
                        alt="Dr. Robert Navarra" 
                        className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0 md:mr-8 flex-shrink-0 shadow-md"
                    />
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-serif font-bold text-brand-deep-purple">Dr. Robert Navarra, LMFT, MAC</h3>
                        <p className="text-brand-purple mt-1">Licensed Marriage and Family Therapist, Master Addiction Counselor</p>
                        <p className="text-brand-text-light mt-4 leading-relaxed">
                            Dr. Navarra is a respected Catholic therapist, author, and speaker. With decades of experience, he integrates sound psychological principles with Catholic spirituality to help individuals, couples, and families thrive. He is a master trainer for the Gottman Institute and has presented workshops internationally.
                        </p>
                        
                        <div className="mt-8 text-left space-y-6">
                            <div>
                                <h4 className="text-xl font-serif font-bold text-brand-deep-purple mb-3">Key Qualifications</h4>
                                <ul className="space-y-2 text-brand-text-light">
                                    <li className="flex items-start">
                                        <CheckIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                                        <span><strong>Licensed Marriage & Family Therapist (LMFT):</strong> Specializing in couples therapy and family dynamics.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                                        <span><strong>Master Addiction Counselor (MAC):</strong> Expertise in addressing addiction within the family system.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                                        <span><strong>Gottman Institute Master Trainer:</strong> Certified to teach research-based approaches to relationship health.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                                        <span><strong>Author & International Speaker:</strong> Passionate about sharing the Catholic vision for marriage and family life.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <blockquote className="bg-brand-purple/5 border-l-4 border-brand-purple p-4 rounded-r-lg">
                                <p className="text-brand-text italic">"The family is the first school of love, and the first church. When we center our homes on Christ, we build a foundation not just for our children, but for generations to come."</p>
                                <cite className="block text-right text-brand-purple font-medium mt-2 not-italic">— Dr. Robert Navarra</cite>
                            </blockquote>
                        </div>

                        <a href="https://drrobertnavarra.com/about/" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:text-brand-deep-purple font-bold mt-6 inline-block">
                            Learn more about Dr. Navarra &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Location Section */}
        <section className="relative py-20 bg-gray-800 text-white">
            <div className="absolute inset-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.766113978187!2d-121.84920668469501!3d37.32420497984409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccf3658f8e0b%3A0x7b8f2ea1e4e6f6a!2s1523%20McLaughlin%20Ave%2C%20San%20Jose%2C%20CA%2095122%2C%20USA!5e0!3m2!1sen!2s!4v1678886543210!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                    title="Google Map of Holy Korean Martyrs Catholic Church"
                ></iframe>
                <div className="absolute inset-0 bg-brand-deep-purple opacity-80"></div>
            </div>

            <div className="container mx-auto max-w-4xl text-center relative z-10 p-4">
                <SectionHeader title="Join Us in Person" />
                <p className="text-2xl font-serif mb-2">Holy Korean Martyrs Catholic Church</p>
                <p className="text-lg text-gray-300">1523 McLaughlin Ave, San Jose, CA 95122</p>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-brand-deep-purple text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Build a Stronger Family?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Don't miss this opportunity to invest in your family's spiritual and emotional well-being. Reserve your spot today.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdi9YLjmkowsle5FxYXq63Qjt4aKxUzUyQrJ_uU-bNZJScBFA/viewform" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-brand-deep-purple font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors duration-300 shadow-xl">
                Register for the Workshop
            </a>
            <p className="text-sm text-gray-400 mt-10">&copy; {new Date().getFullYear()} Holy Korean Martyrs Catholic Church. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;
