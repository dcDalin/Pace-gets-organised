import { Event } from "types";

// Event id
let id = 6;

export const events: Event[] = [
  {
    id: "1",
    title: "Call with Bob",
    start: 420,
    end: 440,
  },
  {
    id: "2",
    title: "Lunch",
    start: 720,
    end: 780,
  },
  {
    id: "3",
    title: "Meeting with Claire",
    start: 780,
    end: 840,
  },
  {
    id: "4",
    title: "Review OKRs",
    start: 870,
    end: 900,
  },
  {
    id: "5",
    title: "Interview Ahmed",
    start: 20,
    end: 1400,
  },
];

function findIndexOfEvent(id: string) {
  const index = events.findIndex((event) => {
    return event.id == id;
  });

  return index;
}

export function newEvent(title: string, start: number, end: number) {
  const newEvent = {
    id: id.toString(),
    title,
    start,
    end,
  };
  events.push(newEvent);

  // incremeant id
  id += 1;
  return newEvent;
}

export function deleteEvent(id: string) {
  const eventIndex = findIndexOfEvent(id);
  events.splice(eventIndex, 1);

  return true;
}

export function updateEvent(event: Event) {
  const eventIndex = findIndexOfEvent(event.id);

  events.splice(eventIndex, 1, event);

  return event;
}
