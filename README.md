# Memory Game Project

## What I learned

- Handling different sections of state using the useState hook and deciding on good placement of state. I also converted my useState into the useReducer hook as I felt my state was getting too involved and it allowed me to use less handlers, thus reducing the amount of prop drilling I needed to do.

- I used useEffect a few times to get used to the idea of mounting and unmounting a component. 

## How I could improve moving forward

- I think there are often situations where holding state is actually not necessary, as the data that needs to be worked out can often be deduced from existing state. In the case of my app, I didn't actually end up needing a 'score' state as this could be worked out from the properties on my existing 'cards' that were in state.