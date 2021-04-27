# Test deployment

&bull; Dev environment `http://localhost:8801/string-api/:string-you-want-to-search`


&bull; Prod environment-Heroku `https://devopsyap.herokuapp.com//string-api/:string-you-want-to-search`

&bull; Prod environment-Azure `https://devopsyap.herokuapp.com//string-api/:string-you-want-to-search`








## Deploy the App Service Infrastructure:

Click the button below to deploy an Azure Web App for Linux. This will create a new app service plan and web app with a dev deployment slot. You can then create build and release pipelines at dev.azure.com to continuously deploy the node application in this repo to the dev deployment slot.

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fsammadu1%2Fnode-api%2Fmain%2Fazuredeploy.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>

## Deploy the App Continuously with Github Actions  and/or Azure DevOps:
For our First iteration we used Github Actions for continuous deployment: [Using Github Action Workflows](https://github.com/sammadu1/node-api/actions)


## App Info