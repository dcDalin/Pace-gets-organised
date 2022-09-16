export const FETCH_ALL_EVENTS = /* GraphQL */ `
  query fetchAllEvents {
    events {
      id
      title
      start
      end
    }
  }
`;

export const ADD_NEW_EVENT = /* GraphQL */ `
  mutation newEventMutation($title: String!, $start: Int!, $end: Int!) {
    newEvent(title: $title, start: $start, end: $end) {
      id
    }
  }
`;
