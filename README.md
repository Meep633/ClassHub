# ClassHub

## What is ClassHub?
ClassHub is an all-in-one application for your classes, combining features from applications such as LMS, Submitty, and Discord. ClassHub was made by Parker Dinsdale ([@pdinsdale](https://github.com/pdinsdale)), Zoha Ahmed ([@Zoha-ahmed](https://github.com/Zoha-ahmed)), and Siyan Zuhayer ([@Meep633](https://github.com/Meep633)) for Intro to ITWS in spring of 2023.

## How to install on an Azure instance
1. Go to the root of your Azure instance (`cd /var/www/html`) and run `sudo -u <authorized user> git clone git@github.com:Meep633/ClassHub.git`
2. Rename the folder to whatever you desire.
3. Go to your folder on your website (ex: `http://FQDN.com/ClassHub/`)

## How to run the application without Azure
To run the application, you will need to host it on a server (jQuery code won't work otherwise due to SOP). The easiest way to do so would be to open it using the Microsoft Live Preview extension on VSCode (https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server).
