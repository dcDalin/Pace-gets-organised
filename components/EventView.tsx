import NewEventModal from "@/components/NewEventModal";
import DayCard from "@/components/DayCard";

interface IEventViewProps {
  eventsLayout: any[];
  handleOpenNewEventModal: (state: boolean) => void;
  openNewEventModal: boolean;
}
export default function EventView({
  eventsLayout,
  handleOpenNewEventModal,
  openNewEventModal,
}: IEventViewProps) {
  return (
    <>
      <div
        className="h-[1440px] w-[620px] px-0 box-border bg-gray-50 cursor-pointer"
        onClick={() => handleOpenNewEventModal(true)}
        data-testid="events-view"
      >
        {eventsLayout &&
          eventsLayout.length &&
          eventsLayout.map((event, index) => {
            return <DayCard key={index} event={event} />;
          })}
      </div>

      <NewEventModal
        open={openNewEventModal}
        close={() => handleOpenNewEventModal(false)}
      />
    </>
  );
}
