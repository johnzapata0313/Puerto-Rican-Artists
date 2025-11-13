# Choose Your Puerto Rican Artist
A web application that celebrates modern Puerto Rican music culture by allowing users to select from five popular reggaeton and Latin trap artists. Upon selection, the application transforms the experience with a relative background featuring the chosen artist and plays one of their hit songs.

![567035A9-9903-4D10-96B8-8E6E7D8EA583_1_105_c](https://github.com/user-attachments/assets/d01f4fda-44ed-465d-a6ef-16650f007d3b)

[check out the magic!](https://chooseyour-puertoricanartist.netlify.app/)

## What It Does
The application presents users with five thumbnail images of prominent Puerto Rican artists:

Bad Bunny
Rauw Alejandro
Eladio Carrión
Dei V
Myke Towers

When a user clicks on any artist's thumbnail, the page dynamically updates with:

A full-size background image of the selected artist
An embedded audio player featuring one of their popular songs
An immersive visual experience celebrating the artist

## Technologies Used

### HTML - Structure and content layout
### CSS - Styling, responsive design, and dynamic background changes
### JavaScript - Interactive functionality and DOM manipulation

JavaScript Implementation
The JavaScript code handles the core interactivity of the application:

Event Listeners: Attached click events to each artist thumbnail to detect user selection
DOM Manipulation: Dynamically updates the page background by modifying CSS properties or applying new background images
Audio Control: Creates or updates audio elements to play the selected artist's song, managing playback and stopping previous tracks when a new artist is selected
Dynamic Content: Switches between different artist images and corresponding audio files based on user interaction

Lessons Learned

Event Handling: Gained experience implementing multiple event listeners efficiently and managing user interactions across different DOM elements
Audio API: Learned to work with HTML5 audio elements, controlling playback, pausing previous tracks, and managing audio sources dynamically
DOM Manipulation: Mastered techniques for updating page content, styles, and backgrounds in real-time without page reloads
User Experience: Understood the importance of providing immediate visual and audio feedback to create an engaging interactive experience
File Organization: Learned to structure and reference multiple media assets (images and audio files) in a web project
CSS Integration with JavaScript: Practiced seamlessly combining JavaScript functionality with CSS styling to create dynamic visual effects
