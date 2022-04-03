# **Weekend Challenge: Redux Feedback Loop**

## **Description**

The Redux Feedback Loop allows students to give feedback on how they feel their day at Prime went. The first page allows them to state how they are feeling that day from 1 to 5, then they are able to click on the ***NEXT*** button which will take them to the understanding page at which they state their understanding of the day's material from 1 to 5. They then click on the NEXT button again to be taken to the support page, and yet again to the comments page where they can type out any comments or concerns they may have. Finally, they are taken to a review page where they can review their submissions from the previous pages, and then click on the ***SUBMIT*** button which submits the data to the database. If they leave any of the fields blank, they will receive an alert that tells them they cannot move on to the next page until they fill out the form on the page they are currently on. Lastly, once they submit everything, they are taken to a thank you page with a button that when clicked on takes them back to the very beginning and allows them to go through the form again.    

## **Problems I Ran Into**

The first problem I ran into was figuring out how to allow the student to jump to the next page when they click on the ***NEXT*** button. I tried using links but I quickly realized the best way to do it for this project was with the `history.push` in my `handleNext` components. The next problem I ran into was making it so the student/user couldn't go to the next page until they had the input filled out on the current page. I tried using `required` in the input but that wasn't working for some reason. I found the best strategy for me was to use an if statement with an alert.   

## **Built With**

- Javascript, React, HTML, CSS, Node, Express, SQL, and Redux

## **Acknowledgment**

Credit goes to Prime Digital Academy and my instructor Dane Smith for giving me the instruction and knowledge to make this project possible.
