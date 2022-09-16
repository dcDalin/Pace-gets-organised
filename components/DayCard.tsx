import dayjs from "dayjs";
import useFetchEvents from "hooks/useFetchEvents";

type Event = {
  id: string;
  width: number;
  height: number;
  top: number;
  left: number;
  start: number;
  end: number;
  title: string;
};

interface IDayCardProps {
  event: Event;
}

export default function DayCard({ event }: IDayCardProps) {
  const { id, width, height, top, left, start, end, title } = event;

  const today = dayjs().startOf("date").toDate();

  const handleDate = (date: number) => {
    return dayjs(today).add(date, "minutes").format("h mm A");
  };

  const startTime = handleDate(start);
  const endTime = handleDate(end);

  useFetchEvents();

  return (
    <div
      key={id}
      className="absolute box-border bg-blue-700 rounded-md flex items-center pl-2 space-x-1 text-sm text-white"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      <span data-testid="event-title">{title}</span>
      <span>
        {startTime} - {endTime}
      </span>
    </div>
  );
}
