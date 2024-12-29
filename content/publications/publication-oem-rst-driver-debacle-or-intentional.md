+++
title = "OEM Rst Driver Debacle or Intentional"
date = 2024-12-28T21:14:04-08:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = "publications/oem-rst-driver-dilemma/no-rst-driver-found.jpeg"
caption = ""

+++

I am a Computer Hardware professional. I started working with computer technology in the early eighties. I have seen the evolution of technology starting with closed platforms like the game console era and then the move toward open platforms like the [Home Computer Golden Age](https://www.scottrlarson.com/memorials/memorial-my-home-computer-reflections-part-1/). In the last 5 or 10 years, I have witnessed technology changes that are slowly moving away from open hardware designs towards hardware that is locked down and can't be modified by the user.  For more articles on this subject, see my  [DeceptiveTechnology](https://www.scottrlarson.com/categories/deceptivetechnology/) section. 

## Are OEM equipment providers like Dell attempting to turn PC hardware into restricted closed ecosystems?
In the last few years, I have noticed a trend where Dell does not provide RST storage drivers for NVME SSDs (the software that allows a user to cleanly install an operating system from media) on Laptops and Desktops. Normally, you can just go into the BIOS, switch from NVME Raid to ACHI, and be done with it—or can you?

I recently purchased a Dell Inspiron 16 Plus 7640 Laptop with a BIOS that does not allow me to change the RAID storage configuration. Because of this, I was prevented from reinstalling Windows in a clean state from a Windows installation disk due to the storage driver not being available on dells website, and no ability to switch to ACHI. 

![Dell Inspiron 16plus bios storage configuration missing AHCI mode](static/img/dell-inspiron-16-plus-bios-storage-configuration-missing-ahci-mode.jpeg)

Normally, you would see this screen that allows you to switch storage modes
![Dell Inspiron 3030 bios storage configuration AHCI mode](static/img/dell-inspiron-3030-bios-storage-configuration.jpeg)

I checked for advanced configuration options but was not able to find any options for this. Is it a coincidence that Dell has not been releasing the RST storage drivers for most of these models in the last couple of years and now decided that the BIOS configuration should not be changed?

If you check Dell's website for drivers, you probably will not see RST drivers for many models listed. I checked my system with a few different models and so far I don't see it.

![Dell.com Support Storage Driver Listings Lack RST](static/img/dell.com-support-storage-driver-listings-lack-RST.resized.jpeg)

![Dell.com Support Storage Driver Listings Lack RST Differnt Model](dell.com-support-storage-driver-listings-lack-RST-different-model.jpeg)

You can try to find drivers online, especially from Intel's website, but they don't always work for your particular model.

These changes effectively prevents a user from reinstalling the operating system except from the install partition on the device, or from Dell's bios re-installation technology, which contains bloatware and targeted advertising/data collection.

I'm open to being wrong, please let me know if I am missing something. Short of evidence to the contrary. I believe this is one small part of a bigger and long-term planned effort within the PC hardware and software industries to control the user experience for PC technology. Apple is also moving in this direction with the MacOS by limiting non-approved software from being installed. Yes, you can work around it, but it's getting harder and harder to do so with every iteration of the Operating System.

We need some kind of consortium for users to represent our interests otherwise in 10 or 20 years we will have very limited choice when it comes to computer technology.