+++
title = "How to Use the Enpass Password Manager"
date = 2022-11-01T06:33:32-07:00
draft = false
summary = "This guide covers the basics of setting up a Enpass on a new device, how to add new information to Enpass and how to use Enpass to log into your accounts. "
# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

This guide covers the basics of [setting up a Enpass on a new device](/guides/guide-enpass-password-manager/#downloading-enpass), [how to add new information to Enpass](/guides/guide-enpass-password-manager/#browser-extension) and [how to use Enpass to log into your accounts](/guides/guide-enpass-password-manager/#enpass-features). For more in-depth in formation on how to use particular features, visit the [support page](https://support.enpass.io/home.htm). 

Enpass is [cross-platform](/terms/term-cross-platform) Password Manager. Password Mangers help you keep track of your account information. Learn about [why this is important](\publications\publication-why-password-managers.md) and [why I recommend everyone use one](\recommendations\recommendation-password-managers.md).

Enpass relies on 3rd party [cloud services](/terms/term-cloud-service) to sync your information between your devices such as a PC/Mac Desktop, a Tablet or a phone. I choose solutions that are tolerant to change as much as possible.

![Graph on how Enpass works](/img/guides/Enpass/Diagram-Enpass.png)

## Understanding how Enpass Works

Enpass can appear complicated at first, but once you understand how to use it, it will become second nature.

Enpass relies on 3 parts to keep track of and make entering passwords easier for you.

The first important component is the "**Password Vault**". This is an encrypted file where your information is stored. Any time you use Enpass to grab or save information, you do so via the Password Vault. Normally this file is stored on your computer. Enpass makes use of a **Cloud Service** to synchronize information in your Vault to cloud storage. That way, when you setup Enpass on another device such as a mobile device, and add information into it, that information gets synced between any device you have setup Enpass on.

Normally, you can open your Vault and view/add information similar to an excel file. Copying and Pasting information out of an excel into a website can be cumbersome, if you have multiple sites you visit frequently. That's why Enpass uses a **Extension** for a web browser, integrating your Vault information with the login form's of any particular website you frequent. This way Enpass can automatically enter and save information into website login forms as you type it. 


## Downloading Enpass

![Enpass-Website-Download](/img/guides/Enpass/Enpass-Website-Download.png)
Download [Enpass](https://www.enpass.io/)

![Enpass-Website-Download-Selction](/img/guides/Enpass/Enpass-Website-Download-Selction.png)
Chose the particular version that corosponds with the platform you use.

![Enpass-Website-Open-File](/img/guides/Enpass/Enpass-Website-Open-File.png)
Open the file and follow the instructions for your particular platform.

## Installing Enpass

![Enpass-Program-Install](/img/guides/Enpass/Enpass-Program-Install.png)

![Enpass-Program-Cloud-Sync](/img/guides/Enpass/Enpass-Program-Cloud-Sync.png)

Connect Enpass to the Cloud service you currently use. At some point it should ask you to create a Master Password for your Password Vault. Create a Password and save it in a secure but easily accessible location as you will frequently need it to access your information.                  

![Enpass-Program-Cloud-Sign-in](/img/guides/Enpass/Enpass-Program-Cloud-Sign-in.png)
Log into your cloud service

![Enpass-Program-Cloud-Auth](/img/guides/Enpass/Enpass-Program-Cloud-Auth.png)
Provide authorization for Enpass to use your Cloud Service to store your Vault.

![Enpass-Program-Cloud-Link](/img/guides/Enpass/Enpass-Program-Cloud-Link.png)
If you get a prompt to allow this site to open the enpassauth link with Enpass Password Manager, chose Yes. If you have to do this process again in  the future, choosing Yes will make this process easier.

## Setting Up Enpass

![Enpass-Program-Settings-Valut](/img/guides/Enpass/Enpass-Program-Settings-Valut.png)

After the connection is completed, you should see the "Vault Settings" panel. If not, you can use the three dots at the upper right to access the settings. Here you can see the cloud service you have connected to and you can also change your Master Password.

![Enpass-Program-Settings-Security](/img/guides/Enpass/Enpass-Program-Settings-Security.png)
Click on the "Security" tab at the bottom and review the settings. I recommend changing the "System inactive for XX Minutes from 1 to 20 as 1 Minute is way to short of a time." This means that have that amount of time has passed. Enpass will lock the Value, requiring you to reenter your Master Password before gaining access to your information. You can setup a 4 digit pin to make entering that information easier. Be sure to save that PIN number somewhere else, or commit it to memory so you wont forget it. 

![Enpass-Program-Settings-Broswer-Install-Extensions](/img/guides/Enpass/Enpass-Program-Settings-Broswer-Install-Extensions.png)
Click on  the "Browser" tab and click on "Install Extensions". This will run you through the process of downloading and enabling an Extension for the Browser of your choice (A Browser is an application you use to access websites)

## Browser Extension

[More information on installing the browser extension](https://support.enpass.io/app/extension/installing_browser_extension.htm).

[More information on connecting the browser extension](https://support.enpass.io/app/extension/connecting_browser_extension_to_enpass.htm).

![Enpass-Website-Broswer-Extensions-Install](/img/guides/Enpass/Enpass-Website-Broswer-Extensions-Install.png)
Chose the browser to install the Extension. The entry at the top will be highlighted, that is the Browser that is set as Default. (A default browser is one that opens by default when even you use a program that relies on connecting to the web. If you use another browser more often then the one selected, chose the options below.) 


![Enpass-Addon-Auth-PassCode-Full](/img/guides/Enpass/Enpass-Addon-Auth-PassCode-Full.png)
Enpass wants to make sure that this process is being done by a human so enter the code that is display in the top-right box.

![Enpass-Website-Broswer-Extension-Success](/img/guides/Enpass/Enpass-Website-Broswer-Extension-Success.png)

**If you get a prompt asking you to make Enpass the Default for saving passwords, click yes. Otherwise your browser will try to take over saving passwords for you which defeats the purpose of relying on Enpass to handle that information for you.**

## Enpass Features

**This guide shows you how to use Enpass from sites you already visit, for more detailed information about this process, read [Capturing and saving new items in Enpass using the browser extension](https://support.enpass.io/app/extension/capturing_and_saving_new_items_in_enpass_using_browser_extension.htm ). If you want to enter information the manual way read "[Adding Items to Enpass](https://support.enpass.io/app/item/adding_items_in_enpass.htm)"**

![Enpass-Website-Login-Unlock-Auto-Add](/img/guides/Enpass/Enpass-Website-Login-Unlock-Auto-Add.png)
Start by visiting a website that you frequent the most, one that you want Enpass to handle passwords for. 
![Enpass-Website-Login-Add-Details](/img/guides/Enpass/Enpass-Website-Login-Add-Details.png)
Type in your Username and Password.

![Enpass-Website-Login-Add-Entry](/img/guides/Enpass/Enpass-Website-Login-Add-Entry.png)
Click "Add to Enpass"
![Enpass-Website-Login-Add-Item](/img/guides/Enpass/Enpass-Website-Login-Add-Item.png)
Verify the details are correct. Use the "Show More" option to add additional information.

![Enpass-Website-Login](/img/guides/Enpass/Enpass-Website-Login.png)
The next time you visit your site, and are logged out of that site, you can select the option associated with the site and Enpass will Auto-type that information in the fields for you.

Enpass will ask to auto-type information and auto-generate passwords for you when you create accounts. Please have at least one other device besides your main computer, such as a mobile device, setup with Enpass, so you can access that information on the go. After you have set up all your devices. I recommend using Enpass to auto-generate passwords for any site you access, instead of relying on a password you created. Its safer and easier to use this method as the auto-generated passwords are harder to guess by attackers, and easier because Enpass handles the remembering for you. 


