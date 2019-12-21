+++
title = "Restoring your digital life from backup after a disaster"
date = 2019-12-21T14:44:47-08:00
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
*Learn why solely backing up your data isn't always enough to recover from a disaster.*

In this update, you will learn about:

- What is disaster recovery backup, and why should I care?
- How a little planning can drive a successful disaster recovery
- Why waiting for a disaster to happen before you plan is a bad idea 
- Understanding technology terms

When you purchase an automobile, you usually take it for a test drive. This is done to make sure that it works the way you expect it to. You don't want to waste your time and money on an automobile that isn't suited for your needs. Understanding the essentials of backup and disaster recovery is like test driving an automobile. What's the point of making a backup if you don't test the recovery process? How are you going to know that after everything is all said and done you are going to get back what you expect? Driving a car off the lot without testing it is easy, The hard part is facing what you got yourself into if the car doesn't drive the way you expect it to in the long run. The unforeseen consequences of lost time and money that you might have to spend to hire a professional to get you out of an unplanned disaster may cause you to lose business, or prevent you from getting on with your life. Downtime is rarely factored into a backup restoration scenario. There is an inclination to feeling like all bases are covered when you know you have a copy of your data stored somewhere. This creates a false sense of security. It may come as a shock to you when you find out that the process of recovering data can take time. Problems can arise that might prevent you from restoring that backup you made. What if your data is stored in the cloud? Did you know that the speed of a restore is limited by the actual speed of your internet connection, and the time it takes for the software or your service provider to transfer that data to your local storage device? What if your backup software was running, but behind the scenes it was not actually storing any data, or in the process of storing it, the data becomes corrupted?

Separating backup from disaster recovery, understanding key terms, and evaluating technologies and storage options can help you develop an effective plan for avoiding the consequences of downtime.

## What is disaster recovery backup, and why should I care?

**Backup** is the process of making an extra copy (or multiple copies) of data. You might need to restore data from a backup if you accidentally delete a file, or folder; or a file, or folder becomes corrupted. 
**Disaster Recovery** is having everything in place to recover from a loss of data. Do you just need to recover one file, a set of files, or your entire computer? If your entire computer needs to be recovered, will you lose anything current? How do you perform a full recovery of your computer? Knowing the answer to the questions that are important.
**Disaster Recovery** Backup on the other hand, refers to the plan and processes for quickly reestablishing access to your device the way it was operating after a catastrophe. In the case of Disaster Recovery Backup, a catastrophe would usually cause some kind of damage to your operating environment where you would be unable to continue working with your import data. 

In either scenario, data can then be stored onto a local, network, or cloud based storage device. But in the case of a Disaster Recovery Backup, if your computer, or applications fail catastrophically, become lost, or stolen, your operating environment can be restored to a previous working condition, minimizing downtime.


> “I am prepared for the worst, but hope for the best.” - Benjamin Disraeli


## What are the strengths and weaknesses of different storage options and locations
A backup and a disaster recovery backup are similar in that they both need a location to store a copy of the data that is needed for a restoral.

In a **Cloud Storage** scenario, data is stored outside the home, or small office. This off-site location protects your data from being destroyed by a tragedy, like a fire, or loss from a theft of your equipment. The drawback is that when you need to restore that data, it can take days or weeks to retrieve that data, as you are depending on the speed and reliability of the Cloud Backup service and the internet connection to your home, or office.

**Network Storage**, or a **Network Attached Storage Device (NAS)** are storage locations, or devices that are attached to your home network, accessible primarily from any computer in the home, or small office. If you have multiple computers, or devices that need to be backed up, and you do not want to store that information in the cloud for various reasons, you can store that data on a Network Storage device like a **NAS**. The drawback is that the speed in which the data is backed up from one, or more devices is largely dependent on the kind of hardware (**Router**, **WiFi Access Point**, **Network Switch**, **Network Cabling**) you have in your home, and the method of connection (Wired or Wireless). In my experience, Network Storage Devices are less susceptible to physical connection problems and damage due to the fact that they are rarely moved from their physical location.

A **Local Storage** device would be an Internal, or External storage device that is connected directly to the device requiring a backup, using a USB or SATA data cable. The benefit of using a Local Storage device is speed, convenience and ease of use. The drawback from this convenience and ease of use is that moving the storage devices around, unplugging them often in situations that require it, like bringing a laptop with you on the go may eventually cause damage to, or cause a connection problem with the storage device and the computer. In many cases, when a connection problem shows up, the backup software cannot do its job, and you might not even know it until it's too late.

In most cases, drawbacks of each technology cannot be avoided. It’s best to choose two or more storage options that work best for your needs and make redundancy your friend. If one storage device, or location fails, have another, and another. Three storage locations are optimal.

## How a little planning can drive a successful disaster recovery
### Identifying the best technologies for achieving your backup and disaster recovery goals for home and small businesses
The important thing to understand first is what kind of computer user you are: **Basic**, **Intermediate**, or **Advanced**.

