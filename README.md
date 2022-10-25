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

![Invoice Card](https://firebasestorage.googleapis.com/v0/b/relayapp-production.appspot.com/o/invoice_card.png?alt=media&token=3014fffd-0137-4392-85f3-ab8f98ba87b6)

The data being rendered on the invoice card should be:
- Customer Name
- Customer Phone
- Description of first `line_item`
- Status as a pill (bonus points for using different colors for different statuses)
- Total cost of invoice
