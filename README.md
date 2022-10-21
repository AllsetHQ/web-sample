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
and exposes the `/invoices` and '/customers' resources.

Use Typescript, React, and StyledComponents (already imported) to develop the UI. Your welcome to setup your source code
in any organization you like. Please continually make small commits to the repo as you develop changes to better
show the iteration path you took.

## Invoice Cards
See the below image for an example of what an invoice card should look like. They should automatically lay out
in rows and columns to fill the available space. Ensure that your design is mobile responsive, and looks good at
a variety of resolutions.

![Invoice Card](https://lh3.googleusercontent.com/MfIgb4yAUIDJjDylwlGgcoMqoPtdVGIbGTSakt0t2TDW1GYPl4Hj6VFrNzrvKRQpRVbIjGWWAMPE_EODpxc2iCDmQ9lOAjwfhBA-DgC5bs1IZIc14Wo1NTpD56Dd8my0SKDaZ19OFDhZS9KOFaKotIqLTmJK56sBJC0iwcEpSsZQ1sTk6XE0g9bRDcbYBznAxgF8pYBhaoEwB8MydP2fb958Zgz_If7Ckc5lAilqj0KGt1zfcfw6PUbOXC5ox4AvRMrKEeV78kjhU1puTx8xLpsWmJ5CyVVh-C539EP9mNRPQHD0w7MYTpLOJnw_nYTMysbAmi8bLPXufEnsIqGn2hn5v4wxP5CsDsrR84aiwbgZbX-BaQKQNpf2TfsSOxUlU9h2MbzOJ53DmuzAQCBDPcqNAg4oA_k873NCoEoemEK8_4PPwJjW5ix7XefXnBYxn_b-LaWMuyFuCVvaRDIAW0ZZsh8dtSIp4ZOB6lTqwAwqsd3i9Ug2j1PKfm1w8vfHlRwpvBTvbO-rjtJ6QAcdvzsgborBUzYxOwYHsIwHbtd-oyooTUruNKEQMxh-EO9n1lNWy8gdpc_fU48f7GNjgJU1pCeyJ9sg1MpjENh2n1PH6kFLvjxTcwRBmNAJH43ciDXR_42Yf0Tm6xtb2VdGpTcFJpOQLoqBAlJrdxCPbOa9WkT8ZihwC8p9STYF9W2TJCuhxSzUdAuxslHxQVSl6Uggxkj2qmbCpm_5aArX9FMr1iSr6zMhR21wf0jw7-TeRz-34C2oUDO8FkOiHoP30cfIJRjSykJ3UT3x0OdUYJwzovtLPUo6nq_0UZezyyr7M9i2KRPqi7VK1bLRpGV798QZ4ZcMLvbTtTwqwHOOUjatnDsMz-QEb7YHDbM2TMHcjdQz1hcHMNBaMaDAOai24RnB02ODelcVMOed4qwb1c9Yyg-H=w401-h155-no?authuser=0)

The data being rendered on the invoice card should be:
- Customer Name
- Customer Phone
- Description of first `line_item`
- Status as a pill (bonus points for using different colors for different statuses)
- Total cost of invoice
