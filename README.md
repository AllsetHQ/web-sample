# web-sample
Sample project for showcasing front end development skills. This is intended to take 1~3 hours, with no hard time limit.

# Steps
1. Clone this repo
2. Update `package.json`, change the `author` attribute to your own name.
3. Commit that change
4. Ensure you can run both `npm start` (serve app via webpack), and `npm run db` (serve local REST API)
5. Implement the objective outlined below
6. Commit changes to the local repo early and often
7. When you're finished, make sure all changes have been committed
8. Delete the `node_modules` and `dist` folders
9. Zip up the entire repo directory (including the `.git`) folder
10. Email the zipped repo to engineering@allsethq.com

# Goal
For this app you'll fetch and display a list of invoices as cards. You'll need to hit the
local API running at `http://localhost:4002` for sample data. This API is runing using [json-server](https://github.com/typicode/json-server)
and exposes the `/invoices` and `/customers` resources.

Use Typescript, React, and StyledComponents (already imported) to develop the UI. Your welcome to setup your source code
in any organization you like. Please continually make small commits to the repo as you develop changes to better
show the iteration path you took.

## Invoice Cards
See the below image for an example of what an invoice card should look like. They should automatically lay out
in rows and columns to fill the available space. Ensure that your design is mobile responsive, and looks good at
a variety of resolutions.

![Invoice Card](https://lh3.googleusercontent.com/BBoVfR-2Kx3VsM432maYj4hg62sP7wpcYoPtcLTXFKjRHh8qaxYWt4LiIDT0pRFjblzuoFVa5KhJFXDLqws6xGF7DUcQTn6rTpkLEs248S0i918tTqcV87qvzM9ZUhJoWbTDSPa0uVW5uPYkwkWO2CGLxB1Mrhu3XNULTAggXcn6Kpmu8qLcctPi4qBKxfRouAhG54OQMOagoeDbioUlJZU5ER9idOhtLWLMwU2QtOqNloLitoV7frH7-BqGEbDVVh1_RamB9USTEmQIb6iwPirOPsSjzupxmeMhhyYGiHSRNz26Ra4aKZ0kFtgq9Pp-IAniTyvaL8YmQkuh1ihMRopjt7vHTGS3pGFuH4aiCK35sDQ7YnmqGxOoFbNxvD_3ytmGfHJ82QAe0ppJz8wKKydBAEN9A40GdfuT7enTpFRy3uhE43gFRUKWoNTDxKSbkMe9YmS7Tybt3iScqoVhyvDAzNFiVTdHoIz_8G9fPsJ_JX3k8qHndrqgWAdvgdfIhndd2tuHWkZ7cBd27zbSHW7IdOp0vctD_vqGIDPSl7U8dXpLvslz0UEQ90h9M3xBOdEcS9FEp2xztx_3MAkkpvlMjJB8xxD2DHajwxeYsMLFOQsGhF94H5Q_gt38yuFccetFBSBwndcFcXkf8o-RUlm9jqK1x4EiEaq9DP9dR2tifJC8PKx5Cy6tGAlF_8HzeKmGPFuaTIhNQoA6cMsF7hISyOOADCbA4pvFfN7l3HylLosxz50DOp36Z_82FX8HCF_piMXLJSjpCJZfCVegzOiJh5TCC192IK0irsiujZSrR4dbRZ5SUkSP0AAeOiDw1xTqYY6U_JNsOlmMj7-IDIpnZTJfjKpKDCM7xBKjziYRRc_aBbY2vW_r-VWoXW5IZ_jLCSOIbXFK_BuqcggGbSW1hs0dDRD6BeKAma5IORS4JoCQ=w874-h302-no?authuser=0)

The data being rendered on the invoice card should be:
- Customer Name
- Customer Phone
- Description of first `line_item`
- Status as a pill (bonus points for using different colors for different statuses)
- Total cost of invoice
