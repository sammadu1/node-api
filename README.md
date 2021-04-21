# Test deployment

&bull; Dev environment `http://localhost:8801/string-api/:string-you-want-to-search`


&bull; Prod environment-Heroku `https://devopsyap.herokuapp.com//string-api/:string-you-want-to-search`

&bull; Prod environment-Azure `https://devopsyap.herokuapp.com//string-api/:string-you-want-to-search`








## Deploy the App Service Infrastructure:

Click the button below to deploy an Azure Web App for Linux. This will create a new app service plan and web app with a dev deployment slot. You can then create build and release pipelines at dev.azure.com to continuously deploy the node application in this repo to the dev deployment slot.

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fmikepfeiffer%2Fnode-express-azure%2Fmaster%2Fazuredeploy.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>

## Deploy the App Continuously with Azure DevOps:
Follow my step-by-step guide: [Build Your First CI/CD Pipeline using Azure DevOps](https://mikepfeiffer.io/azure-devops-pipeline.html)

This walkthrough contains all the steps you should follow to fork this repo and build your own automated build and release pipeline.

## App Info