> “I just do email and docs..”

As a **Basic** user you might not need much of a backup solution. The trick is to find out what you do with your device most of the time and see if you actually need a backup solution. If you view your mail online using Gmail, Yahoo Mail, or Microsoft (Hotmail,or Outlook Mail) you are agreeing to let that provider store your mail for you. Having a cloud based mail provider store your mail for you may not indemnify you from mail loss. Even using a mail application like Outlook or Thunderbird your mail is stored on the mail server. So it might be important to you to archive mail to some other location. Mail applications usually have archiving functionality where you can set it to store an archive copy of your mail on your computer’s hard drive.

Documents are usually stored on your computer unless you are using a cloud storage service. If you do not use a cloud storage service like Dropbox or Google Drive, then your documents are stored on your device. Having a backup solution to make a backup of that data might be preferable to you in the case of losing your device, or it becoming damaged.

> “I know enough just to get myself into trouble…”

As an **Intermediate** user, you probably use your computer for work, or school and you work with more than just mail and documents. You might save other files beyond just documents like music, pictures, and videos. You may use non-standard applications like Turbo Tax, or Quickbooks. In a case like this, regular automatic backups using a backup application might be preferable to you.

> “I know my stuff, but I don't really do backup that well…”

As a **Advanced** user, the way you use your computer, the placement of everything stored on the device, and the programs you use is vital to your everyday activities. If any of it was lost for too long, it would probably cause a problem for you. In a case like this, Disaster Recovery Backup might be preferable to you.

## What kind of backup software do I need?
There are a host of backup software solutions on the market. For **local backups**, Windows 10 comes with its own backup solution called [File History](https://blogs.msdn.microsoft.com/b8/2012/07/10/protecting-user-files-with-file-history/). If you are a **Basic**, or **Intermediate** user this might work for you. You would just purchase an external hard drive and set up File History to perform regular backups of your important storage locations. If you find that you require more control over the way your data is backed up than what File History offers, commercial third party products such as [EaseUS ToDo Backup](https://www.easeus.com/backup-software/tb-enterprise.html?ad&gclid=EAIaIQobChMImPS1-ea65gIVth6tBh0thgM9EAAYAiAAEgKfgvD_BwE), and [Paragon Backup and Recovery](https://www.paragon-software.com/backup-recovery/) can offer more options.

For **Intermediate** and **Advanced** users, who cannot be without access to their programs and data for too long, and want to minimize the time in recovering from a disaster, I recommend a Disaster Recovery Backup solution like [Macirum Reflect](https://www.macrium.com/reflectfree), or [Acronis True Image](https://www.acronis.com).

## Why waiting for a disaster to happen before you plan is a bad idea
Many things can happen in the process of using your device. The place where you store your device could be involved in a catastrophe, your device could be stolen, your device’s internal storage device could fail, you could accidentally delete a file, or a file could become corrupted in the process of using it.

Don’t wait until it’s too late to devise a plan to protect your data. It's like insurance, you don't know when, or if you will need it, but when you do, boy can it be a lifesaver.
Having a plan also builds confidence, so when your data becomes inaccessible, you have actions you can take to restore that access. Just having a plan by itself can help you weather that storm and it can help you improve your knowledge about what you know, and don’t know about your device and your data.

## Conclusion
With a disaster recovery solution in place you can protect yourself from:

- Downtime, by avoiding lengthy repairs to your data, or system configuration.
- High repair, or data recovery costs when a device fails catastrophically.
- Malware, or Ransomeware infections by being able to restore from a previous backup.

[Contact me](http://scottrlarson.com/#contact) for more information about developing a backup plan. I can help you identify what backup solution you need, and help you manage it.

## Terms
- **Local storage** is a hard, or solid state storage drive that is either in the computer, or connected to the computer via an external interface such as USB or SATA.
- **Network storage** is a storage device that is connected to your computer via your modem or router using an Ethernet or Wireless connection.
- **Cloud storage** is a data center that is accessed via a cloud software service.
- **Operating Environment** is the state that your computer, or device is in. Your programs, the functioning of your desktop and the location of your data.
- **Downtime** is a situation where you do not have access to your computer, or any data that you need to function.
- A **Router** is a network device that helps provide internet access to multiple devices in the home, or small office.
- A** WiFi Access Point** is a device that connects to your router giving your devices Wifi access to your internet connection. Most routers come with Wifi so you would normally use a Wifi Access point unless you needed to extend the range of your WiFi coverage in a home or office.
- A **Network Switch** is a device that allows you to connect multiple devices to a network allow those devices to either talk to the internet, or to themselves.
- **Network Cabling** is the cords that are used in connecting or hard wiring devices to a network.
- **Operating Environment** is the software and data that is related to accessing your files. When you log into your device and are presented with a desktop contain applications you can open, and files you can access, the operating environment allows you to do that.

 
