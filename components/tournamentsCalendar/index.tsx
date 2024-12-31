import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ICAL from 'ical.js';
import { Modal, Button, Text } from '@nextui-org/react';

const localizer = momentLocalizer(moment);

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  description?: string | null;
  location?: string;
}

const TournamentsCalendar: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/tournaments')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        try {
          const jcalData = ICAL.parse(data);
          const comp = new ICAL.Component(jcalData);
          const vevents = comp.getAllSubcomponents('vevent');
          const calendarEvents = vevents.map((vevent: any) => {
            const event = new ICAL.Event(vevent);
            const description = event.description;
            const urlMatch = description.match(/https?:\/\/[^\s]+/);
            const url = urlMatch ? urlMatch[0] : null;

            // Adjust the start and end dates to account for time zone differences
            const startDate = new Date(event.startDate.toString());
            const endDate = new Date(event.endDate.toString());

            // Check if the event is an all-day event and adjust the dates accordingly
            if (event.startDate.isDate) {
              startDate.setDate(startDate.getDate() + 1);
              endDate.setDate(endDate.getDate() + 1);
            }

            return {
              title: event.summary,
              start: startDate,
              end: endDate,
              allDay: event.startDate.isDate,
              description: url,
              location: event.location,
            };
          });
          setEvents(calendarEvents);
        } catch (parseError) {
          console.error('Error parsing calendar data:', parseError);
          setError('Failed to parse calendar events.');
        }
      })
      .catch((error) => {
        console.error('Error fetching calendar data:', error);
        setError('Failed to load calendar events. Please try again later.');
      });
  }, []);

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', height: '500px' }}>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={handleSelectEvent}
          />
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={!!selectedEvent}
            onClose={handleCloseModal}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                {selectedEvent?.title}
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Text>
                Start: {selectedEvent?.start.toLocaleString()}
              </Text>
              {selectedEvent?.location && (
                <Text>
                  Location: {selectedEvent.location}
                </Text>
              )}
              {selectedEvent?.description && (
                <Text>
                  More Info: <a href={selectedEvent.description} target="_blank" rel="noopener noreferrer">{selectedEvent.description}</a>
                </Text>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
};

export default TournamentsCalendar;