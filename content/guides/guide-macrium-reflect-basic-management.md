+++
title = "Managing Macrium Reflect Backups For Beginners"
date = 2020-12-23T14:57:52-08:00
draft = false

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
Macrium Software was founded in 2006 when CEO and Founder Nick Sills experienced a personal data disaster and in the process discovered existing backup tools were not as good as he expected. Wanting a software solution that was practical and easy to use, Nick and his team developed Macrium Reflect to create a safe and secure disk image with ultra-fast recovery times. 

This is a guide to help beginners perform some operations of managing their own backups. It outlines the basics, If you want to learn more information about specific options, check the [user guide](https://knowledgebase.macrium.com/). 

You can monitor backup schedules, change the day/time backups run and the settings for each backup. Mostly, Macrium does all the work automatically, but on occasion you might need to observe that the backups are running correctly or change a setting.

The most important parts to focus on are: Backups, Restores, Scheduling backup jobs.

With disaster recovery solutions, backing up is the process of creating an image file[^image-file] of the contents of your computer that can be restored from later in the event of data loss[^data-loss] or a catastrophe[^disaster-recovery-catastrophe].

Macrium Reflect (When setup to perform backups) automatically backs up your data usually to an external device like a portable storage device[^portable-storage-device], or network attached storage device[^network-attached-storage-device] on a regular basis. To determine when your computer backs up, start Macrium Reflect.

Open your start menu and type the first few letters of "Macrium", you should see a screen like this:

![Start Menu Search: Macrium Reflect](/img/guides/MacriumReflect/start-search-menu-macrium-reflect.png)

Once you start Reflect, you should see a screen like this:

![Macrium Reflect: Main Screen](/img/guides/MacriumReflect/macrium-reflect-main-interface-outline.png)

Click on option 4, the "**Scheduled Backups**" tab. You will be presented with a screen that shows you a set of backup schedules with the **Name**, type of backup (Full, Differential, and Incremental), **Schedule** (day and time the backup will run), the **Next Run Time**, the **Last Run Time** (when the backup ran previously), The **Status** of the backup (Ready - will run on the next run time, Running - Currently running), **Last Result** (Successful, or Failed):

![Macrium Reflect: Schedule Backups](/img/guides/MacriumReflect/macrium-reflect-scheduled-backups-menu.png)

Due to the complexity of maintaining disaster recovery backups, in many cases, I [remotely manage](/system-management) backups for you as a service. If you have an interested of setting up a disaster recovery backup to secure your data and your desktop environment, [contact me](/#contact).

## Terms

[^image-file]: **Image File**: In terms of disaster recovery backup, an image file is a file container that stores data from a backup to make managing and retrieving the backup data easier to access.
[^data-loss]: **Data Loss**: In terms of backup and recovery, data loss is when you lose access to a file, or a set of files, though accidental deletion, or file corruption.
[^disaster-recovery-catastrophe]: **Catastrophe**: A situation where you are unable to access your device stemming from: Accidental damage, theft, or a physical disaster.
[^portable-storage-device]: A **Portable Storage Device** is a storage unit that sits near your computer, connected via USB or by some other connection.
[^network-attached-storage-device]: A **Network Attached Storage Device**, or NAS, is a storage device that is accessible from a network location in your home or office, that multiple computers can share.
