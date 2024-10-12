import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const MediaPlanning: React.FC = () => {
  const handleDateSelect = (selectInfo: any) => {
    const title = prompt('Please enter a title for your media slot');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  };

  const handleEventClick = (clickInfo: any) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Media Planning</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          initialEvents={[
            { title: 'Prime Time Slot', date: '2024-03-15' },
            { title: 'Morning Show', date: '2024-03-20' }
          ]}
        />
      </div>
    </div>
  );
};

function createEventId() {
  return String(Math.random()).slice(2);
}

export default MediaPlanning;