import { useState } from "react";
import dayLayout from "@/utils/dayLayout";
import DayCard from "components/DayCard";
import useFetchEvents from "hooks/useFetchEvents";
import NewEventModal from "../components/NewEventModal";

export default function Index() {
  const [data, error] = useFetchEvents();

  const [openNewEventModal, setOpenNewEventModal] = useState(false);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { events } = data;
  const eventsLayout = dayLayout(events);

  return (
    <div>
      <div className="h-[1440px] w-[900px] inline-flex">
        <div className="text-right pr-1 w-[100px] h-[1440px] flex flex-col justify-between text-sm box-border">
          <div>
            <span> 12:00 </span> AM
          </div>
          <div> 12:30 </div>
          <div>
            <span> 1:00 </span>AM
          </div>
          <div> 1:30 </div>
          <div>
            <span> 2:00 </span>AM
          </div>
          <div> 2:30 </div>
          <div>
            <span> 3:00 </span>PM
          </div>
          <div> 3:30 </div>
          <div>
            <span> 4:00 </span>PM
          </div>
          <div> 4:30 </div>
          <div>
            <span> 5:00 </span>PM
          </div>
          <div> 5:30 </div>
          <div>
            <span> 6:00 </span>PM
          </div>
          <div> 6:30 </div>
          <div>
            <span> 7:00 </span>PM
          </div>
          <div> 7:30 </div>
          <div>
            <span> 8:00 </span> AM
          </div>
          <div> 8:30 </div>

          <div>
            <span> 9:00 </span> AM
          </div>
          <div> 9:30 </div>
          <div>
            <span> 10:00 </span>AM
          </div>
          <div> 10:30 </div>
          <div>
            <span> 11:00 </span>AM
          </div>
          <div> 11:30 </div>
          <div>
            <span> 12:00 </span>PM
          </div>
          <div> 12:30 </div>
          <div>
            <span> 1:00 </span>PM
          </div>
          <div> 1:30 </div>
          <div>
            <span> 2:00 </span>PM
          </div>
          <div> 2:30 </div>
          <div>
            <span> 3:00 </span>PM
          </div>
          <div> 3:30 </div>
          <div>
            <span> 4:00 </span>PM
          </div>
          <div> 4:30 </div>
          <div>
            <span> 5:00 </span>PM
          </div>
          <div> 5:30 </div>
          <div>
            <span> 6:00 </span>PM
          </div>
          <div> 6:30 </div>
          <div>
            <span> 7:00 </span>PM
          </div>
          <div> 7:30 </div>
          <div>
            <span> 8:00 </span>PM
          </div>
          <div> 8:30 </div>
          <div>
            <span> 9:00 </span>PM
          </div>
          <div>
            <span> 10:00 </span>PM
          </div>
          <div> 10:30 </div>
          <div>
            <span> 11:00 </span>PM
          </div>
          <div> 11:30 </div>
          <div>
            <span> - </span>PM
          </div>
        </div>

        <div
          className="h-[1440px] w-[620px] px-0 box-border bg-gray-50 cursor-pointer"
          onClick={() => setOpenNewEventModal(true)}
        >
          {eventsLayout &&
            eventsLayout.length &&
            eventsLayout.map((event, index) => {
              return <DayCard key={index} event={event} />;
            })}
        </div>

        <NewEventModal
          open={openNewEventModal}
          close={() => setOpenNewEventModal(false)}
        />
      </div>
    </div>
  );
}
