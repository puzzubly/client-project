# client-project
Work in progress

Using this repository to store files that are works in progress for a current client project

**🛸** Added some CSS, and a basic App.js file for a login page

![comparison](https://user-images.githubusercontent.com/91314936/156920915-9f2764c9-2b66-411b-8c4a-b4c918b370c4.JPG)



**🛸** Made a wireframe for the Login components using Miro


![wifeframe](https://user-images.githubusercontent.com/91314936/156920792-1a0a5806-fc12-4e01-a882-f509eef5aaf0.JPG)

**🛸** Ready to initialise the project. Will install Next.js, then Material UI dependencies

**🛸** Learning about bitbucket and Jira workflows

**🛸** Today installed Next.js and Material UI. Having trouble being linked in to the Bit Bucket! Not sure what to upload first there as I haven't started the next ticket which is the login page

**🛸** Working today to map my local machine/Git to the client project repository on Bit Bucket. Following the Bit Bucket documentation 

**🛸** Learnt in standup meeting that Login page has been taken over by the back end, using Auth0, have advised that I'll make a wireframe for the dashboard


**🛸** Made a wireframe for the Dashboard components using Miro


![Dashboard](https://user-images.githubusercontent.com/91314936/157822610-c3a66d21-796d-476f-9e86-5af3efdfa21b.JPG)

**🛸** Able to now map local machine to Bitbucket


![branch2](https://user-images.githubusercontent.com/91314936/157822730-763272db-1dc7-435c-9357-80b7643c3d41.JPG)

**🛸** Project initialised by pushing index.js to Bitbucket with MUI dependencies installed

**🛸** Wireframe of new prototype registration/login page

![login](https://user-images.githubusercontent.com/91314936/158049683-459bb9fd-a21c-4b58-ae06-c3420a5472ef.JPG)


**🛸** CSS of new form

![Registration form](https://user-images.githubusercontent.com/91314936/158295180-cbd2d482-9a6f-49e8-881c-7eb210359368.JPG)

**🛸** Wireframe of new form, deciding on multistep features

![Multistep form](https://user-images.githubusercontent.com/91314936/158545303-91b75bc2-2644-4da8-abca-e6988ba5a844.JPG)

**🛸** Coding the multi-step form

**🛸** Integration of Material Ui and Formik, please see index.js

**🛸** Presented to the team, discussion on how to join up with the backend. Currently all text fields are saved as a json object

**🛸** Built a landing page, used Next JS Router and onClick event on button to join to multi step form. 

**🛸** Continuing to style components using MUI... a lot to learn with MUI especially changing the colors!

**🛸** Successful first commit to bitbucket

**🛸** Pivot to Axios, rebuilt code around Axios so that backend can access data. Started to set up a fake REST API with JSON server

**🛸** Successful commit to bitbucket with the new code

**🛸** Presented form to the client today, needs visual uplift and the brand tool was provided for me to do that

**🛸** Given the URL for Axios by the backend team, inserted into the code and commited to bitbucket

**🛸** Working through an error, trying to connect to the backend proving unsuccessful today


![sourceserror](https://user-images.githubusercontent.com/91314936/160225560-899e9045-222f-4ac2-8924-bbf71f98fb0a.PNG)

NB I like the way this person has stated their problem:

Describe the bug
When making a request to my API, the catch block has a generic "Network Error" message, but when checking in the network inspector the request got a response code 413. This causes my users to incorrectly report that 'the website thinks i dont have a solid internet connection'. I suspect this happens for other codes too because this has been going on for a while.

To Reproduce
Make a request with a very large payload to trigger a 413 response

Expected behavior
The catch block should have the response code

Environment
Axios Version: 0.25.0 and 0.21.2
Adapter: xhr (i think? i dont remember changing this, so i guess whatever is default?)
Browser: Chrome
Browser Version: 97.0.4692.99
Node.js Version: 14.18.1
OS: OSX 12.1
Additional context/Screenshots
axiosInstance
    .post("/results/add", {
      result: completedEvent, //this is very big
    })
    .then((response) => {
      // handle response
    })
    .catch((e) => {
        console.log(e);
        //this console logs Error: Network Error
        // at createError (monkeytype.js:formatted:35086:25)
        // at XMLHttpRequest.handleError (monkeytype.js:formatted:34457:28)
    });

**🛸** Working on the visual upstyling today, using the client brand tool![Uploading snip.PNG…]()


**🛸** Refactoring today. Able to paste images with CSS, although trying to get them to the correct position!

![image](https://user-images.githubusercontent.com/91314936/160993644-0d98da04-5458-403b-8807-e8681ff82782.png)

**🛸** Backend guys have got it working, see above


