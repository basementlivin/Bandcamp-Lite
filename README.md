# Bandcamp Lite
Designed and developed by Corey Neal and Erik Pedersen during a one-week sprint in late summer 2022.
#### FILE UNDER: MEN stack, full CRUD, web apps, paired programming, sprint, music, sweating
#### TECH STACK & TOOLS: HTML, CSS, JavaScript, Express, Node.js, Formidable.js, MongoDB, Mongoose, Figma

## USER STORY
Bandcamp is an incredibly important tool for independent artists and labels, but its interface is hectic and the site's design lives in two totally separate eras: the modern, responsive minimalism of Bandcamp Daily's blog environment and the dated artist/label pages, which are unresponsive and cluttered, thanks in part to the choice of handing off design customizations (header images, bacground images, and color schemes) to the user.
We set out to build a light-duty, streamlined version of Bandcamp that allows users to create, edit, and delete their own albums and artist bios and stream their uploaded tracks. As of 5 Sept 2022, this is still a work-in-progress.
#### If you want to click around in the Figma prototype, go [here](https://www.figma.com/proto/dyVExgJwL9aT5sQG1QsaA5/GA-Project-II%3A-Bandcamp-Lite?node-id=115%3A1793&scaling=scale-down&page-id=115%3A1313&starting-point-node-id=115%3A1793).

## HOME PAGE
Hero image, followed by up-to-date collections of all the albums and artists that have been added to our Mongo database via the UPLOAD page.
The album and artist cards are large and graphic, which encourages users to submit high-quality image files.
They're set to scroll along the x-axis to maintain an uncluttered user experience.

<img width="1313" alt="Screen Shot 2022-09-05 at 4 54 34 PM" src="https://user-images.githubusercontent.com/109049703/188511776-f9323d81-8e7d-48c5-be6d-e19d931e551d.png">

## ALBUMS
The ALBUMS page maintains the card layout, but repositions the collection into a grid that scrolls vertically.
Individual album pages present users with a two-column layout: title, artist(s), tracks, and copyright info on the left; album art and description/liner notes on the right.
The footer on all album show pages provides users with an option to edit or delete the album.

<img width="1313" alt="Screen Shot 2022-09-05 at 4 54 55 PM" src="https://user-images.githubusercontent.com/109049703/188511794-9bb87538-9c97-4dfe-bd87-836bdde9e2b7.png">

<img width="1313" alt="Screen Shot 2022-09-05 at 4 56 16 PM" src="https://user-images.githubusercontent.com/109049703/188511800-b32cbde6-d495-46b1-b79c-bd109695a9f9.png">


## ARTISTS
Similar to the ALBUMS page, the ARTISTS page repositions the oversized artist photos into vertical-scrolling grid.
Individual artist pages feature a full-width hero image, followed by a single-column bio.
Artists may link to their label's website for longer bios or related articles. Again, there's an option in the footer to edit or delete the artist's bio page.

<img width="1313" alt="Screen Shot 2022-09-05 at 4 54 45 PM" src="https://user-images.githubusercontent.com/109049703/188511808-4640470d-1fa8-407f-8633-330e038d93eb.png">

<img width="1313" alt="Screen Shot 2022-09-05 at 4 56 01 PM" src="https://user-images.githubusercontent.com/109049703/188511833-58051186-b45b-4580-bd91-3d74d42d1863.png">

## UPLOAD & EDIT
These pages present users with simple forms for entering all relevent information for their artist pages and latest releases.
We've implemented JavaScript DOM manipulation to make the "New Track" fields dynamic: the form loads up with one input field for a track, plus a file upload button.
Users can click the "add another track" button to create as many track fields as they need for a given album.

<img width="1313" alt="Screen Shot 2022-09-05 at 4 55 07 PM" src="https://user-images.githubusercontent.com/109049703/188512129-e25155ca-33d5-4951-8549-f7f072a5be4f.png">

<img width="1313" alt="Screen Shot 2022-09-05 at 4 56 30 PM" src="https://user-images.githubusercontent.com/109049703/188512063-9bc4c171-b7eb-4e2f-9735-5fcded5abf9d.png">
