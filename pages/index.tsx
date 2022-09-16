import { useState, useEffect } from "react";
import dayLayout from "@/utils/dayLayout";
import DayCard from "components/DayCard";
import useFetchEvents from "hooks/useFetchEvents";
import NewEventModal from "../components/NewEventModal";
import TimeView from "@/components/TimeView";
import EventView from "@/components/EventView";

export default function Index() {
  const [data, error] = useFetchEvents();

  const [eventsLayout, setEventsLayout] = useState([]);
  const [openNewEventModal, setOpenNewEventModal] = useState(false);

  const handleOpenNewEventModal = (state: boolean) => {
    setOpenNewEventModal(state);
  };

  useEffect(() => {
    if (data && data.events && data.events.length) {
      setEventsLayout(dayLayout(data.events));
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div className="h-[1440px] w-[900px] inline-flex">
        <TimeView />
        <EventView
          eventsLayout={eventsLayout}
          handleOpenNewEventModal={handleOpenNewEventModal}
          openNewEventModal={openNewEventModal}
        />
      </div>
    </div>
  );
}
