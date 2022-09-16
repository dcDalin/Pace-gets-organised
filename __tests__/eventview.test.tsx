import { render, screen, waitFor } from "@testing-library/react";
import EventView from "@/components/EventView";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

const observe = jest.fn();

describe("Event View", () => {
  it("renders event view unchanged", () => {
    const { container } = render(
      <EventView
        eventsLayout={[]}
        handleOpenNewEventModal={() => {}}
        openNewEventModal={false}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("opens new event modal", async () => {
    render(
      <EventView
        eventsLayout={[]}
        handleOpenNewEventModal={jest.fn()}
        openNewEventModal={false}
      />
    );

    screen.getByTestId("events-view").click();

    const newEventModal = await waitFor(() =>
      screen.getByTestId("new-event-modal")
    );

    expect(newEventModal).toBeInTheDocument();
  });

  it("finds title of event", () => {
    act(async () => {
      const { getByTestId } = render(
        <EventView
          eventsLayout={[
            {
              end: 440,
              height: 20,
              id: "1",
              left: 110,
              start: 420,
              title: "Call with Bob",
              top: 420,
              units: 2,
              width: 300,
            },
          ]}
          handleOpenNewEventModal={() => {}}
          openNewEventModal={false}
        />
      );

      await waitFor(() => {
        const title = getByTestId("event-title");
        expect(title.innerHTML).toBe("Call with Bob");
        console.log("Title: ", title);
      });
    });
  });
});
