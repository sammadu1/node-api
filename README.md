# Test deployment

&bull; Dev environment `http://localhost:8801/string-api/:string-you-want-to-search`


## Deploy to Heroku app using Github Actions:
&bull; Prod environment-Heroku `https://nodeapisamprod.herokuapp.com/string-api/:string-you-want-to-search`


## Deploy to Azure App services using deployment slot:
&bull; Staging environment-Azure `https://nodeappapi-staging.azurewebsites.net/string-api/:string-you-want-to-search`
&bull; Prod environment-Azure `https://nodeappapi.azurewebsites.net/string-api/:string-you-want-to-search`








## Deploy the App Service Infrastructure:

Click the button below to deploy an Azure Web App for Linux. This will create a new app service plan and web app with a dev deployment slot. You can then deploy Github Actions workflow for continuous deployment or create build and release pipelines at dev.azure.com to continuously deploy the node application in this repo to the dev deployment slot.

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fsammadu1%2Fnode-api%2Fmain%2Fazuredeploy.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>

## Deploy the App Continuously with Github Actions  and/or Azure DevOps:
For our First iteration we used Github Actions for continuous deployment: [Using Github Action Workflows](https://github.com/sammadu1/node-api/actions)


## App Info
[![Build Status](https://dev.azure.com/sufomadu/nodeapp-CICD/_apis/build/status/nodeapp-CICD?branchName=main)](https://dev.azure.com/sufomadu/nodeapp-CICD/_build/latest?definitionId=12&branchName=main)
