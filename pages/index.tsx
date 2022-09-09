import useSWR from "swr";
import dayjs from "dayjs";
import dayLayout from "@/utils/dayLayout";

let today = dayjs().startOf("date").toDate();

const fetcher = (query: string) =>
  fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

export default function Index() {
  const { data, error } = useSWR(
    "{ events { id, title, start, end } }",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { events } = data;

  const handleDate = (date) => {
    return dayjs(today).add(date, "minutes").format("h mm A");
  };

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

        <div className="h-[1440px] w-[620px] px-0 box-border bg-gray-50">
          {eventsLayout &&
            eventsLayout.length &&
            eventsLayout.map(
              ({ end, height, id, left, start, title, top, width }) => {
                const startTime = handleDate(start);
                const endTime = handleDate(end);
                return (
                  <div
                    key={id}
                    className="absolute box-border bg-blue-700 rounded-md flex items-center pl-2 space-x-1 text-sm text-white"
                    style={{
                      width: `${width}px`,
                      height: `${height - 5}px`,
                      top: `${top}px`,
                      left: `${left}px`,
                    }}
                  >
                    <span>{title}</span>
                    <span>
                      {startTime} - {endTime}
                    </span>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}
