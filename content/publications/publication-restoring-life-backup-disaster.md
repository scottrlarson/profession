+++
title = "Restoring your digital life from backup after a disaster"
date = 2019-12-21T14:44:47-08:00
draft = false
aliases = ["/updates/update-restoring-life-backup-disaster/"]
# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Backup", "Planning", "Restoring", "Data", "Digital life protection", "Shelter-in-place"]
categories = ["Guides"]

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = "publications/digital-life/disaster-types.jpg"
caption = ""

+++

*Learn why solely backing up your data isn't always enough to recover from a disaster.*

In this publication, you will learn about:

- [What is disaster recovery backup, and why should I care?](#what-is-disaster-recovery-backup-and-why-should-i-care)
- [How a little planning can drive a successful disaster recovery](#how-a-little-planning-can-drive-a-successful-disaster-recovery)
- [Why waiting for a disaster to happen before you plan is a bad idea](#why-waiting-for-a-disaster-to-happen-before-you-plan-is-a-bad-idea)
- [Understanding technology terms](#terms)

Knowing the difference between backup and disaster recovery, understanding key technology terms, and evaluating software along with storage options can help you develop an effective plan for avoiding the consequences of data loss and downtime after a catastrophe strikes.

## What is disaster recovery backup, and why should I care?
**Backup** is the process of making an extra copy (or multiple copies) of data. You might need to restore data from a backup if you accidentally delete a file, or folder, or when a file, or folder becomes corrupted. 

**Disaster Recovery** is having all tools in place to recover from a loss of data. Do you just need to recover one file, a set of files, or your entire computer? If your entire computer needs to be recovered, will you lose anything recently saved? How do you perform a full recovery of your computer? Knowing the answers to these questions is essential to your recovery plan.

**Disaster Recovery Backup**, on the other hand, refers to the plan and processes for quickly reestablishing access to your data after a catastrophe. If your computer, or applications fail catastrophically, become lost, or stolen, your **Desktop environment**[^desktop-env] can be restored to a previous working condition, minimizing downtime.


> “I am prepared for the worst, but hope for the best.” - Benjamin Disraeli

![Backup storage options photo](/img/publications/digital-life/storage-options.jpg)

### What are the strengths and weaknesses of different storage options and locations
A backup and a disaster recovery backup are similar in that they both need a location to store a copy of the data that is needed for a restoration.

In a **Cloud Storage**[^cloud-storage] scenario, data is stored outside the home, or small office. This off-site location protects your data from being destroyed by a tragedy, like a fire, or loss from a theft of your equipment. The speed and reliability of the **Cloud Backup**[^cloud-backup] service, as well as the internet connection to your home, or office, is a factor in determining the length of time needed for a data restoration.

**Network Storage**[^NetworkStorage], or a **Network Attached Storage Device (NAS)**[^NetworkStorage] are **storage locations**[^storage-location] that give you Cloud like storage in your home. Network Storage gives you the ability to store files onto it from any device in your home that is connected to your home, or business network. The speed in which data can be transferred to, and from a NAS is largely dependent on the kind of hardware (**Network Router**[^router], **WiFi Access Point**[^-wifi-access-point], **Network Switch**[^network-switch], **Network Cabling**[^network-cabling]) you have, and the connection between the NAS and your devices (Wired or Wireless). In my experience, Network Storage Devices are less susceptible to physical connection problems and damage due to the fact that they are rarely moved from their physical location. Wired connections are typically faster than Wireless connections. There are many types of Wired and Wireless connections. Having the latest technology insures that you will have the fastest transfer speeds between two or more devices. Transfer speeds between devices is really important. The less time it takes for data to transfer to and from devices the less likely a problem will occur in the transfer, or backup.

The benefit of using a **Local Storage**[^local-storage] device over Cloud or Network storage is speed, convenience, and ease of use. But moving the storage device around, regularly disconnecting/reconnect it, often in situations that require it, like bringing a laptop with you on the go, may eventually cause damage to, or cause a connection problem with the storage device. In many cases, when a connection problem shows up, the backup software cannot do its job, and you may not know that there is a problem until it's too late.

In most cases, drawbacks of each technology cannot be avoided. It’s best to choose two, or more storage options that work best for your needs and make redundancy your friend. If one storage device, or location fails, have another, and another. Three **storage locations**[^storage-location] are optimal.


![planning to recovery your digital life](/img/publications/digital-life/disaster-recovery-choice.jpg)

## How a little planning can drive a successful disaster recovery
### Identifying the best technologies for achieving your backup and disaster recovery goals for home and small businesses
The important thing to understand first is what kind of computer user you are: **Basic**, **Intermediate**, or **Advanced**.

> “I just do email and docs..”

As a **Basic** user you might not need much of a backup solution. The trick is to find out what you do with your device most of the time, and see if you actually need a backup solution. If you view your mail online using Gmail, Yahoo Mail, or Microsoft (Hotmail,or Outlook Mail) you are agreeing to let that provider store your mail for you. Be aware that just having a Cloud based Email provider store your Email for you may not shield you from mail loss. Even using an Email application like Outlook, or Thunderbird, your mail is stored on the mail server (Not on your device. It might be important to you to archive mail to some other location within your possession. Mail applications usually have archiving functionality which allows you to store a copy of your mail on your device’s storage drive.

Documents are usually stored on your device’s storage drive unless you are using a Cloud Storage service. If you do not use a Cloud Storage service like <a href="https://www.dropbox.com/">Dropbox</a> or <a href="https://www.google.com/drive/">Google Drive</a>, then your documents are stored on your device’s storage drive. Having a backup solution safeguards that data in case you lose your device, or it becomes damaged.


> “I know enough just to get myself into trouble…”

As an **Intermediate** user, you probably use your device professionally, or for education purposes and you work with more than just mail and documents. You might also save files like music, pictures, and videos. You may use non-standard applications like Turbotax, or Quickbooks. In a case like this, regular automatic backups using **backup software**[^backup-software] might be preferable to you.


> “I know my stuff, but I don't really do backup that well…”

As an **Advanced** user, the way you use your device, the placement of everything stored on the device, and the programs you use are all vital to your everyday activities. If you  lost access to your device for too long, it would probably cause a problem for you. In a case like this, using **Disaster Recovery Backup software**[^backup-software] to backup a full copy of your **system drive**[^system-drive] might be preferable to you.


## What kind of backup software do I need?
There are a host of backup software solutions on the market. For **local backups**, Windows 10 comes with its own backup solution called [File History](https://blogs.msdn.microsoft.com/b8/2012/07/10/protecting-user-files-with-file-history/). If you are a **Basic**, or **Intermediate** user this might work for you. You would need to purchase an external hard drive and set up File History to perform regular backups of your important **storage locations**[^storage-location]. If you find that you require more control over the way your data is backed up than what File History offers, commercial third party products such as [EaseUS ToDo Backup](https://www.easeus.com/backup-software/tb-enterprise.html?ad&gclid=EAIaIQobChMImPS1-ea65gIVth6tBh0thgM9EAAYAiAAEgKfgvD_BwE), and [Paragon Backup and Recovery](https://www.paragon-software.com/backup-recovery/) can offer more options.

For **Intermediate** and **Advanced** users, who cannot be without access to their programs and data for too long, and want to minimize the time in recovering from a disaster, I recommend Disaster Recovery Backup software like [Macirum Reflect](https://www.macrium.com/reflectfree), or [Acronis True Image](https://www.acronis.com).

## Why waiting for a disaster to happen before you plan is a bad idea
Many things can happen in the process of using your device. The place where you store your device could be involved in a catastrophe, your device could be stolen, your device’s internal storage drive could fail, you could accidentally delete a file, or a file could become corrupted in the process of using your device.

Don’t wait until it’s too late to devise a plan to protect your data. Protecting your data is like having insurance, you don't know when, or if, you will need it, but when you do, boy can it be a lifesaver.
Having a plan also builds confidence, so when your data becomes inaccessible, you have actions you can take to restore your access. Just having a plan alone can help you improve your knowledge about what you know, and don’t know about your device and your data.

## Conclusion
With a disaster recovery solution in place you can protect yourself from:

- **Downtime**[^downtime], by avoiding lengthy repairs to your device.
- High repair, or data recovery costs when a device fails catastrophically.
- **Malware**[^malware], or **ransomeware**[^ransomeware] infections by being able to restore from a previous backup.

[Contact me](http://scottrlarson.com/#contact) for more information about developing a backup plan. I can help you identify what backup solution you need, and help you manage it.

## Terms

[^desktop-env]: A desktop environment is the settings, customizations, applications, and personal data of your computer.
[^cloud-storage]: **Cloud Storage** is a software-as-a-service solution that is designed to backup your most important data at regular intervals. You usually pay a monthly fee for the storage space and the software to backup your device.
[^cloud-backup]: **Cloud Backup** backs up and stores files with a cloud service. In the event of data loss, you can restore files your files. Cloud backup is different then cloud storage because you must manually select files you want to store in the cloud, while cloud backup services work automatically to save and sync files stored on your computer.
[^cloud-storage]: **Cloud Storage** is a data center that is accessed via a cloud software service. 
[^downtime]: **Downtime** is the length of time when you are unable to access your device, or any data that is stored on that device. 
[^local-storage]: **Local storage** is a hard, or solid state storage drive that is either mounted the device, or connected to the device externally via USB or SATA. Network storage is a storage device that is connected to your computer via your modem or router using an Ethernet or Wireless connection. 
[^storage-location]: A **Storage Location** is a local drive or a cloud based service that stores files.
[^malware]: **Malware** is software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system.
[^NetworkStorage]: **Network Storage**, or a **Network Attached Storage (NAS)** is a device that contains a storage drive and can be connected to an existing home, or office network.
[^network-switch]: **Network Switch** is a device that allows you to connect multiple devices to a network allowing those devices to either talk to the internet, or to each other. 
[^network-cabling]: **Network Cabling**</a> are the cords that are used in connecting or hard wiring devices to a network. 
[^ransomeware]: **Ransomware** is a type of malware from cryptovirology that threatens to publish the victim's data or perpetually block access to it unless a ransom is paid. 
[^router]: A **Network Router** is a network device that helps provide internet access to multiple devices in the home, or small office.
[^backup-software]: **Backup Software** takes over the job of backing up your data to a **storage location**[^storage-location]. It can be executed manually, or setup to run automatically and regular intervals. Disaster Recovery Backup software backs up your system drive and can restore your desktop environment to its original working state before a disaster.
[^system-drive]: **System Drive** is the drive that your device boots and operates from. In most cases all of your settings: What applications you have installed, and the look and feel of your desktop and even your personal/business data are stored on the system drive.
[^wifi-access-point]: A **WiFi Access Point** is a device that connects to your router giving your devices Wifi access to your internet connection. Most routers come with Wifi so you would not normally use a Wifi Access point unless you needed to extend the range of your WiFi coverage in a home or office. 

 
