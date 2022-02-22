# skwash
A homegrown issue tracker designed to help you squash bugs

## Goals

- [ ] Create new issue
- [ ] Display existing issues
- [ ] Edit existing issue

## Planning

### Create New Issue

- [ ] A button for creating new issues
  - [ ] Clicking the button will show issue form
  - [ ] User can enter data in issue form
    - [ ] Title - string of text, short description of issue
    - [ ] Description - string of text, longer, more detailed description of issue w/ possible documentation and images
    - [ ] Assignees - array of user IDs, people assigned to solve the issue
    - [ ] Status - enum or string, open, closed, done, in progress, awaiting review, approved, rejected
    - [ ] Labels - string, user-generated labels relevant to the project
  - [ ] Submitting the form will create new issue and send request to backend for persistence

### Display Existing Issues

- [ ] List of created issues ordered by creation date (most recent)
  - [ ] Each issue in list contains preview data (title, id, creation date, author, status, assignees, labels)
  - [ ] Clicking on issue will display page containing full issue data (including description and comments)

### Edit Existing Issues

- [ ] A button for each field of expanded issue for editing
  - [ ] Clicking the button will enable edit mode/state
  - [ ] Save button
    - [ ] Clicking save will send updated data to backend and update frontend
  - [ ] Cancel button
    - [ ] Clicking cancel will disable edit mode/state

## Stories

Epic Name: `Basic Issue Tracker`

- [ ] Display list of existing issues in project's main page
- [ ] Display expanded issue in its own page when clicked
- [ ] Display new issue form in its own page or modal when `New Issue` button is clicked
- [ ] Handle new issue form submission on frontend and backend
- [ ] Handle issue field editing on frontend and backend

## Time Estimation

- 1 pt per day per developer (start -> testing -> PR review -> finish)
- Multiply final result by 1.5x or 2x