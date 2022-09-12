# Pace gets organized

#### Link [here](https://pace-gets-organised.vercel.app/).

At first glance, a day view calendar seems like a trivial task. However, the rules set with regards to rendering the calendar do increase its complexity. Not being allowed to use calendar components like fullcalendar did make me appreciate the power of open source, especially when it comes to speed of delivery.

## Choices I made

After breaking down the task into subtasks, I jumped straight into the backend code. It being the first time working with graphql-yoga, I deemed it fit to quickly play around with the technology by implementing the missing pieces of the CRUD operation - (Create, Update and Delete).

The front end was next. I went for the design first approach as this method often allows me to think of ways I’d want the data to flow. Creating various components quickly made me realize that the CSS grid was not going to work.

I opted to have a look at various calendar component libraries to get a hint on how best to implement the logic. Collision algorithm was the solution found.

## Challenges I faced

The major one was a set of new technologies. SWR, graphql-yoga were both new to me. Going through the quick start page of documentation was enough to get me going.

The task itself was the major challenge. I have never implemented a day calendar before, let alone create one from ‘scratch’. On the bright side, this led to reading a lot of calendar component code thus learning new approaches to solving tasks.

## Tradeoffs I chose

A lot can be done so as to ensure code is production quality. Some of the tradeoffs include not setting up a proper CI/CD pipeline. Not setting up commit rules or webhooks for tests and remote builds.
When it comes to the calendar, responsiveness was a tradeoff I chose. The event component is placed based on exact CSS positioning.
Proper testing of the code was also a tradeoff made.

## What I don’t like about my solution

Like mentioned, its lack of responsiveness makes for bad user experience.

- Repetitive code
- Lack of global state management (Context)
- Page refresh on new event creation.

## What areas would I work on next

- Database persistence
- Implementation of Subscriptions
- Responsiveness of the calendar
