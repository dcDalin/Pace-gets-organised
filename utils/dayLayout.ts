import { Event } from "types";

const containerHeight = 1440;
const containerWidth = 600;
const minutesinDay = 60 * 24;

let collisions = [];
let width = [];
let leftOffSet = [];

function getCollisions(events: Event[]) {
  //resets storage
  collisions = [];

  for (var i = 0; i < 48; i++) {
    var time = [];
    for (var j = 0; j < events.length; j++) {
      time.push(0);
    }
    collisions.push(time);
  }

  events.forEach((event, id) => {
    let end = event.end;
    let start = event.start;
    let order = 1;

    while (start < end) {
      let timeIndex = Math.floor(start / 30);

      while (order < events.length) {
        if (collisions[timeIndex].indexOf(order) === -1) {
          break;
        }
        order++;
      }

      collisions[timeIndex][id] = order;
      start = start + 30;
    }

    collisions[Math.floor((end - 1) / 30)][id] = order;
  });
}

function getAttributes(events) {
  //resets storage
  width = [];
  leftOffSet = [];

  for (var i = 0; i < events.length; i++) {
    width.push(0);
    leftOffSet.push(0);
  }

  collisions.forEach((period) => {
    // number of events in that period
    let count = period.reduce((a, b) => {
      return b ? a + 1 : a;
    });

    if (count > 1) {
      period.forEach((event, id) => {
        // max number of events it is sharing a time period with determines width
        if (period[id]) {
          if (count > width[id]) {
            width[id] = count;
          }
        }

        if (period[id] && !leftOffSet[id]) {
          leftOffSet[id] = period[id];
        }
      });
    }
  });
}

const dayLayout = (events: Event[]) => {
  getCollisions(events);
  getAttributes(events);

  let layoutData = [];

  events.forEach((event, id) => {
    let height = ((event.end - event.start) / minutesinDay) * containerHeight;
    let top = (event.start / minutesinDay) * containerHeight;
    let end = event.end;
    let start = event.start;
    let units = width[id];
    if (!units) {
      units = 1;
    }
    let left = (containerWidth / width[id]) * (leftOffSet[id] - 1) + 10;
    if (!left || left < 0) {
      left = 10;
    }

    const data = {
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      height,
      top,
      left: 100 + left,
      units,
      width: containerWidth / units,
    };

    return layoutData.push(data);
  });
  return layoutData;
};

export default dayLayout;
