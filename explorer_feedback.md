# IOTA Explorer Feedback

Please add a new list item and your feedback (thank you! :heart:):

- Looks really nice and very user friendly. One little thing: On css class .info-box 20px padding on left side is used for devices under 480px. That results in not completely centered items (price, tps and market cap).
- Looks a bit small scaled on desktop, but the empty space between the transaction fields looks to big (you have to scroll to see the parents)
- Visualizer doesn't highlight milestones and past/future cones and you can't filter for tags, also the canvas with the actual visualizer could me much larger, much wasted space (maybe have a button for full screen mode?)
- Can't search for milestone indexes
- Options to promote/reattach a bundle would be nice
- Tps history like tanglebeat had also
- Why is "TPS" such a central metric that it is - more or less - always a central element? (why not CTPS or something else?). Is it meant as an indicator of "network health"?
- The autofocus on the search bar makes the keyboard on iOS/iPad OS appear and overlay the actual page when you click a tx hash etc.

# Done

- I would like to get feedback when copying a hash/tag etc. (Safari browser) **- Added**
- The contrast of the edges in the visualizer could be a little higher imho (+ dark mode would be fancy :p) **- Slight colour change**
- Markets: Add a hint where the information about the current price is derived from (low effort but contributes greatly towards transparency?) **- Added**
- Shows only a white page when searching for "9" - **Fixed**
- is comnet support planned? **If it stabilizes it is trivial to configure and add**
- Index could be confusing, because in the client libs it starts with 0 **(this is deliberate, only developers count from 0)**
- Ultra-nit-picky: Balance and Fiat-Conversion: One Plugin uses radio-button-type of selection (Ki, Mi, Gi, ...) , the other drop-down for FIATs. I understand why and simply raise the question whether the added value of showing conversion rates is worth the break of continuity. (The function itself is awesome and both designs are great! :)) **- Won't change there is a distinction between the number of selectable items in each case, the radio buttons has few enough elements to show them all, that is not possible with currencies.**

